import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {
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
    this.http.get<any[]>(`http://localhost:3000/user/getwishlist/${this.userid}`).subscribe(
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

  removeFromCart(wishlistID: number) {
    this.http.delete(`http://localhost:3000/user/removeFromwishlist/${wishlistID}`).subscribe(() => {
      console.log('Product deleted:', wishlistID);
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
