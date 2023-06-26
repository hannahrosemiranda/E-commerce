<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
=======
import { Component, EventEmitter, Input, Output } from '@angular/core';
>>>>>>> 48cbee8c3d2b03f42a5d190767b4c963cfd211e4

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
<<<<<<< HEAD
export class HeaderComponent implements OnInit{
  public totalitem = 0;

  constructor(private cart:CartService) { }

  ngOnInit(): void {
    this.cart.getproduct().subscribe(res=>{
      this.totalitem = res.length;
    })
=======
export class HeaderComponent {
  @Input() cartItems: number = 0; // The initial number of items in the cart
  @Output() addToCartClicked: EventEmitter<void> = new EventEmitter<void>();

  addToCart() {
    // Logic to add an item to the cart

    this.addToCartClicked.emit();
>>>>>>> 48cbee8c3d2b03f42a5d190767b4c963cfd211e4
  }

}
