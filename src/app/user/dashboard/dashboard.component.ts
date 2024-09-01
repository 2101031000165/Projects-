import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  imageURL :any
  baseImageUrl = 'http://localhost:3000/upl/'
  forLOOPIMage : any[] = []
  ProductData: any[] = [];

  constructor(private http: HttpClient,private router: Router) {

  }

  ngOnInit() {
    this.fetchCarouselData();
    this.refreshData();
  }

   images : any[] = [];
  

  cards = [
    {
      title: 'F. Ultimate Smart Watch',
      imageUrl: 'assets/cdn/shop/files/watch_600x9827.png',
      srcset: 'assets/cdn/shop/files/watch_600x9827.png?v=1692459788 152w,assets/cdn/shop/files/watch_600x9827.png?v=1692459788 266w,assets/cdn/shop/files/watch_600x9827.png?v=1692459788 366w,assets/cdn/shop/files/watch_600x9827.png?v=1692459788 576w,assets/cdn/shop/files/watch_600x9827.png?v=1692459788 600w,',
      sizes: '100vw',
      loading: 'lazy',
      width: '800',
      height: '300',
      description: 'Rs. 6,400.00',
      link: 'collections/card1.html'
    },
    {
      title: 'F. Ultimate Smart Watch',
      imageUrl: 'assets/cdn/shop/files/lipstick_1_600x86ef.png',
      srcset: 'assets/cdn/shop/files/lipstick_1_600x86ef.png?v=1696941869 152w,assets/cdn/shop/files/lipstick_1_600x86ef.png?v=1696941869 266w,assets/cdn/shop/files/lipstick_1_600x86ef.png?v=1696941869 366w,assets/cdn/shop/files/lipstick_1_600x86ef.png?v=1696941869 576w,assets/cdn/shop/files/lipstick_1_600x86ef.png?v=1696941869 600w,',
      sizes: '100vw',
      loading: 'lazy',
      width: '800',
      height: '300',
      description: 'Rs. 6,400.00',
      link: 'collections/card1.html'
    },
    {
      title: 'F. Ultimate Smart Watch',
      imageUrl: 'assets/cdn/shop/files/silver-earring_6_600x0c79.png',
      srcset: 'assets/cdn/shop/files/silver-earring_6_600x0c79.png?v=1693673686 152w,assets/cdn/shop/files/silver-earring_6_600x0c79.png?v=1693673686 266w,assets/cdn/shop/files/silver-earring_6_600x0c79.png?v=1693673686 366w,assets/cdn/shop/files/silver-earring_6_600x0c79.png?v=1693673686 576w,assets/cdn/shop/files/silver-earring_6_600x0c79.png?v=1693673686 600w,',
      sizes: '100vw',
      loading: 'lazy',
      width: '800',
      height: '300',
      description: 'Rs. 6,400.00',
      link: 'collections/card1.html'
    },
    {
      title: 'F. Ultimate Smart Watch',
      imageUrl: 'assets/cdn/shop/files/heighheel_1_600xf7ea.png',
      srcset: 'assets/cdn/shop/files/heighheel_1_600xf7ea.png?v=1692201238 152w,assets/cdn/shop/files/heighheel_1_600xf7ea.png?v=1692201238 266w,assets/cdn/shop/files/heighheel_1_600xf7ea.png?v=1692201238 366w,assets/cdn/shop/files/heighheel_1_600xf7ea.png?v=1692201238 576w,assets/cdn/shop/files/heighheel_1_600xf7ea.png?v=1692201238 600w,',
      sizes: '100vw',
      loading: 'lazy',
      width: '800',
      height: '300',
      description: 'Rs. 6,400.00',
      link: 'collections/card1.html'
    },
    {
      title: 'F. Ultimate Smart Watch',
      imageUrl: 'assets/cdn/shop/files/bag_6_600x4ad0.png',
      srcset: 'assets/cdn/shop/files/bag_6_600x4ad0.png?v=1692291160 152w,assets/cdn/shop/files/bag_6_600x4ad0.png?v=1692291160 266w,assets/cdn/shop/files/bag_6_600x4ad0.png?v=1692291160 366w,assets/cdn/shop/files/bag_6_600x4ad0.png?v=1692291160 576w,assets/cdn/shop/files/bag_6_600x4ad0.png?v=1692291160 600w,',
      sizes: '100vw',
      loading: 'lazy',
      width: '800',
      height: '300',
      description: 'Rs. 6,400.00',
      link: 'collections/card1.html'
    },
    {
      title: 'F. Ultimate Smart Watch',
      imageUrl: 'assets/cdn/shop/files/jacket_1_600xc0c6.png',
      srcset: 'assets/cdn/shop/files/jacket_1_600xc0c6.png?v=1692285993 152w,assets/cdn/shop/files/jacket_1_600xc0c6.png?v=1692285993 266w,assets/cdn/shop/files/jacket_1_600xc0c6.png?v=1692285993 366w,assets/cdn/shop/files/jacket_1_600xc0c6.png?v=1692285993 576w,assets/cdn/shop/files/jacket_1_600xc0c6.png?v=1692285993 600w,',
      sizes: '100vw',
      loading: 'lazy',
      width: '800',
      height: '300',
      description: 'Rs. 6,400.00',
      link: 'collections/card1.html'
    },
    {
      title: 'F. Ultimate Smart Watch',
      imageUrl: 'assets/cdn/shop/files/babay-tops_1_600xe4f7.png',
      srcset: 'assets/cdn/shop/files/babay-tops_1_600xe4f7.png?v=1692198136 152w,assets/cdn/shop/files/babay-tops_1_600xe4f7.png?v=1692198136 266w,assets/cdn/shop/files/babay-tops_1_600xe4f7.png?v=1692198136 366w,assets/cdn/shop/files/babay-tops_1_600xe4f7.png?v=1692198136 576w,assets/cdn/shop/files/babay-tops_1_600xe4f7.png?v=1692198136 600w,',
      sizes: '100vw',
      loading: 'lazy',
      width: '800',
      height: '300',
      description: 'Rs. 6,400.00',
      link: 'collections/card1.html'
    },
    {
      title: 'F. Ultimate Smart Watch',
      imageUrl: 'assets/cdn/shop/files/ment-shirt_1_600x7992.png',
      srcset: 'assets/cdn/shop/files/ment-shirt_1_600x7992.png?v=1692120651 152w,assets/cdn/shop/files/ment-shirt_1_600x7992.png?v=1692120651 266w,assets/cdn/shop/files/ment-shirt_1_600x7992.png?v=1692120651 366w,assets/cdn/shop/files/ment-shirt_1_600x7992.png?v=1692120651 576w,assets/cdn/shop/files/ment-shirt_1_600x7992.png?v=1692120651 600w,',
      sizes: '100vw',
      loading: 'lazy',
      width: '800',
      height: '300',
      description: 'Rs. 6,400.00',
      link: 'collections/card1.html'
    },
    {
      title: 'F. Ultimate Smart Watch',
      imageUrl: 'assets/cdn/shop/files/hat_1_600x36a6.png',
      srcset: 'assets/cdn/shop/files/hat_1_600x36a6.png?v=1692120024 152w,assets/cdn/shop/files/hat_1_600x36a6.png?v=1692120024 266w,assets/cdn/shop/files/hat_1_600x36a6.png?v=1692120024 366w,assets/cdn/shop/files/hat_1_600x36a6.png?v=1692120024 576w,assets/cdn/shop/files/hat_1_600x36a6.png?v=1692120024 600w,',
      sizes: '100vw',
      loading: 'lazy',
      width: '800',
      height: '300',
      description: 'Rs. 6,400.00',
      link: 'collections/card1.html'
    },
    {
      title: 'F. Ultimate Smart Watch',
      imageUrl: 'assets/cdn/shop/files/bag_1_600xac7a.png',
      srcset: 'assets/cdn/shop/files/bag_1_600xac7a.png?v=1692117716 152w,assets/cdn/shop/files/bag_1_600xac7a.png?v=1692117716 266w,assets/cdn/shop/files/bag_1_600xac7a.png?v=1692117716 366w,assets/cdn/shop/files/bag_1_600xac7a.png?v=1692117716 576w,assets/cdn/shop/files/bag_1_600xac7a.png?v=1692117716 600w,',
      sizes: '100vw',
      loading: 'lazy',
      width: '800',
      height: '300',
      description: 'Rs. 6,400.00',
      link: 'collections/card1.html'
    },
    {
      title: 'F. Ultimate Smart Watch',
      imageUrl: 'assets/cdn/shop/files/men-large-tshirt_4_600x7545.png',
      srcset: 'assets/cdn/shop/files/men-large-tshirt_4_600x7545.png?v=1693323021 152w,assets/cdn/shop/files/men-large-tshirt_4_600x7545.png?v=1693323021 266w,assets/cdn/shop/files/men-large-tshirt_4_600x7545.png?v=1693323021 366w,assets/cdn/shop/files/men-large-tshirt_4_600x7545.png?v=1693323021 576w,assets/cdn/shop/files/men-large-tshirt_4_600x7545.png?v=1693323021 600w,',
      sizes: '100vw',
      loading: 'lazy',
      width: '800',
      height: '300',
      description: 'Rs. 6,400.00',
      link: 'collections/card1.html'
    },
    {
      title: 'F. Ultimate Smart Watch',
      imageUrl: 'assets/cdn/shop/files/women-short-tshirt_1_600x2687.png',
      srcset: 'assets/cdn/shop/files/women-short-tshirt_1_600x2687.png?v=1693311946 152w,assets/cdn/shop/files/women-short-tshirt_1_600x2687.png?v=1693311946 266w,assets/cdn/shop/files/women-short-tshirt_1_600x2687.png?v=1693311946 366w,assets/cdn/shop/files/women-short-tshirt_1_600x2687.png?v=1693311946 576w,assets/cdn/shop/files/women-short-tshirt_1_600x2687.png?v=1693311946 600w,',
      sizes: '100vw',
      loading: 'lazy',
      width: '800',
      height: '300',
      description: 'Rs. 6,400.00',
      link: 'collections/card1.html'
    },
    // Add more cards as needed
  ];

  fetchCarouselData() {
    this.http.get<any[]>('http://localhost:3000/user/getcarousel').subscribe(
      data => {
        this.images = data;
        console.log(' this.images : ',  this.images );
        this.images.forEach((ele : any) => {
          this.forLOOPIMage = ele.carouselImage


        })

      },
      error => {
        console.error('Error fetching carousel data', error);
      }
    );
  }

  cardsChunks = this.chunkArray(this.cards, 4);

  chunkArray(array: any[], size: number) {
    return array.reduce((chunks, item, index) => {
      const chunkIndex = Math.floor(index / size);

      if (!chunks[chunkIndex]) {
        chunks[chunkIndex] = []; // start a new chunk
      }

      chunks[chunkIndex].push(item);

      return chunks;
    }, []);
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

  navigate(){
    this.router.navigate(['user/products'])
  }
}
