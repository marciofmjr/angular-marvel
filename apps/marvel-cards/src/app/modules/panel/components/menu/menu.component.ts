import { AlertService } from './../../../../shared/components/alert/alert.service'
import { Component } from '@angular/core'
import { first } from 'rxjs'

@Component({
  selector: 'angular-marvel-menu',
  templateUrl: './menu.component.html',
  styleUrls: [ './menu.component.sass' ]
})
export class MenuComponent  {

  constructor(private alertService: AlertService) {}

  alertSuccess(): void {
    this.alertService.open({type: 'success', message: 'Login Success, Welcome to Marvel Universe'})
    this.alertService.getCallback().pipe(first()).subscribe(success => console.log('fechou o alerta de successo', success))
  }

  alertError(): void {
    this.alertService.open({type: 'error', message: 'Cant validate username credentials'})
    this.alertService.getCallback().pipe(first()).subscribe(success => console.log('fechou o alerta de erro', success))
  }

}
