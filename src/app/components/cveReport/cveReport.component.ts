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
    id = 5;
    report = [];
    myCveId = '';
    Vuln_ID='';
    CVSS_Severity = 0;
    summary = '';


    constructor(private api: ApiService,
    private route: ActivatedRoute){}

    ngOnInit() {
      var superThis = this;
      this.api.getReport(this.id).subscribe(json => superThis.report = json);
      console.log(superThis.report);
      let fullCVEList = superThis.report['host_CVE_list'];
      superThis.myCveId = superThis.report['Router']['host_CVE_list'][this.id]['Vuln_ID'];
      superThis.CVSS_Severity = superThis.report['Router']['host_CVE_list'][this.id]['CVSS_Severity'];
      superThis.summary = superThis.report['Router']['host_CVE_list'][this.id]['Summary'];

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
