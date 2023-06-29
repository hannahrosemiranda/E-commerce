import { Injectable } from '@angular/core';
import { Product } from '../shared/models/product';
import { ProductsData } from 'src/data';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getAll(): Product[] {
    return ProductsData;
  }
}
