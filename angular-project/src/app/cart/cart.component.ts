import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Order } from '../shared/models/order';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  @Input()
  order: Order = new Order;
  public products!: any[];
  public grandTotal: number = 0;

  constructor(
    private cart: CartService,
    private router: Router,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    this.cart.getproduct().subscribe((res: any[]) => {
      this.products = res;
      this.calculateGrandTotal();
    });
  }

  calculateGrandTotal(): void {
    this.grandTotal = this.products.reduce((total, product) => {
      const productTotal = this.getProductTotal(product);
      return total + productTotal;
    }, 0);
  }

  calculateTotal(): void {
    this.calculateGrandTotal();
  }

  getProductTotal(product: any): number {
    return product.price && product.quantity
      ? product.price * product.quantity
      : 0;
  }

  emptyCart() {
    this.toast.warning({
      detail: 'Deleted all from cart',
      summary: 'all items have been deleted',
      duration: 3000,
    });
    this.cart.removeallcart();
  }

  checkOut(): void {
    const order = {
      products: this.products,
      total: this.grandTotal,
    };

    // Send the order to the server using the CartService
    this.cart.sendOrder(order);

    // Perform any other necessary actions, such as navigating to a checkout page or displaying a success message
    this.router.navigate(['/checkout']); // Replace '/checkout' with the appropriate route for your checkout page
  }

  delete(product: any) {
    this.toast.warning({
      detail: 'Deleted from cart',
      summary: 'item has been deleted',
      duration: 1000,
    });
    this.cart.removecartitem(product);
  }
}
