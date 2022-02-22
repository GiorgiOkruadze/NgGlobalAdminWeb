import { ReadVarExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CarProxyService } from 'src/app/services/car-proxy.service';
import { ImageService } from 'src/app/services/image-proxy.service';

@Component({
  selector: 'app-upload-car-image',
  templateUrl: './upload-car-image.component.html',
  styleUrls: ['./upload-car-image.component.css']
})
export class UploadCarImageComponent implements OnInit {
  currentCar:any = undefined;
  constructor(private activateRoute:ActivatedRoute,
    private carProxy:CarProxyService,
    private imageProxy:ImageService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params:Params) => {
      var carId = params['carId'];
      this.getCurrentCar(carId);
    });
  }

  getCurrentCar(carId:any){
    this.carProxy.getCarById(carId).subscribe((response:any) => {
      this.currentCar = response;
    });
  }


  onUploadImageBtnClick(uploadImage:HTMLInputElement){
    uploadImage.click();
  }

  onUploadInpChange(event:Event){
    var inp:any = event.target as HTMLInputElement;
    this.imageProxy.uploadImageForCare(inp.files[0],this.currentCar.id).subscribe((response:any)=>{
      console.log(response);
      if(response){
        this.getCurrentCar(this.currentCar.id);
      }
    })
  }

  onSetAsMainImageBtnClick(imageId:number){
    this.imageProxy.setAsMainImageForCar(imageId,this.currentCar.id).subscribe((response:any)=>{
      if(response){
        this.getCurrentCar(this.currentCar.id);
      }
    })
  }

  onDeleteImageBtnClick(id:number,carId:number){
    this.imageProxy.deleteImage(carId,id).subscribe((response:any) => {
      if(response){
        this.getCurrentCar(this.currentCar.id);
      }
    })
  }
}
