import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  imports: [
    MatSidenavModule,
    MatButtonModule,
    FontAwesomeModule
  ],
  exports: [
    MatSidenavModule,
    MatButtonModule,
    FontAwesomeModule
  ]
})
export class AppMaterialModule { }
