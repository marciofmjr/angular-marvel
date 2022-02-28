import { Observable } from 'rxjs'
import { Component, Input } from '@angular/core'
import { Character } from '../../models/character.model'

@Component({
  selector: 'angular-marvel-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: [ './character-list.component.sass' ]
})
export class CharacterListComponent {

  @Input() characters!: Observable<Character[]>
  @Input() title = ''

  constructor() { }
}
