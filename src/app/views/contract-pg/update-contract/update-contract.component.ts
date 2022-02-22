import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ContractService } from 'src/app/services/contract.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-contract',
  templateUrl: './update-contract.component.html',
  styleUrls: ['./update-contract.component.css']
})
export class UpdateContractComponent implements OnInit {
  usersWithSameEmail: any = []
  currentContract!:any;
  constructor(private userService: UserService,
    private contractService: ContractService,
    private activatedRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:Params) => {
      this.contractService.getContractById(params['contractId']).subscribe((response:any) => {
        this.currentContract = response;
      })
    })
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
    if(form.value.userId==undefined){
      form.value.userId = this.currentContract.userId;
    }
   this.contractService.updateContractService(form.value).subscribe((response:any) => {
      if(response){
        this.router.navigate(["/contracts"])
      }
   });
  }
}
