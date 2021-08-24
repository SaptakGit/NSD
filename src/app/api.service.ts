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

  public userlogin(email, password) {
     //alert(mobile);
     //alert(password);
    return this.httpClient.post<any>(this.baseUrl + '/login.php', { email, password })
    .pipe(map(Users => {
    // alert(JSON.stringify(Users));
    this.setToken(Users[0].email);
   

    this.getLoggedInName.emit(true);
    return Users;
    }));
  }

  public userregistration(name,phone,email,pwd) {
    return this.httpClient.post<any>(this.baseUrl + '/register.php', { name, phone, email, pwd })
    .pipe(map(Users => {
    this.setToken(email);
    this.getLoggedInName.emit(true);
    return Users;
    }));
  }

  public payment_ott(type) {
    var useremail:string = this.getToken();
	//alert(useremail);
     return this.httpClient.post<any>(this.baseUrl + '/payment.php', { type,useremail });
  }

  public usersubscribe(netwood_email,games_email,starhunt_email) {
    
    var primary:string=this.getToken();
	
    var netwoodemail:string = netwood_email;
    var gamesemail:string = games_email;
    var starhuntemail:string = starhunt_email;
	
	var count:number=0;
    if(primary==netwoodemail) count++;
    if(primary==gamesemail) count++;
    if(primary==starhuntemail) count++;
    if(count==0)
		alert("subscribe atleast one primary numbr");
    else 
		return this.httpClient.post<any>(this.baseUrl + '/usersubscription.php', { primary,netwoodemail,gamesemail,starhuntemail }); 
	 
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


    //rohit
    public getApplyfor(applicantage,action){
      // alert(applicantage);
      var applicant_age:string = applicantage;
      var action_type:string=action;
      // alert(applicant_age);
      return this.httpClient.get<any>(this.baseUrl +'/audition_phase.php', {params:{applicant_age,action_type}});

    }

    //audition form data
    public postAuditionForm(action,name,phone1,whatsapp_no,email,gender,dob,years,pin,address,state,guardian,guardian_relation,guardian_mobile,aud_type,applyFor,applyValue,phase,venuename,venuDate){
      // console.log(venueadd);
      
      // console.log(venuDate);
      var name:any=name;
      var phone1:any=phone1;
      var whatsapp_no:any=whatsapp_no;
      var email:any=email;
      var gender:any=gender;
      var dob:any=dob;
      var years:any=years;
      var pin:any=pin;
      var address:any=address;
      var state:any=state;
      var guardian:any=guardian;
      var guardian_relation:any=guardian_relation;
      var guardian_mobile:any=guardian_mobile;
      var aud_type:any=aud_type;
      var applyFor:any=applyFor;
      var applyValue:any=applyValue;
      var phase:any=phase;
      var venuename:any=venuename;
      var venuDate:any=venuDate;
 


     return this.httpClient.post<any>(this.baseUrl+'/audition_form_submit.php',{action,name,phone1,whatsapp_no,email,gender,dob,years,pin,address,state,guardian,guardian_relation,guardian_mobile,aud_type,applyFor,applyValue,phase,venuename,venuDate})

    // return this.httpClient.post<any>(this.baseUrl+'/audition_form_submit.php',{action:Text,name:Text,phone1:Text,whatsapp_no:Text,email:Text,gender:Text,dob:Text,years:Text,pin:Text,address:Text,state:Text,guardian:Text,guardian_relation:Text,guardian_mobile:Text,applyFor:Text,applyValue:Text,phase:Text,venuename:Text,venuDate:Text})
    }

   
    //
}
