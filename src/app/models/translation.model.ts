export class Translation {
    public languageId!:number;
    public text!:string;

    constructor(languageId:number,text:string){
        this.languageId = languageId;
        this.text = text;
    }
}