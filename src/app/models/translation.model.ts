export class Translation {
    public languageId!:number;
    public text!:string
    public id!:any;

    constructor(languageId:number,text:string,id:any=null){
        this.languageId = languageId;
        this.text = text;
        if(id !=null)
            this.id = id;
    }
}