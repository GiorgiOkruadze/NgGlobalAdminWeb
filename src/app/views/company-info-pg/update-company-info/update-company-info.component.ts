import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CompanyInfo } from 'src/app/models/company-info.model';
import { Translation } from 'src/app/models/translation.model';
import { CompanyInfoService } from 'src/app/services/company-info.service';

@Component({
  selector: 'app-update-company-info',
  templateUrl: './update-company-info.component.html',
  styleUrls: ['./update-company-info.component.css']
})
export class UpdateCompanyInfoComponent implements OnInit {
  currentInfoId!:number;
  currentInfo!:any;
  formTranslationModel!:any;

  constructor(private companyInfoService:CompanyInfoService, 
    private router:Router,
    private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params: Params) => {
      this.currentInfoId = params['infoId'];
      this.companyInfoService.getInfoById(this.currentInfoId).subscribe((response: any) => {
        this.currentInfo = response;
        this.generateFormTranslationModel(response);
      })
    })
  }

  onSubmit(form:NgForm){
    var formTranslationData = this.formTranslationModel;
    var formVal = form.value;
    var companyInfo:CompanyInfo = new CompanyInfo(
      formVal.email,
      formVal.phoneNumber,
      [
        new Translation(2,formVal.addressGeo,formTranslationData.addressGeo.id),
        new Translation(1,formVal.addressEng,formTranslationData.addressEng.id)
      ],
      formVal.viber,
      formVal.facebook,
      formVal.whatsApp
    );
    this.companyInfoService.updateCompanyInfo(companyInfo).subscribe((response:any) => {
      if(response){
        this.router.navigate(["/company-infos"]);
      }
    });
  }

  public getTr(translations: [], languageId: any): any {
    var currentTr:any =  translations.find((o:any) => o.languageId == languageId);
    
    if(currentTr==null)
      return "";

    return currentTr;
  }

  
  public generateFormTranslationModel(info:any): any {
    this.formTranslationModel = {
      addressGeo:this.getTr(info.addressTranslations,2),
      addressEng:this.getTr(info.addressTranslations,1),
    }
  }

}
