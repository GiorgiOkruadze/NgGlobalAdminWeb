import { Component, OnInit } from '@angular/core';
import { ContractService } from 'src/app/services/contract.service';

@Component({
  selector: 'app-contract-pg',
  templateUrl: './contract-pg.component.html',
  styleUrls: ['./contract-pg.component.css']
})
export class ContractPgComponent implements OnInit {
  displayedColumns: string[] = ['vinCode', 'price', 'amountPaid', 'amountToBePaid','purchase','container','carManufacture','carModel','year',"update","delete"];
  dataSource: [] = [];

  constructor(private contractService: ContractService) { }

  ngOnInit(): void {
    this.getAllDailyDatasets();
  }

  getAllDailyDatasets() {
    this.contractService.getAllContracts().subscribe((response:any)=>{
      this.dataSource = response;
    })
  }

  public getTrText(languageId: any,translations: []): any {
    var currentTr:any =  translations.find((o:any) => o.languageId == languageId);
    
    if(currentTr==null)
      return "";

    return currentTr.text;
  }

  onDeleteCarBtnClick(contractId: any) {
    this.contractService.deleteContractById(contractId).subscribe((response:any) => {
      if(response){
        this.getAllDailyDatasets();
      }
    })
  }
}
