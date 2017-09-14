import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ResultComponent } from './components/result/result.component';
import { NetworkReportComponent } from './components/networkReport/networkReport.component';
import { LandingComponent } from './components/landing/landing.component';
import { DeviceReportComponent } from './components/deviceReport/deviceReport.component';
import { ReportComponent } from './components/report/report.component';
import { ApiService } from './services/api.service';
import { RouterReportComponent } from './components/router-report/router-report.component';
import { ReadJsonService } from './services/read-json.service';

const appRoutes: Routes = [
  { path: 'result', component: ResultComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'deviceReport', component: DeviceReportComponent },
  { path: 'NetworkReportComponent', component: NetworkReportComponent },
  { path: 'report', component: ReportComponent },
  { path: 'router', component: RouterReportComponent },
  { path: '',
    redirectTo: '/landing',
    pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent, ResultComponent, NetworkReportComponent, LandingComponent, DeviceReportComponent, ReportComponent, RouterReportComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [ApiService, ReadJsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
