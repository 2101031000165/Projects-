import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartCounterService } from '../../commom-component/cart-counter.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  intervalEnabled = false;
  noWrapEnabled = false;
  ProductData: any[] = [];
  data: any = [];
  forLOOPIMage : any[] = [];
  groupedData: any;
  products: any[] = [];
  baseImageUrl = 'http://localhost:3000/upl/'
  selectedTab: string = 'Man';
  userId = localStorage.getItem('userid'); 

  constructor (private http: HttpClient,private router: Router ,  private cartService: CartCounterService) {
   
  }

  ngOnInit(): void {
    this.refreshData();
    
  }
  

  selectTab(tab: string): void {
    this.selectedTab = tab;
  }
  
  refreshData() {
    this.http.get<any[]>('http://localhost:3000/user/getProduct').subscribe(
      data => {
        this.ProductData = data;
        console.log('ProductData:', this.ProductData);
        this.ProductData.forEach((ele : any) => {
          console.log('ele: ', ele['category']);
          this.forLOOPIMage = ele.productImage
          console.log('forLOOPIMage: ', this.forLOOPIMage);


        })
      }
    );
  }

 addToCart(productId: any): void {
  const userId = localStorage.getItem('userid');
  console.log('productId: ', productId);
  if (!userId) {
    // User is not logged in, redirect to login page
    this.router.navigate(['auth/login']);
  }
  else {
    const payload = {
      productId: productId,
      userid: parseInt(this.userId)
    };
    
    console.log('payload: ', payload);
    this.http.post('http://localhost:3000/user/cart', payload).subscribe(
      response => {
        
        window.location.reload();
      },
      error => {
        console.error('Error adding product to cart:', error);
      }
    );
  }

  
  
}

wishlistitems(productId: any): void {
  const userId = localStorage.getItem('userid');
  console.log('productId: ', productId);
 
   
    const payload = {
      productId: productId,
      userid: userId
    };
    
    console.log('payload: ', payload);
    this.http.post('http://localhost:3000/user/wishlist', payload).subscribe(
      response => {
        
        window.location.reload();
        console.log('Product added to wishlist:', response);
       ;
      },
  
    );
  

  
  
}

  

  

}
