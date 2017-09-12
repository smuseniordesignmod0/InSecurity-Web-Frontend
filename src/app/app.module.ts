import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ResultComponent } from './components/result/result.component';
import { NetworkReportComponent } from './components/networkReport/networkReport.component';
import { LandingComponent } from './components/landing/landing.component';
import { DeviceReportComponent } from './components/deviceReport/deviceReport.component';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { ApiService } from './services/api.service';

const appRoutes: Routes = [
  { path: 'result', component: ResultComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'deviceReport', component: DeviceReportComponent },
  { path: 'networkReport', component: NetworkReportComponent },
  { path: '',
    redirectTo: '/landing',
    pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent, ResultComponent, NetworkReportComponent, LandingComponent, DeviceReportComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes),
    RoundProgressModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
