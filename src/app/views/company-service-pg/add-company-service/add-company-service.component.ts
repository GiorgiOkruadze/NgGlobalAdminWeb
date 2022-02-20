import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/models/company-service.model';
import { Translation } from 'src/app/models/translation.model';
import { CompanyServiceProxy } from 'src/app/services/company-service.service';

@Component({
  selector: 'app-add-company-service',
  templateUrl: './add-company-service.component.html',
  styleUrls: ['./add-company-service.component.css']
})
export class AddCompanyServiceComponent implements OnInit {
  imageBase64Link:any;
  imageBaseLink!:any;
  constructor(private companyService:CompanyServiceProxy,
    private router:Router) { }

  ngOnInit(): void {
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
    let formVal:any = form.value;
    var dailyDataset = new CompanyService(
      this.imageBaseLink,
      [
        new Translation(1,formVal.titleEng),
        new Translation(2,formVal.titleGeo)
      ],
      [
        new Translation(1,formVal.shortDescEng),
        new Translation(2,formVal.shortDescGeo)
      ],
      [
        new Translation(1,formVal.longDescEng),
        new Translation(2,formVal.longDescGeo)
      ]
    );
    this.companyService.addNewCompanyService(dailyDataset).subscribe((response:any) => {
      if(response){
        this.router.navigate(["/company-services"]);
      }
    })
  }

}
