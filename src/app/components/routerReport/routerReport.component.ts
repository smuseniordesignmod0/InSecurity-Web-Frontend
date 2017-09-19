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
  cveLimit = 0;
  serviceLimit = 0;
  constructor(private api: ApiService,
  private route: ActivatedRoute){}

  showList = function(index,limiter){
    return Math.floor(index/10) == limiter;
  }

  changeCVEPage = function(change,list){
    this.cveLimit = this.cveLimit + change;
    if(this.cveLimit < 0){
      this.cveLimit = 0;
    }
    var maxPage = Math.floor(list.length/10);
    if(this.cveLimit > maxPage){
      this.cveLimit = maxPage;
    }
  }

  changeServicePage = function(change,list){
    this.serviceLimit = this.serviceLimit + change;
    if(this.serviceLimit < 0){
      this.serviceLimit = 0;
    }
    var maxPage = Math.floor(list.length/10);
    if(this.serviceLimit > maxPage){
      this.serviceLimit = maxPage;
    }
  }

  ngOnInit() {
    var superThis = this;
    this.route.params.subscribe(params => this.id = params['id']);
    this.api.getRouter(this.id).subscribe(function(json) {
      superThis.router = json;
      console.log(superThis.router);
      superThis.routerVulnScore = superThis.router['Vulnerability_Score'];
      // this.router.Vulnerability_Score.toFixed(4)*100;
      // console.log(superThis.router['Vulnerability_Score']);
      // superThis.routerVulnScore = superThis.router['Vulnerability_Score'];
      // console.log(this.routerVulnScore);
    });
  }
}
