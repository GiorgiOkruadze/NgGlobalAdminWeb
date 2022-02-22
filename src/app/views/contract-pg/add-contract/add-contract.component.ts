import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ContractService } from 'src/app/services/contract.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.css']
})
export class AddContractComponent implements OnInit {
  usersWithSameEmail: any = []
  constructor(private userService: UserService,
    private contractService: ContractService,
    private router:Router) { }

  ngOnInit(): void {
  }

  onSelectUserByEmailInpChange(event: Event) {
    var inp: any = event.target as HTMLInputElement;
    console.log(inp)
    if (inp.value.includes("@") && inp.value.length > 4) {
      this.userService.getUserByEmail(inp.value).subscribe((response: any) => {
        this.usersWithSameEmail = response;
      }, (err: any) => {
        console.log(err);
      })
    }
  }

  onSubmit(form: NgForm) {
   this.contractService.addNewContract(form.value).subscribe((response:any) => {
      if(response){
        this.router.navigate(["/contracts"])
      }
   });
  }
}
