import { CartService } from "src/app/services/cart.service";

export class Order {
  id!:number;
  items!: CartService[];
  totalPrice!:number;
  name!: string;
  address!: string;
  paymentId!: string;
  createdAt!: string;
  status!: string;
}
