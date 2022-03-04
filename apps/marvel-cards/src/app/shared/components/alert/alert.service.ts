/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core'
import { Subject, BehaviorSubject } from 'rxjs'

import { Alert, AlertOpen } from './alert.model'

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private alertSubject = new BehaviorSubject<Alert>({action: 'close', type: 'success', message: ''})
  private callbackSubject = new Subject<boolean>()

  getAlert() {
    return this.alertSubject.asObservable()
  }

  getCallback() {
    return this.callbackSubject.asObservable()
  }

  open(params: AlertOpen): void {
    this.alertSubject.next({
      action: 'open',
      type: params.type,
      message: params.message
    })
  }

  close(success: boolean): void {
    this.callbackSubject.next(success)
  }
}
