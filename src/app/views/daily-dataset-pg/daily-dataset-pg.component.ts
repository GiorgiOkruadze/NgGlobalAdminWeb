import { Component, OnInit } from '@angular/core';
import { DailyDatasetService } from 'src/app/services/daily-dataset.service';

@Component({
  selector: 'app-daily-dataset-pg',
  templateUrl: './daily-dataset-pg.component.html',
  styleUrls: ['./daily-dataset-pg.component.css']
})
export class DailyDatasetPgComponent implements OnInit {
  displayedColumns: string[] = ['image', 'title', 'shortDescription', 'longDescription',"update","delete"];
  dataSource: [] = [];

  constructor(private dailyDatasetService: DailyDatasetService) { }

  ngOnInit(): void {
    this.getAllDailyDatasets();
  }

  getAllDailyDatasets() {
    this.dailyDatasetService.getAllDailyDatasets().subscribe((response:any)=>{
      this.dataSource = response;
    })
  }

  public getTrText(languageId: any,translations: []): any {
    var currentTr:any =  translations.find((o:any) => o.languageId == languageId);
    
    if(currentTr==null)
      return "";

    return currentTr.text;
  }

  onDeleteCarBtnClick(dailyDatasetId: any) {
    this.dailyDatasetService.deleteDailyDatasetById(dailyDatasetId).subscribe((response:any) => {
      if(response){
        this.getAllDailyDatasets();
      }
    })
  }

}
