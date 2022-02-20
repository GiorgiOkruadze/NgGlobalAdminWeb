import { Component, OnInit } from '@angular/core';
import { CompanyServiceProxy } from 'src/app/services/company-service.service';

@Component({
  selector: 'app-company-service-pg',
  templateUrl: './company-service-pg.component.html',
  styleUrls: ['./company-service-pg.component.css']
})
export class CompanyServicePgComponent implements OnInit {
  displayedColumns: string[] = ['image', 'title', 'shortDescription', 'longDescription',"update","delete"];
  dataSource: [] = [];

  constructor(private companyService: CompanyServiceProxy) { }

  ngOnInit(): void {
    this.getAllCompanyServices();
  }

  getAllCompanyServices() {
    this.companyService.getAllCompanyServices().subscribe((response:any)=>{
      this.dataSource = response;
    })
  }

  public getTrText(languageId: any,translations: []): any {
    var currentTr:any =  translations.find((o:any) => o.languageId == languageId);
    
    if(currentTr==null)
      return "";

    return currentTr.text;
  }

  onDeleteCompanyServiceBtnClick(companyServiceId: any) {
    this.companyService.deleteCompanyServiceById(companyServiceId).subscribe((response:any) => {
      if(response){
        this.getAllCompanyServices();
      }
    })
  }
}
