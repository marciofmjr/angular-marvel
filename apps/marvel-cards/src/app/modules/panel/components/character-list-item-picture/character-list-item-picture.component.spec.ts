import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterListItemPictureComponent } from './character-list-item-picture.component';

describe('CharacterListItemPictureComponent', () => {
  let component: CharacterListItemPictureComponent;
  let fixture: ComponentFixture<CharacterListItemPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterListItemPictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterListItemPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
