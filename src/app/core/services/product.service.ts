import { Injectable } from '@angular/core';
import { PRODUCTS } from '../data/products.data';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly products: readonly Product[] = PRODUCTS;

  getAll(): readonly Product[] {
    return this.products;
  }

  getBySlug(slug: string): Product | undefined {
    return this.products.find((p) => p.slug === slug);
  }
}
