import { AlertService } from './alert.service'
import { Component, OnInit } from '@angular/core'
import { Alert } from './alert.model'

@Component({
  selector: 'angular-marvel-alert',
  templateUrl: './alert.component.html',
  styleUrls: [ './alert.component.sass' ]
})
export class AlertComponent implements OnInit {
  alert!: Alert
  visible = false

  constructor(private alertService: AlertService) {}

  ngOnInit(): void {
    this.listenAlertService()
  }

  listenAlertService(): void {
    this.alertService.getAlert().subscribe(alert => {
      if (alert === null) return
      this.alert = alert
      alert.action === 'open' ? this.open() : this.close()
    })
  }

  open(): void {
    this.visible = true
  }

  close(): void {
    this.visible = false
    this.alertService.close(true)
  }

}
