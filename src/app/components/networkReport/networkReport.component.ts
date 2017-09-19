import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ApiService } from '../../services/api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgClass } from '@angular/common';
// import { OnInit } from '@angular/core';

@Component({
  selector: 'network-report',
  templateUrl: './networkReport.component.html',
  styleUrls: ['./networkReport.component.css']
})

export class NetworkReportComponent {
    subscription = null;
    id = 0;
    report = [];
    roundedScore = 0;
    deviceList = [];
    roundedBadgeNumbers = [];
    redColorF = false;
    redColorD = false;
    orangeColor = false;
    yellowColor = false;
    greenColor = false;
    redpill = false;
    orangepill = false;
    yellowpill = false;
    greenpill = false;


    constructor(private api: ApiService,
    private route: ActivatedRoute){}

    ngOnInit() {
      var superThis = this;
      this.route.params.subscribe(params => this.id = params['id']);
      this.api.getReport(this.id).subscribe(function(json) {
        superThis.report = json;
        console.log(superThis.report);
        superThis.roundedScore = superThis.report['Vulnerability_Score'].toFixed(2);
        superThis.deviceList = superThis.report['Devices'];
        superThis.roundedBadgeNumbers = [];

      });

      // for (let x = 0; x < superThis.deviceList.length; x++) {
      //   let networkDevice = superThis.deviceList[x];
      //   let networkDeviceScoreDecimal = networkDevice['Vulnerability_Score'];
      //   let networkDeviceScorePercentage = networkDeviceScoreDecimal * 100;
      //   let networkDeviceScoreFinal = this.toFixedLength2(networkDeviceScorePercentage);
      //   console.log(networkDeviceScoreFinal);
      //   superThis.roundedBadgeNumbers.push(networkDeviceScoreFinal);
      // }

      if (superThis.report['Vulnerability_Grade'] === "F"){
        this.redColorF = true;
        this.redColorD = false;
        this.orangeColor = false;
        this.yellowColor = false;
        this.greenColor = false;
      }
      else if (superThis.report['Vulnerability_Grade'] === "D"){
        this.redColorF = false;
        this.redColorD = true;
        this.orangeColor = false;
        this.yellowColor = false;
        this.greenColor = false;
      }
      else if (superThis.report['Vulnerability_Grade'] === "C"){
        this.redColorF = false;
        this.redColorD = false;
        this.orangeColor = true;
        this.yellowColor = false;
        this.greenColor = false;

      }
      else if (superThis.report['Vulnerability_Grade'] === "B"){
        this.redColorF = false;
        this.redColorD = false;
        this.orangeColor = false;
        this.yellowColor = true;
        this.greenColor = false;
      }
      else if (superThis.report['Vulnerability_Grade'] === "A"){
        this.redColorF = false;
        this.redColorD = false;
        this.orangeColor = false;
        this.yellowColor = false;
        this.greenColor = true;
      }

}

    // toFixedLength2 = function(number) {
    //   number = number.toFixed(2);
    //   return number
    // }
}

// export class NetworkReportComponent implements OnInit {
//   ngOnInit() {
//     // ...
//   }
// }
