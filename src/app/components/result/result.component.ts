import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ApiService } from '../../services/api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

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
  id = 0;
  ngOnInit() {
    this.route.params.subscribe(params => this.id = params['id']);
    this.subscription = this.timer.subscribe(() => this.fetchProgress());
    // console.log(this.id);
  }

  constructor(private api: ApiService,
  private route: ActivatedRoute){}

  fetchProgress = function(){
    var superThis = this;
    this.api.getProgress(1).subscribe(function(result){
      superThis.current = result.progress;
      if(result.scanType == "Complete"){
        superThis.subscription.unsubscribe();
        setTimeout(() => superThis.fetchScore(), 1000);
      }
    });
  }

  fetchScore = function(){
    this.scanDone = true;
    // console.log(this.id);
    this.api.getScore(this.id).subscribe((score) => {
      if(parseFloat(score) >= 90){
        this.grade = "A";
      }
      else if(parseFloat(score) >= 80){
        this.grade = "B";
      }
      else if(parseFloat(score) >= 70){
        this.grade = "C";
      }
      else if(parseFloat(score) >= 60){
        this.grade = "D";
      }
      else if(parseFloat(score) >= 50){
        this.grade = "F";
      }
    });
  }
}
