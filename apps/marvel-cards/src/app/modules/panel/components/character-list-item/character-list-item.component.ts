import { Character } from './../../models/character.model'
import { Component, Input } from '@angular/core'

@Component({
  selector: 'angular-marvel-character-list-item',
  templateUrl: './character-list-item.component.html',
  styleUrls: [ './character-list-item.component.sass' ]
})
export class CharacterListItemComponent {

  @Input() character!: Character

  constructor() { }

}
