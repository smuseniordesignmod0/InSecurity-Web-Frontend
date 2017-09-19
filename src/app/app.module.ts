import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ResultComponent } from './components/result/result.component';
import { NetworkReportComponent } from './components/networkReport/networkReport.component';
import { LandingComponent } from './components/landing/landing.component';
import { DeviceReportComponent } from './components/deviceReport/deviceReport.component';
import { RouterReportComponent } from './components/routerReport/routerReport.component';
import { CveReportComponent } from './components/cveReport/cveReport.component';
import { ApiService } from './services/api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdProgressSpinnerModule, MdToolbarModule, MdSidenavModule, MdListModule, MdButtonModule, MdPaginatorModule, MdTableModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'result/:id', component: ResultComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'deviceReport/:id/:device', component: DeviceReportComponent },
  { path: 'networkReport/:id', component: NetworkReportComponent },
  { path: 'routerReport/:id', component: RouterReportComponent },
  { path: 'cveReport/:id/:cveID', component: CveReportComponent },
  { path: '',
    redirectTo: '/landing',
    pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent, ResultComponent, NetworkReportComponent, LandingComponent, DeviceReportComponent, RouterReportComponent, CveReportComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), BrowserAnimationsModule,
    MdProgressSpinnerModule, HttpClientModule, MdToolbarModule,
    MdSidenavModule, MdListModule, MdButtonModule, MdPaginatorModule,
    MdTableModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
