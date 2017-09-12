import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

    progresses = [ 1, 5, 25, 52, 65, 70, 80, 88, 100];
    getProgress() : number {
        if(this.progresses.length > 0){
            return this.progresses.shift();
        }
        else{
            this.progresses = [ 1, 5, 25, 52, 65, 70, 80, 88, 100];
            return 0;
        }
    }
}