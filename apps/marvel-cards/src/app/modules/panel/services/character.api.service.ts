import { environment } from './../../../../environments/environment'
import { Character } from './../models/character.model'
import { Observable } from 'rxjs'
import { ApiService } from './../../../shared/api/api.service'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class CharacterApiService {
  PATH = '/characters'

  constructor(private apiService: ApiService) {}

  list(data: any): Observable<Character[]> {
    return this.apiService.get(`${environment.apiBaseUrl}${this.PATH}`, data)
  }

}
