import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  current = 0;
  max = 100;
  progresses = [ 1, 5, 25, 52, 65, 70, 80, 88, 100];
  timer = Observable.timer(0,500);
  subscription = null;
  scanDone = false;
  ngOnInit() {
    this.subscription = this.timer.subscribe(() => this.fetchProgress());
  }

  fetchProgress = function(){
    this.current = this.progresses.shift();
    if(this.progresses.length == 0){
      this.subscription.unsubscribe();
    }
    if(this.current == 100){
      setTimeout(() => this.scanDone = true, 1000);
    }
  }
}
