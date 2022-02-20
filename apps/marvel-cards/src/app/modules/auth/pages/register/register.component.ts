import { Component, OnInit } from '@angular/core'

import { RegisterApiService } from './../../services/register.api.service'
import { Register } from './../../models/Register.model'

@Component({
  selector: 'angular-marvel-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.sass' ]
})
export class RegisterComponent implements OnInit {

  user!: Register
  success = false

  constructor(private registerApiService: RegisterApiService) {}

  ngOnInit(): void {
    this.user = this.getEmptyUser()
  }

  onSubmit(): void {
    this.registerApiService.save(this.user).subscribe(user => {
      if (user.id) {
        this.success = true
      }
    })
  }

  getEmptyUser(): Register {
    return {
      username: '',
      password: '',
      confirmPassword: ''
    }
  }
}
