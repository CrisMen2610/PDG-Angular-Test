import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Header } from '../header/header';
import { InputComponent } from '../input/input';
import { InputTypes } from '../input/models/input-models';
import { Button } from '../button/button';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, Header, InputComponent, Button],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class Card {
  inputTypes = InputTypes;
}
