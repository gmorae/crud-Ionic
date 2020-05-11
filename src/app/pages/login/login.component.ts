import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginModel, registerModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { AlertController, ToastController } from '@ionic/angular';
import { LocalStorageService } from 'src/app/services/localStorage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login: loginModel = {
    username: '',
    password: ''
  }

  register: registerModel = {
    username: '',
    password: '',
    linkImage: ''
  }

  title: string = ''

  active = 'Login'

  constructor(
    private _router: Router,
    private _service: AuthService,
    private _alert: AlertController,
    private _toast: ToastController,
    private _localStorage: LocalStorageService,
    private _postService: UserService
  ) { }

  ngOnInit() { }

  logForm() {
    this._service.login(this.login)
      .subscribe(res => {
        this.Toast(res.message)
        this._localStorage.setItem('nameUser', this.login.username)
        this.login.username = ''
        this.login.password = ''
        this._router.navigateByUrl('/logged')
      }, err => {
        this.alert('Erro ao acessar', 'Usário ou senha inválidos')
      })
  }

  registerForm() {
    this._postService.postUser(this.register)
      .subscribe(res => {
        this.Toast(res.message)
        this.active = 'Login'
        this.register.username = ''
        this.register.password = ''
        this.register.linkImage = ''
      }, err => {
        this.alert('Erro', 'Erro ao criar o usuário, tente novamente ou mais tarde')
      })
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
          text: 'OK',
          handler: () => {
            this.login.password = ''
          }
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

  segmentChanged(ev: any) {
    this.title = ev.detail.value
  }

}
