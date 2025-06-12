import { Component, Input, OnInit } from '@angular/core';
import { InputTypes } from './models/input-models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-component',
  imports: [CommonModule],
  templateUrl: './input.html',
  styleUrl: './input.scss',
})
export class InputComponent {
  @Input() type!: string;
  @Input() required?: boolean;

  inputTypes = InputTypes;

  constructor() {}
}
