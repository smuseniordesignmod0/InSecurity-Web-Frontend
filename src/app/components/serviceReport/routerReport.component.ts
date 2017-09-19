import { Component } from '@angular/core';
import {PageEvent} from '@angular/material';
import {MdPaginatorModule} from '@angular/material';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ApiService } from '../../services/api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'router-report',
  templateUrl: './routerReport.component.html',
  styleUrls: ['./routerReport.component.css']
})

export class RouterReportComponent {

  id = 0;
  router=[];
  routerVulnScore = '';

  constructor(private api: ApiService,
  private route: ActivatedRoute){}

  ngOnInit() {
    var superThis = this;
    this.route.params.subscribe(params => this.id = params['id']);
    this.api.getRouter(this.id).subscribe(function(json) {
      superThis.router = json;
      console.log(superThis.router);
      superThis.routerVulnScore = superThis.router['Vulnerability_Score'];
      console.log(superThis.router['Vulnerability_Score']);
      console.log(this.routerVulnScore);
      // this.router.Vulnerability_Score.toFixed(4)*100;
      // console.log(superThis.router['Vulnerability_Score']);
      // superThis.routerVulnScore = superThis.router['Vulnerability_Score'];
      // console.log(this.routerVulnScore);
    });
  }
}
