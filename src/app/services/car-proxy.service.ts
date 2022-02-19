import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Car } from '../models/car.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CarProxyService {

  constructor(private httpClient: HttpClient) { }

  getAllCars(): any {
    let fullApiUrl: string = environment.serverApiUrl + '/api/Car';
    return this.httpClient.get(fullApiUrl);
  }

  getCarById(carId:number):any{
    let fullApiUrl: string = `${environment.serverApiUrl}/api/Car/${carId}`;
    return this.httpClient.get(fullApiUrl);
  }

  deleteCarById(carId: any): any {
    var jwt: string = UserService.logInUser.jwt;
    let fullApiUrl: string = `${environment.serverApiUrl}/api/Car/${carId}`;
    let headers = new HttpHeaders({'content-type':'application/json'})
    .set('Authorization', `Bearer ${jwt}`);
    
    return this.httpClient.delete(fullApiUrl, { headers: headers });
  }

  addNewCar(carModel:Car):any{
    carModel.userId = Number(UserService.logInUser.id);
    var jwt: string = UserService.logInUser.jwt;
    let fullApiUrl: string = environment.serverApiUrl + '/api/Car';
    let headers = new HttpHeaders({'content-type':'application/json'})
    .set('Authorization', `Bearer ${jwt}`);
    return this.httpClient.post(fullApiUrl,carModel,{headers:headers});
  }

  updateNewCar(carModel:Car):any{
    carModel.userId = Number(UserService.logInUser.id);
    var jwt: string = UserService.logInUser.jwt;
    let fullApiUrl: string = environment.serverApiUrl + '/api/Car';
    let headers = new HttpHeaders({'content-type':'application/json'})
    .set('Authorization', `Bearer ${jwt}`);
    return this.httpClient.put(fullApiUrl,carModel,{headers:headers});
  }
}
