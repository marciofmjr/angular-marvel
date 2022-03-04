import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MessageComponent } from './components/message/message.component'
import { AlertComponent } from './components/alert/alert.component'
import { IconComponent } from './components/icon/icon.component'

@NgModule({
  declarations: [
    MessageComponent,
    AlertComponent,
    IconComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MessageComponent,
    AlertComponent,
    IconComponent
  ]
})
export class SharedModule { }
