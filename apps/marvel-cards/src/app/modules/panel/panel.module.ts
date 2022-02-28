import { PanelRoutingModule } from './panel-routing.module'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { PanelComponent } from './panel.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { ProfileComponent } from './components/profile/profile.component'



@NgModule({
  declarations: [
    DashboardComponent,
    PanelComponent,
    SidebarComponent,
    MenuComponent,
    HeroesComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    PanelRoutingModule
  ]
})
export class PanelModule { }
