  import { HttpClient } from '@angular/common/http';
  import { Injectable, Inject, PLATFORM_ID, TransferState, makeStateKey } from '@angular/core';
  import { isPlatformBrowser, isPlatformServer } from '@angular/common';
  import { Observable, of, tap } from 'rxjs';
  import { ProductRoot } from '../Interfaces/product';
import { baseUrl } from '../../Enviroment/enviroment.local';


  @Injectable({
    providedIn: 'root'
  })
  export class ProductsService {
    constructor(private _HttpClient:HttpClient) { }
    getProducts = (currentPage : number) : Observable<ProductRoot> => {
    return this._HttpClient.get<ProductRoot>(`${baseUrl}api/v1/products?page=${currentPage}`);
  }
}