import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  animations: [
    trigger('state', [
      state('in1', style({
        transform: 'scale(1)'
      })),
      state('in2', style({
        transform: 'scale(1)'
      })),
      state('in3', style({
        transform: 'scale(1)'
      })),
      state('void', style({
        opacity: 0,
        display: "none",
      })),
      transition('void => in1',[
        style({transform: 'translateX(-50px)'}),
        animate("1s 1s")
      ]),
      transition('void => in2',[
        style({transform: 'translateX(-50px)'}),
        animate("1s 3s ease-in")
      ]),
      transition('void => in3',[
        style({transform: 'translateX(-50px)'}),
        animate("1s 5s ease-in")
      ]),
      transition('* => void',[
        animate(100, style({transform:'translateX(100%)'}))
      ]),
    ])
  ]
})

export class LandingComponent implements OnInit{
  state1 : any = 'void';
  state2 : any = 'void';
  state3 : any = 'void';
  state4 : any = 'void';

  constructor(private api: ApiService,
    private router: Router){}

  toggleState() : void {
    if (this.state1 == 'void'){
      this.state1 = 'in1';
    }else{
      this.state1 = "void";
    }
    if (this.state2 == 'void'){
      this.state2 = 'in2';
    }else{
      this.state2 = "void";
    } 
    if (this.state3 == 'void'){
      this.state3 = 'in3';
    }
  }

  startScan() : void{
    this.api.startScan().subscribe((json) => this.router.navigate(['/result/'+json.id]));
  }
  

  ngOnInit(){
    this.toggleState();
  }
}
