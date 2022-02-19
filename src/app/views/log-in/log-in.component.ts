import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  hide:boolean = true;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.userService.logIn(form.value).subscribe((response:any)=>{
      console.log(response);
    })
  }
}
