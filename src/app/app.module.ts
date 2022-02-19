import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './navigation/sidebar/sidebar.component';
import { AppMaterialModule } from './app-material.module';
import { CarPgComponent } from './views/car-pg/car-pg.component';
import { CompanyInfoPgComponent } from './views/company-info-pg/company-info-pg.component';
import { CompanyServicePgComponent } from './views/company-service-pg/company-service-pg.component';
import { UserPgComponent } from './views/user-pg/user-pg.component';
import { MailPgComponent } from './views/mail-pg/mail-pg.component';
import { DailyDatasetPgComponent } from './views/daily-dataset-pg/daily-dataset-pg.component';
import { ContractPgComponent } from './views/contract-pg/contract-pg.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CarPgComponent,
    CompanyInfoPgComponent,
    CompanyServicePgComponent,
    UserPgComponent,
    MailPgComponent,
    DailyDatasetPgComponent,
    ContractPgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
