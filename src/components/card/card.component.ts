import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Header } from '../header/header';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, Header],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class Card {

}
