import { AuthComponent } from './auth.component'
import { RegisterComponent } from './pages/register/register.component'
import { LoginComponent } from './pages/login/login.component'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  }
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AuthRoutingModule { }
