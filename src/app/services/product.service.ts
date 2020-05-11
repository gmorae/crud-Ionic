import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { listModel, formModel } from '../models/Product.model';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(
        private _http: HttpClient
    ) { }

    allProducts: listModel[]

    getAllProduct(): Observable<listModel[]> {
        return this._http.get(`${environment.api}/product/`)
            .pipe(
                map((res: listModel[]) => {
                    return res || this.allProducts
                })
            )
    }

    getProductById(id: number): Observable<formModel> {
        return this._http.get(`${environment.api}/product/${id}`)
            .pipe(
                map((res: any) => {                    
                    return res[0]
                })
            )
    }

    postProduct(Product: formModel) {
        return this._http.post(`${environment.api}/product/`, Product)
            .pipe(
                map((res: any) => {
                    this.allProducts = res.data
                    return res
                })
            )
    }

    putProduct(id:number ,Product: formModel) {
        return this._http.put(`${environment.api}/product/${id}`, Product)
            .pipe(
                map((res: any) => {
                    return res
                })
            )
    }


    deleteProduct(id: number) {
        return this._http.delete(`${environment.api}/product/${id}`)
            .pipe(
                map((res: any) => {
                    return res
                })
            )
    }
}