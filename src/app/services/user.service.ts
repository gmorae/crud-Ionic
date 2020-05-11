import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { registerModel } from '../models/user.model';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(
        private _http: HttpClient
    ) { }

    postUser(user: registerModel) {
        return this._http.post(`${environment.api}/user`, user)
            .pipe(
                map((res: any) => {
                    return res
                })
            )
    }

    putProduct(id: number, Product: registerModel) {
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