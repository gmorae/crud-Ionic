import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { ProductService } from '../services/product.service';

@Injectable({providedIn: 'root'})
export class ProductResolve implements Resolve<any> {

    constructor(private _service: ProductService) {}

    resolve() {
        return this._service.getAllProduct()
    }
}