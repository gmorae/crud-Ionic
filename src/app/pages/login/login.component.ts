import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login: any = {
    user: '',
    password: ''
  }

  register: any = {
    user: '',
    password: '',
    confirmPassword: '',
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
