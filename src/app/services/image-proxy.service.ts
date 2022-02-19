import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpClient: HttpClient) { }

  uploadImageForCare(file: any, carId: number): any {
    let fullApiUrl: string = `${environment.serverApiUrl}/api/Car/UploadCarImage`;
    var jwt: string = UserService.logInUser.jwt;
    let headers = new HttpHeaders({ 'enctype': 'multipart/form-data' })
      .set('Authorization', `Bearer ${jwt}`)

    var formData: FormData = new FormData();
    formData.append('image', file, file.name);
    formData.append('carId', carId.toString())

    return this.httpClient.post(fullApiUrl, formData, { headers: headers });
  }

  setAsMainImageForCar(imageId: number, carId: number): any {
    let fullApiUrl: string = `${environment.serverApiUrl}/api/Image/SetAsMain`;
    var jwt: string = UserService.logInUser.jwt;
    let headers = new HttpHeaders({ 'content-type': 'application/json' })
      .set('Authorization', `Bearer ${jwt}`);

    var setAsMainImageItem = { imageId: imageId, carId: carId };
    return this.httpClient.post(fullApiUrl, setAsMainImageItem, { headers: headers });
  }
}
