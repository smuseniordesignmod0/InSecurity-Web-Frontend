import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
//mport * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myStyle: object = {};
	myParams: object = {};
	width: number = 100;
  height: number = 100;
  title = 'app';
  history = [];
  ngOnInit(){
    var superThis = this;
    this.api.getHistory().subscribe(json => superThis.history = json);

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
  constructor(private api: ApiService){}
 
}
