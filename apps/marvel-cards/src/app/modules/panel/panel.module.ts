import { PanelRoutingModule } from './panel-routing.module'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { PanelComponent } from './panel.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterListItemComponent } from './components/character-list-item/character-list-item.component';
import { CharacterListItemPictureComponent } from './components/character-list-item-picture/character-list-item-picture.component';
import { VillainsComponent } from './pages/villains/villains.component'



@NgModule({
  declarations: [
    DashboardComponent,
    PanelComponent,
    SidebarComponent,
    MenuComponent,
    HeroesComponent,
    ProfileComponent,
    CharacterListComponent,
    CharacterListItemComponent,
    CharacterListItemPictureComponent,
    VillainsComponent
  ],
  imports: [
    CommonModule,
    PanelRoutingModule
  ]
})
export class PanelModule { }
