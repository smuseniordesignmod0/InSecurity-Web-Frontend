import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
//mport * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  history = [];
  ngOnInit(){
    var superThis = this;
    this.api.getHistory().subscribe(json => superThis.history = json);
  }
  constructor(private api: ApiService){}
}
