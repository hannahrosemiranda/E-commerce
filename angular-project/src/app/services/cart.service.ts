import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
public productList = new BehaviorSubject<any>([])
public cartitemlist:any=[]
  constructor() { }

  //get
  getproduct(){
    return this.productList.asObservable();
  }

  //add to cart
  addtocart(product:any){
    this.cartitemlist.push(product);
    this.productList.next(this.cartitemlist);
    this.gettotalprice();
  }

  // total price
  gettotalprice():number{
    let grandtotal = 0;
    this.cartitemlist.map((a:any)=>{
      grandtotal +=a.total;
      // console.log(grandtotal);
    })
    return grandtotal;
  }
}
