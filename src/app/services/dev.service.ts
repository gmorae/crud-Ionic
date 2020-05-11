import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { listModel, formModel } from '../models/Dev.model';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class DevService {
    constructor(
        private _http: HttpClient
    ) { }

    getAllDev(): Observable<listModel> {
        return this._http.get(`${environment.api}/`)
            .pipe(
                map((res: listModel) => {
                    return res
                })
            )
    }

    getDevById(id: number): Observable<formModel> {
        return this._http.get(`${environment.api}/${id}`)
            .pipe(
                map((res: any) => {                    
                    return res[0]
                })
            )
    }

    getDevByName(name: string): Observable<listModel> {
        return this._http.get(`${environment.api}/${name}`)
            .pipe(
                map((res: listModel) => {
                    return res
                })
            )
    }

    postDev(dev: formModel) {
        return this._http.post(`${environment.api}/`, dev)
            .pipe(
                map((res: any) => {
                    return res
                })
            )
    }

    putDev(id:number ,dev: formModel) {
        return this._http.put(`${environment.api}/${id}`, dev)
            .pipe(
                map((res: any) => {
                    return res
                })
            )
    }


    deleteDev(id: number) {
        return this._http.delete(`${environment.api}/${id}`)
            .pipe(
                map((res: any) => {
                    return res
                })
            )
    }
}