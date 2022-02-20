import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CompanyInfo } from '../models/company-info.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyInfoService {

  constructor(private httpClient: HttpClient) { }

  getAllCompanyInfos(): any {
    let fullApiUrl: string = `${environment.serverApiUrl}/api/CompanyInfo`;
    return this.httpClient.get(fullApiUrl);
  }

  getInfoById(infoId:number):any{
    let fullApiUrl: string = `${environment.serverApiUrl}/api/CompanyInfo/${infoId}`;
    return this.httpClient.get(fullApiUrl);
  }

  deleteCompanyInfoById(companyInfoId: any): any {
    var jwt: string = UserService.logInUser.jwt;
    let fullApiUrl: string = `${environment.serverApiUrl}/api/CompanyInfo/${companyInfoId}`;
    let headers = new HttpHeaders({'content-type':'application/json'})
    .set('Authorization', `Bearer ${jwt}`);
    
    return this.httpClient.delete(fullApiUrl, { headers: headers });
  }

  addNewCompanyInfo(info:CompanyInfo):any{
    var jwt: string = UserService.logInUser.jwt;
    let fullApiUrl: string = environment.serverApiUrl + '/api/CompanyInfo';
    let headers = new HttpHeaders({'content-type':'application/json'})
    .set('Authorization', `Bearer ${jwt}`);
    return this.httpClient.post(fullApiUrl,info,{headers:headers});
  }

  updateCompanyInfo(info:CompanyInfo):any{
    var jwt: string = UserService.logInUser.jwt;
    let fullApiUrl: string = environment.serverApiUrl + '/api/CompanyInfo';
    let headers = new HttpHeaders({'content-type':'application/json'})
    .set('Authorization', `Bearer ${jwt}`);
    return this.httpClient.put(fullApiUrl,info,{headers:headers});
  }
}
