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

  constructor(private api: ApiService,
  private route: ActivatedRoute){}

  ngOnInit() {
    var superThis = this;
    this.route.params.subscribe(params => this.id = params['id']);
    this.api.getRouter(this.id).subscribe(json => superThis.router = json);
    console.log(superThis.router);
  }

    // MdPaginator Inputs
    length = 1;
    pageSize = 10;
    pageSizeOptions = [5, 10, 25, 100];

    // MdPaginator Output
    pageEvent: PageEvent;

    setPageSizeOptions(setPageSizeOptionsInput: string) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
}
