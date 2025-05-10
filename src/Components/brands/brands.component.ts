import { Component, inject } from '@angular/core';
import { Brand, Category } from '../../Core/Interfaces/product';
import { BrandsService } from '../../Core/Services/brands.service';

@Component({
  selector: 'app-brands',
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent {
  brands : Category[] = [];
  private _BrandsService = inject(BrandsService);
  getBrands = () => {
   this._BrandsService.getBrands().subscribe({
    next : (res) => {
    console.log(res);
    this.brands = res.data;
    }
   })
  }

  ngOnInit(): void {
    console.log("Hello Brands");
    this.getBrands();
  }
}
