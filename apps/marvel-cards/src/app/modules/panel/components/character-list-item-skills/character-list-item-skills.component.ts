import { CharacterSkill } from './../../models/character-skill.model'
import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'angular-marvel-character-list-item-skills',
  templateUrl: './character-list-item-skills.component.html',
  styleUrls: [ './character-list-item-skills.component.sass' ]
})
export class CharacterListItemSkillsComponent implements OnInit {

  @Input() skill!: CharacterSkill

  constructor() { }

  ngOnInit(): void {
  }

}
