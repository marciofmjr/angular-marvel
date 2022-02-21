import { Component, Input } from '@angular/core'

@Component({
  selector: 'angular-marvel-message',
  templateUrl: './message.component.html',
  styleUrls: [ './message.component.sass' ]
})
export class MessageComponent {

  @Input() message!: string
  @Input() linkUrl!: string
  @Input() linkText!: string

}
