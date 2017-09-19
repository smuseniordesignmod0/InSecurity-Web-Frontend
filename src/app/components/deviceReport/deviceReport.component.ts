import { Component } from '@angular/core';
import {PageEvent} from '@angular/material';
import {MdPaginatorModule} from '@angular/material';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ApiService } from '../../services/api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'device-report',
  templateUrl: './deviceReport.component.html',
  styleUrls: ['./deviceReport.component.css']
})
export class DeviceReportComponent {

  id = 0;
  devices=[];
  deviceIPList = [];
  deviceObj = {};
  myDeviceIP = '';
  myDeviceVulns = [];
  myDeviceServices = [];
  myDeviceVulnScore = '';
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
    this.route.params.subscribe(params => this.myDeviceIP = params['device']);
    this.api.getDevices(this.id).subscribe(json => superThis.devices = json);
    console.log(superThis.devices);

    // this.deviceIPList = superThis.devices['Devices'];
    // console.log(this.deviceIPList);
    for (var i=0; i<superThis.devices.length; i++) {
      this.deviceObj[superThis.devices[i]['IP']] = superThis.devices[i];
    }

    console.log(this.deviceObj);


    for (let prop in this.deviceObj) {
      if (prop === this.myDeviceIP) {
          this.myDeviceVulns = this.deviceObj[prop]['host_CVE_list'];
          this.myDeviceServices = this.deviceObj[prop]['Services'];
          this.myDeviceVulnScore = this.deviceObj[prop]['Vulnerability_Score'];
      }
      else{
        console.log('nah');
      }
    }

    console.log(this.myDeviceVulns);

    // for (var i=0; i<superThis.devices.length; i++) {
    //   console.
    // }




  }

}
