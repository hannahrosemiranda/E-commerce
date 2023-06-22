import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/product';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productlist: Product[] = [];
  constructor(private productService: ProductService, private cart:CartService) {
    this.productlist = productService.getAll();
  }

  ngOnInit(): void {}

  addtocart(product:any){
    this.cart.addtocart(product);
    console.log(product);
  }
}
