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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ActionReducer, StoreModule } from '@ngrx/store';
import { LogInUser } from './models/logInUser.model';
import { UserReducer } from './state_manager/user.reducer';
import { UserService } from './services/user.service';
import { LogInComponent } from './views/log-in/log-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCarComponent } from './views/car-pg/add-car/add-car.component';
import { UploadCarImageComponent } from './views/car-pg/upload-car-image/upload-car-image.component';
import { UpdateCarComponent } from './views/car-pg/update-car/update-car.component';
import { HttpInterceptorService } from './interceptors/http-interceptor.service';
import { LoadingComponent } from './shared-components/loading/loading.component';
import { AddCompanyInfoComponent } from './views/company-info-pg/add-company-info/add-company-info.component';
import { UpdateCompanyInfoComponent } from './views/company-info-pg/update-company-info/update-company-info.component';
import { AddDailyDatasetComponent } from './views/daily-dataset-pg/add-daily-dataset/add-daily-dataset.component';
import { UpdateDailyDatasetComponent } from './views/daily-dataset-pg/update-daily-dataset/update-daily-dataset.component';
import { AddCompanyServiceComponent } from './views/company-service-pg/add-company-service/add-company-service.component';
import { UpdateCompanyServiceComponent } from './views/company-service-pg/update-company-service/update-company-service.component';
import { AddContractComponent } from './views/contract-pg/add-contract/add-contract.component';
import { UpdateContractComponent } from './views/contract-pg/update-contract/update-contract.component';
import { AddNewAdminComponent } from './views/user-pg/add-new-admin/add-new-admin.component';

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
    ContractPgComponent,
    LogInComponent,
    AddCarComponent,
    UploadCarImageComponent,
    UpdateCarComponent,
    LoadingComponent,
    AddCompanyInfoComponent,
    UpdateCompanyInfoComponent,
    AddDailyDatasetComponent,
    UpdateDailyDatasetComponent,
    AddCompanyServiceComponent,
    UpdateCompanyServiceComponent,
    AddContractComponent,
    UpdateContractComponent,
    AddNewAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      users:(UserReducer.Reducer as ActionReducer<LogInUser>)
    })
  ],
  providers: [
    UserService,
    HttpInterceptorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:HttpInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
