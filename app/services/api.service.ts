import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ApiService {

    progresses = [ 1, 5, 25, 52, 65, 70, 80, 88, 100];

    prefix = "httpPrefix";

    constructor(private http: HttpClient){}

    getProgress(id : number) : Observable<any> {
        var returnVal : number = 0;
        if(this.progresses.length > 0){
            returnVal = this.progresses.shift();
        }
        else{
            this.progresses = [ 1, 5, 25, 52, 65, 70, 80, 88, 100];
        }
        //return Observable.of(returnVal);
        return this.http.get(this.prefix+"Scan/"+id+"/Status").map((resp : Response) => resp.json());
    }

    startScan(body) : Observable<any> {
        return this.http.post(this.prefix+"Scanner/Scan",body).map((resp : Response) => resp.json());
    }

    getHistory() : Observable<any> {
        return this.http.get(this.prefix+"Scanner/History").map((resp : Response) => resp.json());
    }

    getReport(id : number) : Observable<any> {
        return this.http.get(this.prefix+"Scan/"+id+"/Report").map((resp : Response) => resp.json());
    }

}