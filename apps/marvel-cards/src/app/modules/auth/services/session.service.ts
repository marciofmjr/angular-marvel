import { Session } from './../../../core/models/session.model'
import { Router } from '@angular/router'
import { User } from './../models/user.model'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private router: Router) {}

  create(user: User): void {
    if (user?.id) {
      window.localStorage.setItem('user', JSON.stringify(user))
    }
  }

  get(): Session {
    if (this.isLoggedIn()) {
      const user = window.localStorage.getItem('user')
      if (user !== null)
        return <Session> JSON.parse(user)
    }
    throw new Error('session not found')
  }

  logout(): void {
    this.delete()
    this.router.navigateByUrl('/auth/login')
  }

  delete(): void {
    window.localStorage.removeItem('user')
  }

  isLoggedIn(): boolean {
    const userSession = window.localStorage.getItem('user')

    if (userSession === null) {
      return false
    }

    const user = JSON.parse(userSession)

    if (user?.id) {
      return true
    }

    return false
  }
}
