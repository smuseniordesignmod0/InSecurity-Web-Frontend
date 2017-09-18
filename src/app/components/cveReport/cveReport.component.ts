import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ApiService } from '../../services/api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgClass } from '@angular/common';
// import { OnInit } from '@angular/core';

@Component({
  selector: 'cve-report',
  templateUrl: './cveReport.component.html',
  styleUrls: ['./cveReport.component.css']
})

export class CveReportComponent {
    subscription = null;
    id = 0;
    report = [];
    myCveId = '';
    Vuln_ID='';
    CVSS_Severity = 0;
    summary = '';
    cveId = '';
    cveObj = {};
    fullCVEList=[];


    constructor(private api: ApiService,
    private route: ActivatedRoute){}

    ngOnInit() {
      this.route.params.subscribe(params => this.id = params['id']);
      this.route.params.subscribe(params => this.cveId = params['cveID']);
      var superThis = this;
      this.api.getReport(this.id).subscribe(json => superThis.report = json);
      // console.log(superThis.report);
      this.fullCVEList = superThis.report['Router']['host_CVE_list'];
      // console.log(this.fullCVEList);
      for (var i=0; i<this.fullCVEList.length; i++) {
        this.cveObj[this.fullCVEList[i]['Vuln_ID']] = this.fullCVEList[i];
      }

      superThis.myCveId = this.cveObj[this.cveId]['Vuln_ID'];
      superThis.CVSS_Severity = this.cveObj[this.cveId]['CVSS_Severity'];
      superThis.summary = this.cveObj[this.cveId]['Summary'];
      //
      console.log(this.myCveId);
      console.log(this.CVSS_Severity);
      console.log(this.summary);
      // superThis.roundedScore = superThis.report['Vulnerability_Score'];

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
