import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  isCartOpen: boolean = false;
  cartItems: any[] = []; 
  subtotal: string = 'Rs. 0.00'; 
  cartdata: any[] = [];
  cartimage: any[] = [];
  userid = localStorage.getItem('userid');
  baseImageUrl = 'http://localhost:3000/upl/'

  constructor(private http: HttpClient,private router: Router) {
  }

  ngOnInit(): void {
    this.cartitem();

  }
  toggleCart() {
    this.isCartOpen = !this.isCartOpen;
  }

  closeCart() {
    this.isCartOpen = false;
  }

  cartitem(): void {
    this.http.get<any[]>(`http://localhost:3000/user/getcart/${this.userid}`).subscribe(
      data => {
        console.log('data: ', data);
        this.cartItems = data;
        this.cartItems.forEach((ele: any) => {
          this.cartimage = ele.ProductImage;
          console.log(' this.cartimage: ', this.cartimage);
        })
        this.calculateSubtotal();
        console.log('this.cartItems: ', this.cartItems);
      },

    );
  }

  removeFromCart(cartID: number) {
    this.http.delete(`http://localhost:3000/user/removeFromCart/${cartID}`).subscribe(() => {
      console.log('Product deleted:', cartID);
      this.cartitem(); 
     
    }, (error) => {
      console.error('Failed to delete product', error);
    });
  }

  allcart(){
    this.router.navigate(['/user/allcart'])
  }
  calculateSubtotal(): void {
    this.subtotal = this.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }


}

