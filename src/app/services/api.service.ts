import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { reportJson } from '../constants/mock_report';
import { historyJson } from '../constants/mock_history';
import { statusJson } from '../constants/mock_status';

@Injectable()
export class ApiService {

    progresses = [ 1, 5, 25, 52, 65, 70, 80, 88, 97];

    prefix = "http://192.168.1.4/";

    reportFetched = [];

    constructor(private http: HttpClient){}

    getProgress(id : number) : Observable<any> {
        var progress : number = 0;
        var complete : string = "Incomplete";
        if(this.progresses.length > 0){
            progress = this.progresses.shift();
        }
        else{
            complete = "Complete";
            progress = 100;
            this.progresses = [ 1, 5, 25, 52, 65, 70, 80, 88, 97];
        }
        var json = statusJson;
        json.progress = progress;
        json.scanType = complete;
        //return Observable.of(json);
        return this.http.get(this.prefix+"Scan/"+id+"/Status");
    }

    startScan(body) : Observable<any> {
        return Observable.of({id : 5});
        //return this.http.post(this.prefix+"Scanner/Scan",body).map((resp : Response) => resp.json());
    }

    getHistory() : Observable<any> {
        return Observable.of(historyJson);
        //return this.http.get(this.prefix+"Scanner/History").map((resp : Response) => resp.json());
    }

    getReport(id : number) : Observable<any> {
        if(typeof this.reportFetched[id] === "undefined"){
            this.reportFetched[id] = {};
            this.reportFetched[id].fetched = true;
            this.reportFetched[id].report = this.http.get(this.prefix+"Scan/"+id+"/Report").map((resp : Response) => resp.json());
            return this.reportFetched[id].report;
        }
        return this.reportFetched[id].report;
        //return this.http.get(this.prefix+"Scan/"+id+"/Report").map((resp : Response) => resp.json());
    }

    getRouter(id : number) : Observable<any> {
        return this.getReport(id).map((json : any) => json.Router);
    }

    getDevices(id : number) : Observable<any> {
        return this.getReport(id).map((json : any) => json.Devices);
    }

    getScore(id : number) : Observable<any> {
        return this.getReport(id).map((json : any) => json.Vulnerability_Score);
    }

}