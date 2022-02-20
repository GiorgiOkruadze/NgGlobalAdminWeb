import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DailyDataset } from '../models/daily-dataset.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class DailyDatasetService {

  constructor(private httpClient:HttpClient) { }

  getAllDailyDatasets():any {
    var fullApiUrl:string = `${environment.serverApiUrl}/api/DailyDataset`
    return this.httpClient.get(fullApiUrl);
  }

  
  getDailyDatasetById(dailyId:number):any{
    let fullApiUrl: string = `${environment.serverApiUrl}/api/DailyDataset/${dailyId}`;
    return this.httpClient.get(fullApiUrl);
  }

  deleteDailyDatasetById(dailyId: any): any {
    var jwt: string = UserService.logInUser.jwt;
    let fullApiUrl: string = `${environment.serverApiUrl}/api/DailyDataset/${dailyId}`;
    let headers = new HttpHeaders({'content-type':'application/json'})
    .set('Authorization', `Bearer ${jwt}`);
    
    return this.httpClient.delete(fullApiUrl, { headers: headers });
  }

  addNewDailyDataset(dailyDatasetModel:DailyDataset):any{
    var jwt: string = UserService.logInUser.jwt;
    let fullApiUrl: string = environment.serverApiUrl + '/api/DailyDataset';
    let headers = new HttpHeaders({'content-type':'application/json'})
    .set('Authorization', `Bearer ${jwt}`);
    return this.httpClient.post(fullApiUrl,dailyDatasetModel,{headers:headers});
  }

  updateNewDailyDataset(dailyDatasetModel:DailyDataset):any{
    var jwt: string = UserService.logInUser.jwt;
    let fullApiUrl: string = environment.serverApiUrl + '/api/DailyDataset';
    let headers = new HttpHeaders({'content-type':'application/json'})
    .set('Authorization', `Bearer ${jwt}`);
    return this.httpClient.put(fullApiUrl,dailyDatasetModel,{headers:headers});
  }
}
