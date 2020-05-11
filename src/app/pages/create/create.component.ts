import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { formModel } from 'src/app/models/Dev.model';
import { DevService } from 'src/app/services/dev.service';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {

  title: string
  id: number

  register: formModel = {
    username: '',
    office: '',
    password: '',
    linkImage: ''
  }

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _service: DevService,
    private _alert: AlertController,
    private _toast: ToastController
  ) { }

  ngOnInit() {
    this.id = +this._activatedRoute.snapshot.paramMap.get('id')
    this.id ? this.title = "Editar dev"
      : this.title = "Cadastrar novo dev"
    this._service.getDevById(this.id)
      .subscribe(res => {
        this.register.username = res.username
        this.register.office = res.office
        this.register.linkImage = res.linkImage
      })
  }

  registerForm() {
    if (this.id) {
      this._service.putDev(this.id, this.register)
      .subscribe(res => {
        this.Toast(res.message)
        this.register.username = ''
        this.register.password = ''
        this.register.office = ''
        this.register.linkImage = ''
      }, err => {
        this.alert('Erro', 'Erro ao editar o usuário, tente novamente ou mais tarde')
      })
    } else {
      this._service.postDev(this.register)
        .subscribe(res => {
          this.Toast(res.message)
          this.register.username = ''
          this.register.password = ''
          this.register.office = ''
          this.register.linkImage = ''
        }, err => {
          this.alert('Erro', 'Erro ao criar o usuário, tente novamente ou mais tarde')
        })
    }
    this._router.navigateByUrl('/logged/home')
  }

  async alert(header: string, msg: string) {
    const alert = await this._alert.create({
      header: header,
      message: msg,
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'OK'
        }
      ]
    });

    await alert.present();
  }

  // ********************* Função para mostrar a mensagem de sucesso ********************* //
  async Toast(msg: string) {
    const toast = await this._toast.create({
      message: msg,
      duration: 2000,
      color: 'success',
      position: 'top',
    });

    toast.present();
  }

}
