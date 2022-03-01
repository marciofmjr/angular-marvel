import { Component, Input } from '@angular/core'

@Component({
  selector: 'angular-marvel-skill',
  templateUrl: './skill.component.html',
  styleUrls: [ './skill.component.sass' ]
})
export class SkillComponent {

  @Input() name!: string
  @Input() value!: number

}
