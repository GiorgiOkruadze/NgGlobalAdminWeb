import { Component, OnInit } from '@angular/core';
import { CarProxyService } from 'src/app/services/car-proxy.service';

@Component({
  selector: 'app-car-pg',
  templateUrl: './car-pg.component.html',
  styleUrls: ['./car-pg.component.css']
})
export class CarPgComponent implements OnInit {
  displayedColumns: string[] = ['vinCode', 'image', 'manufacturer', 'model', 'mile', 'year', 'price', 'sellerPhoneNumber', 'carImages','update', 'delete'];
  dataSource: [] = [];

  constructor(private carProxy: CarProxyService) { }

  ngOnInit(): void {
    this.getAllCars();
  }

  getAllCars() {
    this.carProxy.getAllCars().subscribe((response: any) => {
      this.dataSource = response;
    });
  }

  getCarMainImage(images: any) {
    var result = images.find((o: any) => o.isMainImage)
    if(result!=null){
      return result.imageName;
    }
    return '../../../assets/default-image.png'
  }

  onDeleteCarBtnClick(carId: any) {
    this.carProxy.deleteCarById(carId).subscribe((response: any) => {
      if (response) {
        this.getAllCars();
      }
    })
  }
}
