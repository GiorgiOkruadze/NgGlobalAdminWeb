import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-pg',
  templateUrl: './user-pg.component.html',
  styleUrls: ['./user-pg.component.css']
})
export class UserPgComponent implements OnInit {
  displayedColumns: string[] = ['userName', 'email', 'carCount', 'contractCount',"UserStatus"];
  dataSource: [] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllAdmins();
  }

  getAllAdmins() {
   this.userService.getAllAdmins().subscribe((response:any) => {
     this.dataSource = response;
   })
  }

  public getTrText(languageId: any,translations: []): any {
    var currentTr:any =  translations.find((o:any) => o.languageId == languageId);
    
    if(currentTr==null)
      return "";

    return currentTr.text;
  }

  onUserStatusChange(adminEmail: any) {
    this.userService.changeUserStatus(adminEmail).subscribe((response:any) => {
      if(response){
        this.getAllAdmins();
      }
    })
  }
}
