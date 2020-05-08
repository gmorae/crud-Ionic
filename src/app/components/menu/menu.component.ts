import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {

  constructor(
    private _route: Router,
    private _toast: ToastController
  ) { }

  async logout() {
    this._route.navigateByUrl(`/`)
    const toast = await this._toast.create({
      message: 'Deslogado com sucesso',
      duration: 2000,
      color: 'success',
      position: 'top',
    });

    toast.present();
  }

}
