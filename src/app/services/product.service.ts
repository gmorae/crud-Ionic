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

    getAllProduct(): Observable<listModel> {
        return this._http.get(`${environment.api}/`)
            .pipe(
                map((res: listModel) => {
                    return res
                })
            )
    }

    getProductById(id: number): Observable<formModel> {
        return this._http.get(`${environment.api}/${id}`)
            .pipe(
                map((res: any) => {                    
                    return res[0]
                })
            )
    }

    getProductByName(name: string): Observable<listModel> {
        return this._http.get(`${environment.api}/${name}`)
            .pipe(
                map((res: listModel) => {
                    return res
                })
            )
    }

    postProduct(Product: formModel) {
        return this._http.post(`${environment.api}/`, Product)
            .pipe(
                map((res: any) => {
                    return res
                })
            )
    }

    putProduct(id:number ,Product: formModel) {
        return this._http.put(`${environment.api}/${id}`, Product)
            .pipe(
                map((res: any) => {
                    return res
                })
            )
    }


    deleteProduct(id: number) {
        return this._http.delete(`${environment.api}/${id}`)
            .pipe(
                map((res: any) => {
                    return res
                })
            )
    }
}