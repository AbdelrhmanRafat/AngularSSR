import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../../Enviroment/enviroment.local';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(private _HttpClient:HttpClient) { }
  getBrands = () : Observable<any> => {
    return this._HttpClient.get(baseUrl + "api/v1/categories");
  }
}
