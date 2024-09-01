import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { ProductsComponent } from './products/products.component';
import { ServiceComponent } from './service/service.component';
import { CartComponent } from './cart/cart.component';
import { AllcartComponent } from './allcart/allcart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'blog',
        component: BlogComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'service',
        component: ServiceComponent
      },
      {
        path: 'allcart',
        component: AllcartComponent
      },
      {
        path: 'checkout',
        component: CheckoutComponent
      },
      {
        path: 'wishlist',
        component: WishlistComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
