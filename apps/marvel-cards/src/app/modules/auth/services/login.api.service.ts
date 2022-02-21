import { SessionService } from './session.service'
import { environment } from '../../../../environments/environment'
import { Login } from '../models/login.model'
import { ApiService } from '../../../shared/api/api.service'
import { Injectable } from '@angular/core'
import { User } from '../models/user.model'
import { Observable, tap } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {

  PATH = '/users'

  constructor(
    private apiService: ApiService,
    private sessionService: SessionService
  ) { }

  login(user: Login): Observable<User[]> {
    return this.apiService.get(`${environment.apiBaseUrl}${this.PATH}`, user)
      .pipe(tap(user => {
        this.sessionService.create(user[0])
      }))
  }
}
