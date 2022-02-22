import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private httpClient:HttpClient) { }

  getAllContracts():any {
    let fullApiUrl: string = `${environment.serverApiUrl}/api/Contract`;
    return this.httpClient.get(fullApiUrl);
  }

  deleteContractById(contractId: any): any {
    var jwt: string = UserService.logInUser.jwt;
    let fullApiUrl: string = `${environment.serverApiUrl}/api/Contract/${contractId}`;
    let headers = new HttpHeaders({'content-type':'application/json'})
    .set('Authorization', `Bearer ${jwt}`);
    
    return this.httpClient.delete(fullApiUrl, { headers: headers });
  }

  addNewContract(contract:any):any {
    var jwt: string = UserService.logInUser.jwt;
    let fullApiUrl: string = environment.serverApiUrl + '/api/Contract';
    let headers = new HttpHeaders({'content-type':'application/json'})
    .set('Authorization', `Bearer ${jwt}`);
    return this.httpClient.post(fullApiUrl,contract,{headers:headers});
  }

  getContractById(contractId:any){
    let fullApiUrl: string = `${environment.serverApiUrl}/api/Contract/${contractId}`;
    return this.httpClient.get(fullApiUrl);
  }

  updateContractService(contract:any):any{
    var jwt: string = UserService.logInUser.jwt;
    let fullApiUrl: string = environment.serverApiUrl + '/api/Contract';
    let headers = new HttpHeaders({'content-type':'application/json'})
    .set('Authorization', `Bearer ${jwt}`);
    return this.httpClient.put(fullApiUrl,contract,{headers:headers});
  }
}
