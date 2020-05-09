import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { formModel } from 'src/app/models/Dev.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {

  title: string

  register: formModel = {
    username: '',
    office: '',
    password: '',
    confirmPassword: '',
    linkImage: ''
  }

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._activatedRoute.snapshot.paramMap.get('id')
      ? this.title = "Editar dev"
      : this.title = "Cadastrar novo dev"
  }

  registerForm() {
    this._router.navigateByUrl('/logged/home')
  }

}
