import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
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
    this.cartitemlist.map((a: any) => {
      grandtotal += a.total;
    });
    return grandtotal;
  }

  // Send order to the server
  sendOrder(order: any) {
    // Logic for sending the order to the server
    console.log('Sending order:', order);
  }

  //Empty Cart and delete an item
  removeallcart() {
    this.cartitemlist = [];
    this.productList.next(this.cartitemlist);
  }

  removecartitem(product: any) {
    this.cartitemlist.map((a: any, index: any) => {
      if (product.id === a.id) this.cartitemlist.splice(index, 1);
    });
    this.productList.next(this.cartitemlist);
  }

}
