import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products: any[] = [];
  public grandTotal: number = 0;

  constructor(private cart: CartService, private router: Router) {}

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
    return product.price && product.quantity ? product.price * product.quantity : 0;
  }

  removeProduct(index: number): void {
    this.products.splice(index, 1);
    this.calculateGrandTotal();
  }

  emptyCart(): void {
    this.products = [];
    this.calculateGrandTotal();
  }

  checkOut(): void {
    const order = {
      products: this.products,
      total: this.grandTotal
    };

    // Send the order to the server using the CartService
    this.cart.sendOrder(order);

    // Perform any other necessary actions, such as navigating to a checkout page or displaying a success message
    this.router.navigate(['/checkout']); // Replace '/checkout' with the appropriate route for your checkout page
  }
}
