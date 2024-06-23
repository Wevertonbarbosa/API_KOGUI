import { Component, Input } from '@angular/core';
import { Character } from '../../Interface/character';

@Component({
  selector: 'app-card-character',
  templateUrl: './card-character.component.html',
  styleUrl: './card-character.component.css',
})
export class CardCharacterComponent {
  @Input() characters: Character[] = [];
  @Input() loading?: boolean;
}
