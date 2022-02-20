import { Translation } from "./translation.model";

export class CompanyInfo {
    public id:any;
    public email!:string;
    public phoneNumber!:string;
    public addressTranslations!:Translation[];
    public viber!:string;
    public facebook!:string;
    public whatsApp!:string;
    
    constructor(email:string,phone:string,address:Translation[], viber:string, facebook:string, whatsApp:string){
        this.email = email;
        this.phoneNumber = phone;
        this.addressTranslations = address;
        this.viber = viber;
        this.facebook = facebook;
        this.whatsApp = whatsApp;
    }
}