import { SessionService } from './../../../auth/services/session.service'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'angular-marvel-profile',
  templateUrl: './profile.component.html',
  styleUrls: [ './profile.component.sass' ]
})
export class ProfileComponent implements OnInit {

  username!: string

  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
    this.getUsername()
  }

  getUsername(): void {
    this.username = this.sessionService.get().username
  }

  logout(): void {
    this.sessionService.logout()
  }

}
