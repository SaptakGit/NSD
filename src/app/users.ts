export class Users {
    public Id: number;
    public name: string;
    public phone:string;
    public email:string;
    public pwd:string;   
    
    constructor(Id:number,name: string,phone:string,email:string,pwd:string) {
    this.Id = Id;
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.pwd = pwd;    
    }
    }