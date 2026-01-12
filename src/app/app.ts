import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Timer } from './timer/timer';
import { Timernew } from './timernew/timernew';
@Component({
  selector: 'app-root',
  imports: [Timernew,RouterOutlet,Timer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angularrevise');
}
