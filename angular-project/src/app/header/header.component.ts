import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  @Input() cartItems: number = 5; // The initial number of items in the cart
  @Output() addToCartClicked: EventEmitter<void> = new EventEmitter<void>();

  addToCart() {
    // Logic to add an item to the cart

    this.addToCartClicked.emit();
  }

}
