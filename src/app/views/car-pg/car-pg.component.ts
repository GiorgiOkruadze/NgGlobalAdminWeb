import { Component, OnInit } from '@angular/core';
import { CarProxyService } from 'src/app/services/car-proxy.service';

@Component({
  selector: 'app-car-pg',
  templateUrl: './car-pg.component.html',
  styleUrls: ['./car-pg.component.css']
})
export class CarPgComponent implements OnInit {
  displayedColumns: string[] = ['vinCode','image', 'manufacturer', 'model', 'year','sellerPhoneNumber','update','delete'];
  dataSource:[] = [];

  constructor(private carProxy:CarProxyService) { }

  ngOnInit(): void {
    this.getAllCars();
  }

  getAllCars(){
    this.carProxy.getAllCars().subscribe((response:any) => {
      this.dataSource = response;
      console.log(this.dataSource)
    });
  }

  getCarMainImage(images:any){
    return images.find((o:any) => o.isMainImage).imageName
  }
}
