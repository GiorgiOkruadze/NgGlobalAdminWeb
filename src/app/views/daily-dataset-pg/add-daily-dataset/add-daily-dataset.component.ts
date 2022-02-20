import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DailyDataset } from 'src/app/models/daily-dataset.model';
import { Translation } from 'src/app/models/translation.model';
import { DailyDatasetService } from 'src/app/services/daily-dataset.service';

@Component({
  selector: 'app-add-daily-dataset',
  templateUrl: './add-daily-dataset.component.html',
  styleUrls: ['./add-daily-dataset.component.css']
})
export class AddDailyDatasetComponent implements OnInit {
  imageBase64Link:any;
  imageBaseLink!:any;
  constructor(private dailyDatasetService:DailyDatasetService,
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
    this.dailyDatasetService.addNewDailyDataset(dailyDataset).subscribe((response:any) => {
      if(response){
        this.router.navigate(["/daily-datasets"]);
      }
    })
  }
}
