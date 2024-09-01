import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { CartCounterService } from '../../commom-component/cart-counter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  isCartOpen: boolean = false;
  cartItems: any[] = []; // Replace with your actual cart items array
  subtotal: string = 'Rs. 0.00'; // Replace with your actual subtotal value
  cartdata: any[] = [];
  cartimage: any[] = [];
  userid = localStorage.getItem('userid');
  baseImageUrl = 'http://localhost:3000/upl/'
  cartCount: number = 0; 

  constructor(private http: HttpClient, private cartService: CartCounterService) {
  }
  ngOnInit(): void {
    this.cartService.cartItemCount$.subscribe(count => {
      this.cartCount = count;
    });
    this.cartitem()
  }

  cartitem(): void {
    this.http.get<any[]>(`http://localhost:3000/user/getcart/${this.userid}`).subscribe(
      data => {
        console.log('data: ', data);
        this.cartItems = data;
        this.cartCount = this.cartItems.length; 
        this.cartItems.forEach((ele: any) => {
          this.cartimage = ele.ProductImage;
          console.log(' this.cartimage: ', this.cartimage);
        })
        this.calculateSubtotal();
        console.log('this.cartItems: ', this.cartItems);
        this.cartService.updateCartItemCount(this.cartItems.length);
      },

    );
  }
  

  toggleCart() {
    this.isCartOpen = !this.isCartOpen;
  }

  closeCart() {
    this.isCartOpen = false;
  }


  calculateSubtotal(): void {
    this.subtotal = this.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

}
