import { Observable } from 'rxjs'
import { CharacterApiService } from './../../services/character.api.service'
import { Component, OnInit } from '@angular/core'
import { Character } from '../../models/character.model'

@Component({
  selector: 'angular-marvel-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.sass' ]
})
export class HeroesComponent implements OnInit {

  heroes$!: Observable<Character[]>

  constructor(private characterApiService: CharacterApiService) { }

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void {
    this.heroes$ = this.characterApiService.list({ type: 'hero' })
  }

}
