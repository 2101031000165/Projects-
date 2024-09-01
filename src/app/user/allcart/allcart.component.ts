import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allcart',
  templateUrl: './allcart.component.html',
  styleUrl: './allcart.component.css'
})
export class AllcartComponent implements OnInit {
  allitems :any[] = [] ;
  cartimage: any[] = [];
  userid = localStorage.getItem('userid');
  baseImageUrl = 'http://localhost:3000/upl/'
  constructor(private http: HttpClient,private router: Router) {

  }

  ngOnInit(): void {
    this.cartitem()
  }

  cartitem(): void {
    this.http.get<any[]>(`http://localhost:3000/user/getcart/${this.userid}`).subscribe(
      data => {
        console.log('data: ', data);
        this.allitems = data;
        console.log('this.allitems: ', this.allitems);
        this.allitems.forEach((ele: any) => {
          this.cartimage = ele.ProductImage;
          console.log(' this.cartimage: ', this.allitems);
        })
        
        console.log('this.cartItems: ', this.allitems);
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

  increaseQuantity(item) {
    item.Quantity++;
  }

  decreaseQuantity(item) {
    if (item.Quantity > 1) {
      item.Quantity--;
    }
  }
  clearCart() {
    this.allitems = [];
  }

  checkout(){
    this.router.navigate(['/user/checkout'])
  }
  
  ContinueCart() {
    this.router.navigate(['/user/products'])
  }

}
