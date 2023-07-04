import { CartItem } from "./cartitems";

export class Cart{
  gettotalPrice(): number {
    throw new Error('Method not implemented.');
  }
  items:CartItem[] = [];
  totalPrice:number = 0;
  totalCount:number = 0;
  productList: import("c:/Users/hannah.rose.miranda/Desktop/E-commerce/E-commerce/angular-project/src/app/services/cart.service").CartService[] = [];
}
