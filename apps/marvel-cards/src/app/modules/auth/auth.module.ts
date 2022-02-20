import { AuthRoutingModule } from './auth-routing.module'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoginComponent } from './pages/login/login.component'
import { RegisterComponent } from './pages/register/register.component'
import { AuthComponent } from './auth.component'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ]
})
export class AuthModule { }
