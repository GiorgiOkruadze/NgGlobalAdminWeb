export class LogInUser {
    public id!:number;
    public userName!:string;
    public email!:string;
    public jwt!:string;


    constructor(id:number,name:string,email:string,jwt:string){
        this.id = id;
        this.userName = name;
        this.email = email;
        this.jwt = jwt;
    }
}