import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { DevService } from '../services/dev.service';

@Injectable({providedIn: 'root'})
export class DevResolve implements Resolve<any> {

    constructor(private _service: DevService) {}

    resolve() {
        return this._service.getAllDev()
    }
}