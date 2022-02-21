import { User } from './../models/user.model'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  create(user: User): void {
    window.localStorage.setItem('user', JSON.stringify(user))
  }

}
