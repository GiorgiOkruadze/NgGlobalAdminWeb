import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DailyDataset } from 'src/app/models/daily-dataset.model';
import { Translation } from 'src/app/models/translation.model';
import { DailyDatasetService } from 'src/app/services/daily-dataset.service';

@Component({
  selector: 'app-update-daily-dataset',
  templateUrl: './update-daily-dataset.component.html',
  styleUrls: ['./update-daily-dataset.component.css']
})
export class UpdateDailyDatasetComponent implements OnInit {
  imageBase64Link:any;
  imageBaseLink!:any;
  currentDailyDatasetId!:number;
  currentDailyDataset!: any;
  formTranslationModel!:any;

  constructor(private dailyDatasetService: DailyDatasetService,
    private router: Router,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params: Params) => {
      this.currentDailyDatasetId = params['dailyDatasetId'];
      this.dailyDatasetService.getDailyDatasetById(this.currentDailyDatasetId).subscribe((response: any) => {
        this.currentDailyDataset = response;
        this.generateFormTranslationModel(response);
        this.imageBase64Link = this.currentDailyDataset.imageName;
      })
    })
  }

  public getTrText(translations: [], languageId: any): any {
    var currentTr:any =  translations.find((o:any) => o.languageId == languageId);
    
    if(currentTr==null)
      return "";

    return currentTr.text;
  }

  
  public generateFormTranslationModel(dailyDataset:any): any {
    this.formTranslationModel = {
      titleGeo:this.getTrText(dailyDataset.titleTranslations,2),
      titleEng:this.getTrText(dailyDataset.titleTranslations,1),
      shortDescGeo:this.getTrText(dailyDataset.shortDescriptionTranslations,2),
      shortDescEng:this.getTrText(dailyDataset.shortDescriptionTranslations,1),
      longDescGeo:this.getTrText(dailyDataset.longDescriptionTranslations,2),
      longDescEng:this.getTrText(dailyDataset.longDescriptionTranslations,1)
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
    let formVal:any = form.value;
    var dailyDataset = new DailyDataset(
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
    dailyDataset.id = Number(this.currentDailyDatasetId);
    dailyDataset.dailyDatasetImageId = Number(this.currentDailyDataset.image.id)
    this.dailyDatasetService.updateNewDailyDataset(dailyDataset).subscribe((response:any) => {
      console.log(response);
      if(response){
        this.router.navigate(["/daily-datasets"]);
      }
    })
  }
}
