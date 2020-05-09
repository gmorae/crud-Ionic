import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginModel, formModel } from 'src/app/models/Dev.model';

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

  register: formModel = {
    username: '',
    office: '',
    password: '',
    confirmPassword: '',
    linkImage: ''
  }

  title: string = ''

  active = 'Login'

  constructor(
    private _router: Router
  ) { }

  ngOnInit() { }

  logForm() {
    this._router.navigateByUrl('/logged')
  }

  registerForm() {

  }

  segmentChanged(ev: any) {
    console.log(ev);
    this.title= ev.detail.value
  }

}
