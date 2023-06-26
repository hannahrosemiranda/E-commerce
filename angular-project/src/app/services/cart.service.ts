import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public productList = new BehaviorSubject<any>([]);
  public cartitemlist: any[] = [];

  constructor() {}

  // Get products
  getproduct() {
    return this.productList.asObservable();
  }

  // Add product to cart
  addtocart(product: any) {
    this.cartitemlist.push(product);
    this.productList.next(this.cartitemlist);
    this.gettotalprice();
  }

  // Get total price
  gettotalprice(): number {
    let grandtotal = 0;
    this.cartitemlist.forEach((a: any) => {
      grandtotal += a.total;
    });
    return grandtotal;
  }

  // Send order to the server
  sendOrder(order: any) {
    // Replace this with your actual logic for sending the order to the server
    console.log('Sending order:', order);
  }
}
