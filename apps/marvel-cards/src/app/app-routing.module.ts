import { PanelGuard } from './core/guards/panel.guard'
import { AuthGuard } from './core/guards/auth.guard'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'p',
    loadChildren: () => import('./modules/panel/panel.module').then(m => m.PanelModule),
    canActivate: [ PanelGuard ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
    canActivate: [ AuthGuard ]
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [ AuthGuard, PanelGuard ]
})
export class AppRoutingModule { }
