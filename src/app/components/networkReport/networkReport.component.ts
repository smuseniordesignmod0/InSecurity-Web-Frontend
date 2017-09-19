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
    insecureColor = false;
    kindaSecureColor = false;
    secureColor = false;


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
        this.insecureColor = true;
        this.kindaSecureColor = false;
        this.secureColor = false;
      }
      else if (superThis.report['Vulnerability_Grade'] === "D"){
        this.insecureColor = true;
        this.kindaSecureColor = false;
        this.secureColor = false;
      }
      else if (superThis.report['Vulnerability_Grade'] === "C"){
        this.insecureColor = false;
        this.kindaSecureColor = true;
        this.secureColor = false;

      }
      else if (superThis.report['Vulnerability_Grade'] === "B"){
        this.insecureColor = false;
        this.kindaSecureColor = true;
        this.secureColor = false;
      }
      else if (superThis.report['Vulnerability_Grade'] === "A"){
        this.insecureColor = false;
        this.kindaSecureColor = false;
        this.secureColor = true;
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
