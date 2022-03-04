import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'angular-marvel-icon',
  templateUrl: './icon.component.html',
  styleUrls: [ './icon.component.sass' ]
})
export class IconComponent implements OnInit {

  @Input() type: 'success' | 'error' | 'warning' = 'success'

  src!: string
  alt!: string

  ngOnInit(): void {
    this.setVariables()
  }

  setVariables(): void {
    switch (this.type) {
    case 'error':
      this.src = '/assets/images/icons/white/close.svg'
      this.alt = 'error icon'
      break

    case 'warning':
      this.src = '/assets/images/icons/white/exclamation.svg'
      this.alt = 'warning icon'
      break

    default:
      this.src = '/assets/images/icons/white/check.svg'
      this.alt = 'success icon'
      break
    }
  }

}
