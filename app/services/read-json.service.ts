import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
  export class ReadJsonService {
    public apiHost: string = 'assets/mock_report.json';
    constructor(private http: Http) {}
   
    public getAll(): Promise<Object> {
        return this.http.get(this.apiHost)
          .toPromise()
          .then((response) => {
            return response.json();
          }).catch((err) => {
          console.log(err);
        });
    }
   
  }
//teaminsecurity.azurewebsites.net