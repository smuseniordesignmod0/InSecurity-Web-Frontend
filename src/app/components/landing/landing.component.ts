import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  constructor(private api: ApiService,
              private router: Router){}

  startScan = function(){
    this.api.startScan().subscribe((json) => this.router.navigate(['/result/'+json.id]));
  }
}
