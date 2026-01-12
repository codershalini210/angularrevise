import { Component,ChangeDetectorRef  } from '@angular/core';
import { TimerModel } from '../model/timer-model';
import { CommonModule, NgSwitch, NgSwitchCase } from '@angular/common';
import { DecimalPipe } from '@angular/common';
import { interval, Subscription } from 'rxjs';
import { CountdownToEnd } from '../countdown-to-end/countdown-to-end';
@Component({
  selector: 'app-timernew',
  standalone:true,
  imports: [CommonModule,DecimalPipe,NgSwitch, NgSwitchCase],
  templateUrl: './timernew.html',
  styleUrls: ['./timernew.css'],
})
export class Timernew {
  minutes:number;
  seconds:number;
  // secondsForChild:number;
  timeLeftColor: string;
  isRunning:boolean = false;
  private subscription :Subscription | null =null
  constructor(private cdr: ChangeDetectorRef) {
    this.minutes = 1;
     this.timeLeftColor = 'haveTime';
    this.seconds = 59;
    
    // setInterval(() => this.tick(), 1000);
   }
   startTimer()
   {
    if(!this.subscription || this.subscription.closed)
    {
      this.subscription =  interval(1000).subscribe(()=>this.tick())
    }
   }
   pauseTimer()
   {
    this.subscription?.unsubscribe();
   }
  //  ngOnInit()
  //  {
  //   interval(1000).subscribe(()=>this.tick())
  //  }
  tick() {
    this.cdr.detectChanges();
    // console.log(this.seconds)
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
  toogleTimer()
  {
    this.isRunning = !this.isRunning ;
    if(this.isRunning)
    {
      this.startTimer();
    }
    else{
      this.pauseTimer()
    }
  }
}
