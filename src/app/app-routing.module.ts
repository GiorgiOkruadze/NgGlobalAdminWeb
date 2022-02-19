import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarPgComponent } from './views/car-pg/car-pg.component';
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
  { path: 'mails', component: MailPgComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
