import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CompanyService } from 'src/app/models/company-service.model';
import { Translation } from 'src/app/models/translation.model';
import { CompanyServiceProxy } from 'src/app/services/company-service.service';

@Component({
  selector: 'app-update-company-service',
  templateUrl: './update-company-service.component.html',
  styleUrls: ['./update-company-service.component.css']
})
export class UpdateCompanyServiceComponent implements OnInit {
  imageBase64Link:any;
  imageBaseLink!:any;
  companyServiceId!:number;
  currentCompanyService!: any;
  formTranslationModel!:any;

  constructor(private companyService: CompanyServiceProxy,
    private router: Router,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params: Params) => {
      this.companyServiceId = params['companyServiceId'];
      this.companyService.getCompanyServiceById(this.companyServiceId).subscribe((response: any) => {
        this.currentCompanyService = response;
        this.generateFormTranslationModel(response);
        this.imageBase64Link = this.currentCompanyService.imageName;
      })
    })
  }

  public getTr(translations: [], languageId: any): any {
    var currentTr:any =  translations.find((o:any) => o.languageId == languageId);
    
    if(currentTr==null)
      return "";

    return currentTr;
  }

  
  public generateFormTranslationModel(companyService:any): any {
    this.formTranslationModel = {
      titleGeo:this.getTr(companyService.titleTranslations,2),
      titleEng:this.getTr(companyService.titleTranslations,1),
      shortDescGeo:this.getTr(companyService.shortDescriptionTranslations,2),
      shortDescEng:this.getTr(companyService.shortDescriptionTranslations,1),
      longDescGeo:this.getTr(companyService.longDescriptionTranslations,2),
      longDescEng:this.getTr(companyService.longDescriptionTranslations,1)
    }
  }

  onUploadImageBtnClick(uploadImage:HTMLInputElement){
    uploadImage.click();
  }

  onUploadInpChange(event:Event){
    const self= this;
    var inp:any = event.target as HTMLInputElement;
    var reader = new FileReader();
    reader.readAsDataURL(inp.files[0]);
    reader.onload = function(){
      self.imageBase64Link = reader.result;
      self.imageBaseLink = self.imageBase64Link.split("base64,")[1];
    }
  }

  onSubmit(form:NgForm){
    var formTranslationData = this.formTranslationModel;
    let formVal:any = form.value;
    var companyService = new CompanyService(
      this.imageBaseLink,
      [
        new Translation(1,formVal.titleEng,formTranslationData.titleEng.id),
        new Translation(2,formVal.titleGeo,formTranslationData.titleGeo.id)
      ],
      [
        new Translation(1,formVal.shortDescEng,formTranslationData.shortDescEng.id),
        new Translation(2,formVal.shortDescGeo,formTranslationData.shortDescGeo.id)
      ],
      [
        new Translation(1,formVal.longDescEng,formTranslationData.longDescEng.id),
        new Translation(2,formVal.longDescGeo,formTranslationData.longDescGeo.id)
      ]
    );
    companyService.id = Number(this.companyServiceId);
    companyService.companyServiceImageId = Number(this.currentCompanyService.image.id)
    this.companyService.updateNewCompanyService(companyService).subscribe((response:any) => {
      console.log(response);
      if(response){
        this.router.navigate(["/company-services"]);
      }
    })
  }
}
