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

  characters$!: Observable<Character[]>

  constructor(private characterApiService: CharacterApiService) { }

  ngOnInit(): void {
    this.getCharacters()
  }

  getCharacters() {
    const options = { expand: 'team', 'page': 1, 'limit': 4 }
    this.characters$ = this.characterApiService.list(options)
  }

}
