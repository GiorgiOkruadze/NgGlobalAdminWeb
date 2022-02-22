import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-new-admin',
  templateUrl: './add-new-admin.component.html',
  styleUrls: ['./add-new-admin.component.css']
})
export class AddNewAdminComponent implements OnInit {
  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.userService.registerAdmin(form.value).subscribe((response:any) => {
      if(response>0){
        this.router.navigate(["/admins"]);
      }
    })
  }
}
