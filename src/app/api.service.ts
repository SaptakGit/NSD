import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  redirectUrl: string;
  baseUrl:string = "http://localhost/NSD/php";
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(private httpClient : HttpClient) { }

  public userlogin(mobile, password) {
     //alert(mobile);
     //alert(password);
    return this.httpClient.post<any>(this.baseUrl + '/login.php', { mobile, password })
    .pipe(map(Users => {
    // alert(JSON.stringify(Users));
    this.setToken(Users[0].phone);
   

    this.getLoggedInName.emit(true);
    return Users;
    }));
  }

  public userregistration(name,phone,email,pwd) {
    return this.httpClient.post<any>(this.baseUrl + '/register.php', { name, phone, email, pwd })
    .pipe(map(Users => {
    this.setToken(phone);
    this.getLoggedInName.emit(true);
    return Users;
    }));
  }

  public payment_ott(type) {
    var userphone:string = this.getToken();
     return this.httpClient.post<any>(this.baseUrl + '/payment.php', { type,userphone });
  }

  public usersubscribe(netwood_phone,games_phone,starhunt_phone) {
    
    var primary:string=this.getToken();
	
    var netwoodphone:string = netwood_phone;
    var gamesphone:string = games_phone;
    var starhuntphone:string = starhunt_phone;
	
	var count:number=0;
    if(primary==netwoodphone) count++;
    if(primary==gamesphone) count++;
    if(primary==starhuntphone) count++;
    if(count==0)
		alert("subscribe atleast one primary numbr");
    else 
		return this.httpClient.post<any>(this.baseUrl + '/usersubscription.php', { primary,netwoodphone,gamesphone,starhuntphone }); 
	 
  }
  
  
  public checkOtt(ott){
	var loggedNo:string=this.getToken();
	var type:string = ott;
	return this.httpClient.post<any>(this.baseUrl + '/loginaccess.php', { type,loggedNo }); 
  }
  
  public checkGame(game){
	var loggedNo:string=this.getToken();
	var type:string = game;
	return this.httpClient.post<any>(this.baseUrl + '/loginaccess.php', { type,loggedNo }); 
  }
  
  public checkStarhunt(star){
	var loggedNo:string=this.getToken();
	var type:string = star;
	return this.httpClient.post<any>(this.baseUrl + '/loginaccess.php', { type,loggedNo }); 
  }

	

  //token
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  deleteToken() {
    localStorage.removeItem('token');
  }
  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true
    }
    return false;
  }
  
  /* list:any;
    this.taskapi.usersubscribe().subscribe((response)=>{
         this.list = response;
        //here you will get the response
		console.warn(list);
    }); */
}
