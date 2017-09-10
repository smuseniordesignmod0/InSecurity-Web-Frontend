import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ResultComponent } from './components/result/result.component';
import { NetworkReportComponent } from './components/networkReport/networkReport.component';
import { LandingComponent } from './components/landing/landing.component';
import { DeviceReportComponent } from './components/deviceReport/deviceReport.component';

const appRoutes: Routes = [
  { path: 'result', component: ResultComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'deviceReport', component: DeviceReportComponent },
  { path: 'NetworkReportComponent', component: NetworkReportComponent },
  { path: '',
    redirectTo: '/landing',
    pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent, ResultComponent, NetworkReportComponent, LandingComponent, DeviceReportComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
