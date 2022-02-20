import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyInfo } from 'src/app/models/company-info.model';
import { Translation } from 'src/app/models/translation.model';
import { CompanyInfoService } from 'src/app/services/company-info.service';

@Component({
  selector: 'app-add-company-info',
  templateUrl: './add-company-info.component.html',
  styleUrls: ['./add-company-info.component.css']
})
export class AddCompanyInfoComponent implements OnInit {

  constructor(private companyInfoService:CompanyInfoService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    let formVal:any = form.value;
    var companyInfo:CompanyInfo = new CompanyInfo(
      formVal.email,
      formVal.phoneNumber,
      [
        new Translation(2,formVal.addressGeo),
        new Translation(1,formVal.addressEng)
      ],
      formVal.viber,
      formVal.facebook,
      formVal.whatsApp
    );
    this.companyInfoService.addNewCompanyInfo(companyInfo).subscribe((response:any) => {
      if(response){
        this.router.navigate(["/company-infos"]);
      }
    });
  }

}
