import { Component ,ChangeDetectorRef } from '@angular/core';
import { DecimalPipe, NgSwitch, NgSwitchCase } from '@angular/common';
import { interval } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-timer',
  imports: [DecimalPipe,CommonModule, NgSwitch, NgSwitchCase],
  templateUrl: './timer.html',
  styleUrl: './timer.css',
})
export class Timer {
  minutes:number;
  seconds:number;
  timeLeftColor: string;
  constructor(private cdr: ChangeDetectorRef) {
    this.minutes = 3;
     this.timeLeftColor = 'haveTime';
    this.seconds = 59;
    // setInterval(() => this.tick(), 1000);
   }
   ngOnInit()
   {
    interval(1000).subscribe(()=>this.tick())
   }
  tick() {
    this.cdr.detectChanges();
    console.log(this.seconds)
    if (--this.seconds < 0) {     
      this.seconds = 59;
      if (--this.minutes < 0) {
        this.minutes = 3;
        this.seconds = 59;
      }
    }
     if (this.minutes >= 2) {
      this.timeLeftColor = 'haveTime';
      return;
    }
    if (this.minutes < 2 && this.minutes >= 1) {
      this.timeLeftColor = 'lessTime';
      return;
    }
    this.timeLeftColor = 'noTime';
  } 
}
