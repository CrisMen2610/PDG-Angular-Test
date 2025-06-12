import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button implements OnInit {
  @Input() buttonMessage!: string;
  @Input() isAlternative?: boolean;

  constructor() {}
  ngOnInit(): void {
    console.log(this.isAlternative);
  }
}
