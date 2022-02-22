import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Car } from 'src/app/models/car.model';
import { Translation } from 'src/app/models/translation.model';
import { CarProxyService } from 'src/app/services/car-proxy.service';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent implements OnInit {
  currentCarId!:number;
  currentCar!: any;
  formTranslationModel!:any;

  constructor(private carProxy: CarProxyService,
    private router: Router,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params: Params) => {
      this.currentCarId = params['carId'];
      this.carProxy.getCarById(this.currentCarId).subscribe((response: any) => {
        this.currentCar = response;
        this.generateFormTranslationModel(response);
      })
    })
  }

  public getTr(translations: [], languageId: any): any {
    var currentTr:any =  translations.find((o:any) => o.languageId == languageId);
    
    if(currentTr==null)
      return "";

    return currentTr;
  }

  
  public generateFormTranslationModel(car:any): any {
    this.formTranslationModel = {
      driveTrainGeo:this.getTr(car.driveTrainTranslations,2),
      driveTrainEng:this.getTr(car.driveTrainTranslations,1),
      fuelTypeGeo:this.getTr(car.fuelTypeTranslations,2),
      fuelTypeEng:this.getTr(car.fuelTypeTranslations,1),
      transmissionGeo:this.getTr(car.transmissionTranslations,2),
      transmissionEng:this.getTr(car.transmissionTranslations,1)
    }
  }

  onSubmit(form: NgForm) {
    let formData = this.formTranslationModel;
    let formValue = form.value;
    var car: Car = new Car(
      formValue.arrivesIn,
      formValue.manufacturer,
      formValue.model,
      formValue.mile,
      formValue.price,
      formValue.sellerPhoneNumber,
      formValue.vinCode,
      formValue.year,
      [
        new Translation(1, formValue.driveTrainGeo,formData.driveTrainGeo.id),
        new Translation(2, formValue.driveTrainEng,formData.driveTrainEng.id)
      ],
      [
        new Translation(1, formValue.fuelTypeGeo,formData.fuelTypeGeo.id),
        new Translation(2, formValue.fuelTypeEng,formData.fuelTypeEng.id)
      ],
      [
        new Translation(1, formValue.transmissionGeo,formData.transmissionGeo.id),
        new Translation(2, formValue.transmissionEng,formData.transmissionEng.id)
      ],
    );
    car.carId = this.currentCarId;
    console.log(car);
    this.carProxy.updateNewCar(car).subscribe((response: any) => {
      if (response) {
        this.router.navigate(["/"]);
      }
    })
  }
}
