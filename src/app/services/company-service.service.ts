import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CompanyService } from '../models/company-service.model';
import { DailyDataset } from '../models/daily-dataset.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyServiceProxy {

  constructor(private httpClient:HttpClient) { }

  getAllCompanyServices():any {
    var fullApiUrl:string = `${environment.serverApiUrl}/api/CompanyService`
    return this.httpClient.get(fullApiUrl);
  }

  getCompanyServiceById(companyServiceId:number):any{
    let fullApiUrl: string = `${environment.serverApiUrl}/api/CompanyService/${companyServiceId}`;
    return this.httpClient.get(fullApiUrl);
  }

  deleteCompanyServiceById(companyServiceId: any): any {
    var jwt: string = UserService.logInUser.jwt;
    let fullApiUrl: string = `${environment.serverApiUrl}/api/CompanyService/${companyServiceId}`;
    let headers = new HttpHeaders({'content-type':'application/json'})
    .set('Authorization', `Bearer ${jwt}`);
    
    return this.httpClient.delete(fullApiUrl, { headers: headers });
  }

  addNewCompanyService(companyServiceModel:CompanyService):any{
    var jwt: string = UserService.logInUser.jwt;
    let fullApiUrl: string = environment.serverApiUrl + '/api/CompanyService';
    let headers = new HttpHeaders({'content-type':'application/json'})
    .set('Authorization', `Bearer ${jwt}`);
    return this.httpClient.post(fullApiUrl,companyServiceModel,{headers:headers});
  }

  updateNewCompanyService(companyServiceModel:CompanyService):any{
    var jwt: string = UserService.logInUser.jwt;
    let fullApiUrl: string = environment.serverApiUrl + '/api/CompanyService';
    let headers = new HttpHeaders({'content-type':'application/json'})
    .set('Authorization', `Bearer ${jwt}`);
    return this.httpClient.put(fullApiUrl,companyServiceModel,{headers:headers});
  }
}
