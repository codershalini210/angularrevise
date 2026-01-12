import { Component ,Input,Output,EventEmitter} from '@angular/core';
@Component({
  selector: 'app-countdown-to-end',
  imports: [],
  templateUrl: './countdown-to-end.html',
  styleUrl: './countdown-to-end.css'
})
export class CountdownToEnd {
 @Input() seconds !: number ;
 @Output() completed:EventEmitter<void>=new EventEmitter()
  intervalId: any;
  constructor() {
    this.intervalId = setInterval(() => this.tick(), 1000);
  }
  private tick(): void {
    if (--this.seconds < 1) {
      clearInterval(this.intervalId);
      this.completed.emit()
    }
  }
}