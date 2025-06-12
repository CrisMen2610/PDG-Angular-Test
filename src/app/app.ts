import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card } from '../components/card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Card],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'PDG-Angular-Test-Finished';
}
