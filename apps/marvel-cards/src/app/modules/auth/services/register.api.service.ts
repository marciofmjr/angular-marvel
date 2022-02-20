import { Observable } from 'rxjs'
import { environment } from '../../../../environments/environment'
import { Register } from '../models/Register.model'
import { ApiService } from '../../../shared/api/api.service'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class RegisterApiService {

  PATH = '/users'

  constructor(private apiService: ApiService) { }

  save(data: Register): Observable<Register> {
    const register = { ...data }
    delete register.confirmPassword
    return this.apiService.save(register, `${environment.apiBaseUrl}${this.PATH}`)
  }
}
