import { PanelRoutingModule } from './panel-routing.module'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { PanelComponent } from './panel.component';
import { SidebarComponent } from './components/sidebar/sidebar.component'



@NgModule({
  declarations: [
    DashboardComponent,
    PanelComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    PanelRoutingModule
  ]
})
export class PanelModule { }
