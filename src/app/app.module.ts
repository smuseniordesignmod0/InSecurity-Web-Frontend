import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ResultComponent } from './components/result/result.component';
import { NetworkReportComponent } from './components/networkReport/networkReport.component';
import { LandingComponent } from './components/landing/landing.component';
import { DeviceReportComponent } from './components/deviceReport/deviceReport.component';
import { ApiService } from './services/api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdProgressSpinnerModule, MdToolbarModule, MdSidenavModule, MdListModule, MdButtonModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'result/:id', component: ResultComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'result/:id/deviceReport/:device', component: DeviceReportComponent },
  { path: 'result/:id/networkReport', component: NetworkReportComponent },
  { path: '',
    redirectTo: '/landing',
    pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent, ResultComponent, NetworkReportComponent, LandingComponent, DeviceReportComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), BrowserAnimationsModule,
    MdProgressSpinnerModule, HttpClientModule, MdToolbarModule,
    MdSidenavModule, MdListModule, MdButtonModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
