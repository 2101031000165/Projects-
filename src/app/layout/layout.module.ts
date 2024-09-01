import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankComponent } from './blank/blank.component';
import { FullComponent } from './full/full.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from '../user/cart/cart.component';
import { CartCounterComponent } from '../commom-component/cart-counter/cart-counter.component';



@NgModule({
  declarations: [
    BlankComponent,
    FullComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    CartCounterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
