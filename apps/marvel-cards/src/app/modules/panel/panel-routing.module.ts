import { VillainsComponent } from './pages/villains/villains.component'
import { HeroesComponent } from './pages/heroes/heroes.component'
import { NgModule } from '@angular/core'
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { PanelComponent } from './panel.component'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    component: PanelComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'villains',
        component: VillainsComponent
      }
    ]
  }
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PanelRoutingModule { }
