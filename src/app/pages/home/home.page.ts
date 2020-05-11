import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  searchDevs: string
  nameLogged: string = ''
  allProducts: any
  products: Array<any>
  // ***** any significa qualquer coisa ***** //

  constructor(
    private _action: ActionSheetController,
    private _alert: AlertController,
    private _toast: ToastController,
    private _route: Router,
    private _storage: Storage,
    private _activatedRoute: ActivatedRoute,
    private _service: ProductService
  ) { }

  // ********************* Função que será execultada sempre quando o componente for chamdado  ********************* //
  ngOnInit(): void {
    this.searchDevs = ''
    this.products = this._activatedRoute.snapshot.data.products
    this._storage.get('nameUser').then((val) => {
      this.nameLogged = val
    });

    this.allProducts = this.products
  }

  // ********************* Função para mostrar o menu ao clicar no usuário ********************* //
  async presentActionSheet(id: number, name: string) {
    const actionSheet = await this._action.create({
      header: 'Ações',
      buttons: [
        {
          text: `Deletar ${name}`,
          icon: 'trash-outline',
          role: 'destructive',
          handler: () => {
            this._service.deleteProduct(id)
              .subscribe(res => {
                this.products = res.data
                this.alertDelete('Excluir', `Tem certeza que quer excluir ${name} ?`)
              })
          }
        },
        {
          text: `Editar ${name}`,
          icon: 'pencil-outline',
          handler: () => {
            this._route.navigateByUrl(`logged/edit/${id}`)
          }
        },
        {
          text: 'Cancelar',
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
  filterProducts(text: any) {
    let val = text.target.value;
    if (val && val.trim() != '') {
      this.products = this.allProducts
      this.products = this.products.filter((dev) => {
        return (
          dev.username.toLowerCase().indexOf(val.toLowerCase()) > -1
          ||
          dev.category.toLowerCase().indexOf(val.toLowerCase()) > -1
        )
      })
    } else {
      this.products = this.allProducts
    }
  }

}
