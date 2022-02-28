import { CharacterApiService } from './../../services/character.api.service'
import { Character } from './../../models/character.model'
import { Observable } from 'rxjs'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'angular-marvel-villains',
  templateUrl: './villains.component.html',
  styleUrls: [ './villains.component.sass' ]
})
export class VillainsComponent implements OnInit {

  villains$!: Observable<Character[]>

  constructor(private characterApiService: CharacterApiService) { }

  ngOnInit(): void {
    this.getVillains()
  }

  getVillains(): void {
    this.villains$ = this.characterApiService.list({ type: 'villain' })
  }

}
