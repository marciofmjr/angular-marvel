import { HttpClientModule } from '@angular/common/http'
import { TestBed } from '@angular/core/testing'

import { LoginApiService } from './login.api.service'

describe('LoginApiService', () => {
  let service: LoginApiService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    })
    service = TestBed.inject(LoginApiService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
