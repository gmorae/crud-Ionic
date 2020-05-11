import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loginModel } from '../models/user.model';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private _http: HttpClient
    ) { }

    login(data: loginModel) {
        return this._http.post(`${environment.api}/login`, data)
            .pipe(
                map((res: any) => {
                    return res
                })
            )
    }

}