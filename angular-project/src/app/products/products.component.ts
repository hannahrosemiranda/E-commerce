import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/product';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productlist: Product[] = [];
  constructor(
    private productService: ProductService,
    private cart: CartService,
    private toast: NgToastService
  ) {
    this.productlist = productService.getAll();
  }

  ngOnInit(): void {}

  addtocart(product: any) {
    this.toast.success({
      detail: 'Added To Cart',
      summary: 'item has been added',
      duration: 1000,
    });
    this.cart.addtocart(product);
    console.log(product);
  }
}
