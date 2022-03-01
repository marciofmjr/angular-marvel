/* eslint-disable @typescript-eslint/no-explicit-any */
import { Router } from '@angular/router'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class NavigateService {

  private pages = [
    { name: 'login', path: '/auth/login' },
    { name: 'register', path: '/auth/register' },
    { name: 'dashboard', path: '/p/dashboard' }
  ]

  constructor(private router: Router) {}

  to(name: string): void {
    const page = <any> this.pages.filter(p => {
      return p.name === name
    })
    if (page[0]?.path) {
      this.router.navigateByUrl(page[0]?.path)
    } else {
      alert(`Page ${name} Not Found`)
    }
  }

}
