import { Component, OnInit } from '@angular/core';
import {ReadJsonService} from "../../services/read-json.service";

@Component({
  selector: 'result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})

export class ResultComponent {
    data : any;

    
    constructor(private readJson : ReadJsonService){}
    ngOnInit():void{
      this.readJson.getAll()
      .then(
        data => this.data = data
      );
      console.log(this.data);
    }
    



}
