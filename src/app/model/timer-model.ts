import { interval, Subscription } from "rxjs";
import { ChangeDetectorRef } from '@angular/core';
export class TimerModel {
minutes !: number;
seconds!:number;
timeLeftColor:string;
buttonLabel:string;
isPaused:boolean;

// private timerSub !:Subscription
constructor()
{
    this.timeLeftColor = "haveTime";
    this.buttonLabel = "Start";
    this.isPaused = true //
    this.reset()
    
}
reset():void{
    this.minutes = 3 ;
    this.seconds=59;
    this.updateTimeColor();
}
tick():void{
        // this.cdr.detectChanges();
    if(this.isPaused) 
    {
        return;
    }
    this.buttonLabel = "Pause"
    //chnage color code
    this.seconds--
    if(this.seconds<0)
    {
        this.seconds=59;

}
this.minutes--;
if(this.minutes<0){
    this.reset();
    }
}
updateTimeColor():void{
    if(this.minutes>=2)
    {
        this.timeLeftColor = "haveTime";
    }
    else if(this.minutes>1)
    {
        this.timeLeftColor = "lessTime";
    }
    else
    {
        this.timeLeftColor = "notime"
    }
}
togglePause():void
{
    this.isPaused = !this.isPaused
    this.buttonLabel = this.isPaused ?'Resume':'Pause';
}
}