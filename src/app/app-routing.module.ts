import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCarComponent } from './views/car-pg/add-car/add-car.component';
import { CarPgComponent } from './views/car-pg/car-pg.component';
import { UpdateCarComponent } from './views/car-pg/update-car/update-car.component';
import { UploadCarImageComponent } from './views/car-pg/upload-car-image/upload-car-image.component';
import { AddCompanyInfoComponent } from './views/company-info-pg/add-company-info/add-company-info.component';
import { CompanyInfoPgComponent } from './views/company-info-pg/company-info-pg.component';
import { UpdateCompanyInfoComponent } from './views/company-info-pg/update-company-info/update-company-info.component';
import { AddCompanyServiceComponent } from './views/company-service-pg/add-company-service/add-company-service.component';
import { CompanyServicePgComponent } from './views/company-service-pg/company-service-pg.component';
import { UpdateCompanyServiceComponent } from './views/company-service-pg/update-company-service/update-company-service.component';
import { AddContractComponent } from './views/contract-pg/add-contract/add-contract.component';
import { ContractPgComponent } from './views/contract-pg/contract-pg.component';
import { UpdateContractComponent } from './views/contract-pg/update-contract/update-contract.component';
import { AddDailyDatasetComponent } from './views/daily-dataset-pg/add-daily-dataset/add-daily-dataset.component';
import { DailyDatasetPgComponent } from './views/daily-dataset-pg/daily-dataset-pg.component';
import { UpdateDailyDatasetComponent } from './views/daily-dataset-pg/update-daily-dataset/update-daily-dataset.component';
import { LogInComponent } from './views/log-in/log-in.component';
import { MailPgComponent } from './views/mail-pg/mail-pg.component';
import { AddNewAdminComponent } from './views/user-pg/add-new-admin/add-new-admin.component';
import { UserPgComponent } from './views/user-pg/user-pg.component';

const routes: Routes = [
  { path: 'contracts', component: ContractPgComponent },
  { path: 'contracts/add-new', component: AddContractComponent },
  { path: 'contracts/update-new/:contractId', component: UpdateContractComponent },
  { path: 'admins', component: UserPgComponent },
  { path: 'admins/add-new', component: AddNewAdminComponent },
  { path: 'daily-datasets', component: DailyDatasetPgComponent },
  { path: 'daily-datasets/add-new', component: AddDailyDatasetComponent },
  { path: 'daily-datasets/update-new/:dailyDatasetId', component: UpdateDailyDatasetComponent },
  { path: 'company-services', component: CompanyServicePgComponent },
  { path: 'company-services/add-new', component: AddCompanyServiceComponent },
  { path: 'company-services/update-new/:companyServiceId', component: UpdateCompanyServiceComponent },
  { path: 'company-infos', component: CompanyInfoPgComponent },
  { path: 'company-infos/add-new', component: AddCompanyInfoComponent },
  { path: 'company-infos/update/:infoId', component: UpdateCompanyInfoComponent },
  { path: '', component: CarPgComponent },
  { path: 'cars/add-new', component: AddCarComponent },
  { path: 'cars/upload-image/:carId', component: UploadCarImageComponent },
  { path: 'cars/update/:carId', component: UpdateCarComponent },
  //{ path: 'mails', component: MailPgComponent },
  { path: 'sign-in', component: LogInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
