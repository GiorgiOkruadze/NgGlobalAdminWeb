import { Translation } from "./translation.model";

export class Car {
    public carId:any;
    public arrivesIn!: string;
    public manufacturer!: string;
    public mile!: number;
    public model!: string
    public price!: number
    public sellerPhoneNumber!: string;
    public userId!: number
    public vinCode!: string
    public year!: string;
    public driveTrainTranslations!: Translation[];
    public fuelTypeTranslations!: Translation[];
    public transmissionTranslations!: Translation[]

    constructor(
        arrivesIn:string,
        manufacturer:string,
        model:string,
        mile:number,
        price:number,
        sellerPhoneNumber:string,
        vinCode:string,
        year:string,
        driveTrainTranslations:Translation[],
        fuelTypeTranslations:Translation[],
        transmissionTranslations:Translation[]){
            this.arrivesIn = arrivesIn;
            this.manufacturer = manufacturer;
            this.model = model;
            this.mile = mile;
            this.price = price;
            this.sellerPhoneNumber = sellerPhoneNumber;
            this.vinCode = vinCode;
            this.year = year;
            this.driveTrainTranslations = driveTrainTranslations;
            this.fuelTypeTranslations = fuelTypeTranslations;
            this.transmissionTranslations = transmissionTranslations;
        }
}