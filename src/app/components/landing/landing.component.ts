import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
      state('void', style({
        opacity: 0,
        display: "none",
      })),
      transition('void => in1',[
        style({transform: 'translateX(-50px)'}),
        animate("1s")
      ]),
      transition('void => in2',[
        style({transform: 'translateX(-50px)'}),
        animate("1s 2s ease-in")
      ]),
      transition('void => in3',[
        style({transform: 'translateX(-50px)'}),
        animate("1s 3.5s ease-in")
      ]),
      transition('* => void',[
        animate(100, style({transform:'translateX(100%)'}))
      ]),
    ])
  ]
})
export class LandingComponent implements OnInit{
  myStyle: object = {};
	myParams: object = {};
	width: number = 100;
  height: number = 100;
  state1 : any = 'void';
  state2 : any = 'void';
  state3 : any = 'void';
  state4 : any = 'void';


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
    }else{
      this.state3 = "void";
    }
  }

  ngOnInit(){
    this.toggleState();
    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
  };
  this.myParams = {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#4477b2'
            },
            shape: {
                type: 'circle',
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#4477b2',
                opacity: 0.4,
                width: 1,
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: true,
              attract: {
                  enable: false,
                  rotateX: 3000,
                  rotateY: 3000
              }
            },
          },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
                enable: false,
            },
            onclick: {
                enable: false,
            },
            resize: true
          },
        }
    };
  }
}
