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
  grade = "A";
  timer = Observable.timer(0,500);
  subscription = null;
  scanDone = false;
  ngOnInit() {
    //this.subscription = this.timer.subscribe(() => this.fetchProgress());
  }
  api : ApiService;

  constructor(api: ApiService){
    this.api = api;
  }

  fetchProgress = function(){
    var superThis = this;
    this.api.getProgress().subscribe(function(result){
      superThis.current = result;
      if(superThis.current == 100){
        superThis.subscription.unsubscribe();
        setTimeout(() => superThis.scanDone = true, 1000);
      }
    });
  }
}
