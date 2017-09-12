import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  current = 0;
  max = 100;
  timer = Observable.timer(0,500);
  subscription = null;
  scanDone = false;
  ngOnInit() {
    this.subscription = this.timer.subscribe(() => this.fetchProgress());
  }
  api : ApiService;

  constructor(api: ApiService){
    this.api = api;
  }

  fetchProgress = function(){
    this.current = this.api.getProgress();

    if(this.current == 100){
      this.subscription.unsubscribe();
      setTimeout(() => this.scanDone = true, 1000);
    }
  }
}
