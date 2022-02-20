import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Car } from 'src/app/models/car.model';
import { Translation } from 'src/app/models/translation.model';
import { CarProxyService } from 'src/app/services/car-proxy.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  constructor(private carProxy:CarProxyService,private router:Router ) { }

  ngOnInit(): void {
  }


  onSubmit(form:NgForm){
    let formValue = form.value;
    console.log(formValue)
    var car:Car = new Car(
      formValue.arrivesIn,
      formValue.manufacturer,
      formValue.model,
      formValue.mile,
      formValue.price,
      formValue.sellerPhoneNumber,
      formValue.vinCode,
      formValue.year,
      [
        new Translation(1,formValue.driveTrainGeo),
        new Translation(2,formValue.driveTrainEng)
      ],
      [
        new Translation(1,formValue.fuelTypeGeo),
        new Translation(2,formValue.fuelTypeEng)
      ],
      [
        new Translation(1,formValue.transmissionGeo),
        new Translation(2,formValue.transmissionEng)
      ],
    );
    console.log(car);
    this.carProxy.addNewCar(car).subscribe((response:any) => {
      if(response){
        this.router.navigate(["/"]);
      }
    })
  }

}
