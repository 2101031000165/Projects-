import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  checkoutForm: FormGroup;
  cartItems: any[] = []; 
  subtotal: string = 'Rs. 0.00'; 
  cartdata: any[] = [];
  cartimage: any[] = [];
  userid = localStorage.getItem('userid');
  baseImageUrl = 'http://localhost:3000/upl/'

  constructor(private fb: FormBuilder, private http : HttpClient) { }

  ngOnInit(): void {
    this.checkoutForm = this.fb.group({
      email: [''],
      country: ['India'],
      firstName: [''],
      lastName: [''],
      address: [''],
      apartment: [''],
      city: [''],
      state: ['Gujarat'],
      pinCode: [''],
      paymentMethod: [''],
      cardNumber: [''],
      expiryDate: [''],
      securityCode: [''],
      cardName: ['']
    });

    this.cartitem()
    this.UserDetails()

    this.checkoutMCDetails()
  }

  onSubmit(): void {
  
      const checkoutData = {
        product_id : this.cartItems[0].ProductId,
        status : 'booked',
        quantity : 1,
        price : 200,
        userid : this.userid
       
        
      };
      this.http.post('http://localhost:3000/user/order', checkoutData).subscribe(
        response => {
          console.log('Success!', response);
      },
    )
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
        console.log('this.cartItems: ', this.cartItems);
      },

    );
  }

  UserDetails() {
    this.http.get<any[]>(`http://localhost:3000/user/getUserId/${this.userid}`).subscribe(
      data => {
        console.log('User Data==>: ', data);
        
        
      },

    );
  }

  checkoutMCDetails() {
    this.http.get<any[]>(`http://localhost:3000/user/getorder/${this.userid}`).subscribe(
      data => {
        console.log('User Data==>MCCCCCCCCCCCCCCCCCCCC: ', data);
        
        
      },

    );
  }
}
