import { SharedModule } from './../../shared/shared.module'
import { AuthRoutingModule } from './auth-routing.module'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoginComponent } from './pages/login/login.component'
import { RegisterComponent } from './pages/register/register.component'
import { AuthComponent } from './auth.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AuthModule { }
