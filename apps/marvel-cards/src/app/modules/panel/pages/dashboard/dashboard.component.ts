import { CharacterParams } from './../../models/character-params.model'
import { Observable } from 'rxjs'
import { CharacterApiService } from './../../services/character.api.service'
import { Component, OnInit } from '@angular/core'
import { Character } from '../../models/character.model'

@Component({
  selector: 'angular-marvel-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.sass' ]
})
export class DashboardComponent implements OnInit {

  heroes$!: Observable<Character[]>
  villains$!: Observable<Character[]>

  constructor(private characterApiService: CharacterApiService) { }

  ngOnInit(): void {
    this.getCharacters()
  }

  getOptions(type?: string): CharacterParams {
    const options = <CharacterParams> { expand: 'team', 'page': 1, 'limit': 4 }
    if (type) { options.type = type }
    return options
  }

  getCharacters() {
    this.heroes$ = this.characterApiService.list(this.getOptions('hero'))
    this.villains$ = this.characterApiService.list(this.getOptions('villain'))
  }

}
