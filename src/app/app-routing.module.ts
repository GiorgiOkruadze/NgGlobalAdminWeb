import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCarComponent } from './views/car-pg/add-car/add-car.component';
import { CarPgComponent } from './views/car-pg/car-pg.component';
import { UpdateCardComponent } from './views/car-pg/update-card/update-card.component';
import { UploadCarImageComponent } from './views/car-pg/upload-car-image/upload-car-image.component';
import { CompanyInfoPgComponent } from './views/company-info-pg/company-info-pg.component';
import { CompanyServicePgComponent } from './views/company-service-pg/company-service-pg.component';
import { ContractPgComponent } from './views/contract-pg/contract-pg.component';
import { DailyDatasetPgComponent } from './views/daily-dataset-pg/daily-dataset-pg.component';
import { MailPgComponent } from './views/mail-pg/mail-pg.component';
import { UserPgComponent } from './views/user-pg/user-pg.component';

const routes: Routes = [
  { path: 'contracts', component: ContractPgComponent },
  { path: 'users', component: UserPgComponent },
  { path: 'daily-datasets', component: DailyDatasetPgComponent },
  { path: 'company-services', component: CompanyServicePgComponent },
  { path: 'company-infos', component: CompanyInfoPgComponent },
  { path: 'cars', component: CarPgComponent },
  { path: 'cars/add-new', component: AddCarComponent },
  { path: 'cars/upload-image/:carId', component: UploadCarImageComponent },
  { path: 'cars/update/:carId', component: UpdateCardComponent },
  { path: 'mails', component: MailPgComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
