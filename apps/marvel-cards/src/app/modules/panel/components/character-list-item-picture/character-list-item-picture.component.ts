import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'angular-marvel-character-list-item-picture',
  templateUrl: './character-list-item-picture.component.html',
  styleUrls: [ './character-list-item-picture.component.sass' ]
})
export class CharacterListItemPictureComponent implements OnInit {

  @Input() slug = ''

  constructor() { }

  ngOnInit(): void {
  }

}
