/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  save(data: any, url: string): Observable<any> {
    return data.id && data.id.length ? this.put(data, url) : this.post(data, url)
  }

  post(data: any, url: string): Observable<any> {
    return this.http.post(url, data)
  }

  put(data: any, url: string): Observable<any> {
    return this.http.put(url, data)
  }

  get(url: string, data: any): Observable<any> {
    let params = new HttpParams()

    for (const key in data) {
      params = params.append(key, data[key])
    }

    return this.http.get(url, { params })
  }

}
