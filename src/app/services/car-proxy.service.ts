import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarProxyService {

  constructor(private httpClient:HttpClient) { }

  getAllCars():any {
    let fullApiUrl:string = environment.serverApiUrl + '/api/Car';
    return this.httpClient.get(fullApiUrl);
  }
}
