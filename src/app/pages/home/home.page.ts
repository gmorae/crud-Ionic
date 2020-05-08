import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { __values } from 'tslib';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  searchDevs: string
  Alldevs: any
  devs: Array<any>
  // ***** any significa qualquer coisa ***** //

  constructor(
    public _action: ActionSheetController,
    public _alert: AlertController,
    public _toast: ToastController,
    public _route: Router
  ) { }

  // ********************* Função que será execultada sempre quando o componente for chamdado  ********************* //
  ngOnInit(): void {
    this.searchDevs = ''
    this.devs = [
      {
        id: 1,
        name: 'item 1',
        image: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
      },
      {
        id: 2,
        name: 'item 2',
        image: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
      }
    ]

    this.Alldevs = this.devs
  }

  // ********************* Função para mostrar o menu ao clicar no usuário ********************* //
  async presentActionSheet(id: number) {
    const actionSheet = await this._action.create({
      header: 'Ações',
      buttons: [
        {
          text: 'Delete',
          icon: 'trash-outline',
          role: 'destructive',
          handler: () => {
            this.alertDelete('Excluir', 'Tem certeza que quer excluir esse usuário ?')
          }
        },
        {
          text: 'Editar',
          icon: 'pencil-outline',
          handler: () => {
            this._route.navigateByUrl(`logged/edit/${id}`)
          }
        },
        {
          text: 'informações',
          icon: 'information-outline',
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await actionSheet.present();
  }

  // ********************* Função responsavel por mostrar o alert de excluir ********************* //
  async alertDelete(header: string, msg: string) {
    const alert = await this._alert.create({
      header: header,
      message: msg,
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

  // ********************* Função para mostrar a mensagem se foi excluida com sucesso ********************* //
  async deleteToast() {
    const toast = await this._toast.create({
      message: 'Excluido com sucesso',
      duration: 2000,
      color: 'success',
      position: 'top',
    });

    toast.present();
  }

  // ********************* Função que realiza o filtro de devs ********************* // 
  filterDevs(text: any) {
    let val = text.target.value;
    if (val && val.trim() != '') {
      this.devs = this.Alldevs
      this.devs = this.devs.filter((dev) => {
        return (dev.name.toLowerCase().indexOf(val.toLowerCase()) > -1)
      })
    } else {
      this.devs = this.Alldevs
    }
  }

}
