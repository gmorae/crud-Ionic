import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss'],
})
export class ConfigComponent implements OnInit {

  constructor(
    private _router: Router,
    private _toast: ToastController,
    private _alert: AlertController
  ) { }

  ngOnInit() {}

  edit() {
    this._router.navigateByUrl(`edit/id`)
  }

  async excluir() {
    const alert = await this._alert.create({
      header: 'Excluir',
      message: 'Tem certeza que você deseja excluir sua conta ?',
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'OK',
          handler: () => {
            this.deleteToast()
          }
        }
      ]
    });

    await alert.present();
  }

  async deleteToast() {

      const toast = await this._toast.create({
        message: 'Excluido com sucesso',
        duration: 2000,
        color: 'success',
        position: 'top',
      });
  
      toast.present();
  }

  logout() {
    this._router.navigateByUrl('/')
  }

}
