import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { LogInUser } from '../models/logInUser.model';
import { UserAdd } from '../state_manager/user.actions';
import { map } from 'rxjs';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  static logInUser: LogInUser = null as any;

  constructor(private store: Store<{ user: LogInUser }>, private httpClient:HttpClient) {
    store.pipe(select('users' as any)).subscribe((value: any) => {
      if (value != null) {
        UserService.logInUser = value;
      } else if(localStorage['logInUser'] != undefined){
        UserService.logInUser = JSON.parse(localStorage['logInUser']) as LogInUser;
        store.dispatch(new UserAdd(UserService.logInUser));
      }
    });
  }

  getUserStore():any{
    return this.store.pipe(select('users' as any));
  }

  addUserToStore(user:LogInUser){
    UserService.logInUser = user;
    this.store.dispatch(new UserAdd(user))
    localStorage['logInUser'] = JSON.stringify(user);
  }

  logIn(logInData:any):any{
    let fullApiUrl: string = `${environment.serverApiUrl}/api/User/LogIn`;
    var headers = new HttpHeaders({'content-type':'application/json'});
    return this.httpClient.post(fullApiUrl,logInData,{headers:headers}).pipe(map((response:any) =>{
      var jwtResp:any = jwt_decode(response.jwt);
      var data = new LogInUser(jwtResp.nameid,jwtResp.unique_name,jwtResp.email,response.jwt);
      this.addUserToStore(data);
      return data;
    }));
  }
}
