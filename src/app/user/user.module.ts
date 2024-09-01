import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { AllcartComponent } from './allcart/allcart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckoutComponent } from './checkout/checkout.component';
import { WishlistComponent } from './wishlist/wishlist.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ProductsComponent,
    ServiceComponent,
    ContactComponent,
    AboutComponent,
    BlogComponent,
    AllcartComponent,
    CheckoutComponent,
    WishlistComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    CarouselModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
