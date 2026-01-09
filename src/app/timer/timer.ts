import { Component ,ChangeDetectorRef } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { interval } from 'rxjs';
@Component({
  selector: 'app-timer',
  imports: [DecimalPipe],
  templateUrl: './timer.html',
  styleUrl: './timer.css',
})
export class Timer {
  minutes:number;
  seconds:number;
  constructor(private cdr: ChangeDetectorRef) {
    this.minutes = 3;
    this.seconds = 59;
    // setInterval(() => this.tick(), 1000);
   }
   ngOnInit()
   {
    interval(1000).subscribe(()=>this.tick())
   }
  tick() {
    this.cdr.detectChanges();
    if (--this.seconds < 0) {
      this.seconds = 59;
      if (--this.minutes < 0) {
        this.minutes = 3;
        this.seconds = 59;
      }
    }
  } 
}
