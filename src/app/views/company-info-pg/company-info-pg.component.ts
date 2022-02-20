import { Component, OnInit } from '@angular/core';
import { CompanyInfoService } from 'src/app/services/company-info.service';

@Component({
  selector: 'app-company-info-pg',
  templateUrl: './company-info-pg.component.html',
  styleUrls: ['./company-info-pg.component.css']
})
export class CompanyInfoPgComponent implements OnInit {
  displayedColumns: string[] = ['email', 'phoneNumber', 'address', 'viber', 'facebook', 'whatsApp', 'update', 'delete'];
  dataSource: [] = [];
  constructor(private companyInfoService:CompanyInfoService) { }

  getAllCompanyInfos(){
    this.companyInfoService.getAllCompanyInfos().subscribe((response:any) => {
      this.dataSource = response;
    })
  }

  ngOnInit(): void {
    this.getAllCompanyInfos();
  }

  public getTrText(translations: [], languageId: any): any {
    var currentTr:any =  translations.find((o:any) => o.languageId == languageId);
    
    if(currentTr==null)
      return "";

    return currentTr.text;
  }

  onDeleteInfoBtnClick(infoId: any) {
    this.companyInfoService.deleteCompanyInfoById(infoId).subscribe((response:any) => {
      if(response){
        this.getAllCompanyInfos();
      }
    });
  }
}
