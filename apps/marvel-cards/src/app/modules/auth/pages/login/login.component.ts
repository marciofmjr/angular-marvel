import { NavigateService } from './../../../../core/services/navigate.service'
import { LoginApiService } from './../../services/login.api.service'
import { Login } from './../../models/login.model'
import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'angular-marvel-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.sass' ]
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup
  success = false

  constructor(
    private fb: FormBuilder,
    private loginApiService: LoginApiService,
    private navigateService: NavigateService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [ '', Validators.required ],
      password: [ '', Validators.required ]
    })
  }

  onSubmit(): void {
    const login = <Login>this.loginForm.value
    this.loginApiService.login(login).subscribe(user => {
      if (user[0]?.id) {
        this.success = true
        setTimeout(() => {
          this.navigateService.to('dashboard')
        }, 1000)
      }
    })
  }

}
