import { Component,ChangeDetectorRef  } from '@angular/core';
import { TimerModel } from '../model/timer-model';
import { CommonModule, NgSwitch, NgSwitchCase } from '@angular/common';
import { DecimalPipe } from '@angular/common';
import { interval, Subscription } from 'rxjs';
@Component({
  selector: 'app-timernew',
  standalone:true,
  imports: [CommonModule,DecimalPipe,NgSwitch, NgSwitchCase],
  templateUrl: './timernew.html',
  styleUrl: './timernew.css',
})
export class Timernew {
timer !:TimerModel;
private sub !:Subscription
// cdr !:ChangeDetectorRef;
constructor ( private cdr:ChangeDetectorRef)
{
    
}
ngOnInit():void{
  this.timer = new TimerModel()
   interval(1000).subscribe(()=>
    {
this.cdr.detectChanges()
        this.timer.tick();
        console.log("sdf")
        
this.cdr.detectChanges()
  
      })
}
togglePause():void{
  this.timer.togglePause()
}
}
