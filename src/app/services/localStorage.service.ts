import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {

    constructor(
        private _storage: Storage
    ) { }


    setItem(name: string, item: any) {
        this._storage.set(name, item)
    }

    clear() {
        this._storage.clear()
    }
}