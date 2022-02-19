import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { LoadingService } from './interceptors/loading.service';
import { LogInUser } from './models/logInUser.model';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  logInUser:LogInUser = null as any;
  loading: boolean = false;

  constructor(private userService:UserService,private _loading: LoadingService){
    this.userService.getUserStore().subscribe((value:any)=>{
      this.logInUser = value;
    })
  }
  
  ngOnInit(): void {
    this.listenToLoading();
  }

  listenToLoading(): void {
    this._loading.loadingSub
    .pipe(delay(0))
      .subscribe((loading) => {
        this.loading = loading;
      });
  }
}
