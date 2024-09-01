import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-counter',
  templateUrl: './cart-counter.component.html',
  styleUrl: './cart-counter.component.css'
})
export class CartCounterComponent {

  @Input()  CartCounter : number = 0 ;

  constructor(){

  }

  
  
}
