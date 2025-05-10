import { Component, inject, makeStateKey, OnInit, TransferState } from '@angular/core';
import { ProductsService } from '../../Core/Services/products.service';
import { Product, ProductRoot } from '../../Core/Interfaces/product';
import { ProductCardComponent } from "../../Shared/UI/product-card/product-card.component";
import { isPlatformServer } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

interface ProductsResponse {
  data: Product[];
  [key: string]: any;
}

const PRODUCTS_KEY = makeStateKey<ProductsResponse>('products-data');

@Component({
  selector: 'app-products',
  imports: [ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  private _ProductsService = inject(ProductsService);
  private transferState = inject(TransferState);
  private platformId = inject(PLATFORM_ID);
  
  products: Product[] = [];
  isLoading = true;
  error: string | null = null;

  ngOnInit(): void {
    this.loadProducts();
  }

  private loadProducts() {
    this._ProductsService.getProducts(1).subscribe({
      next : (res : ProductRoot) => {
          this.products = res.data;
      }
    })
  }

  
}
