import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
    this.angForm = this.fb.group({
      // email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
      mobile: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  postdata(angForm1)
  { //alert(angForm1.value.mobile); //deb
    this.dataService.userlogin(angForm1.value.mobile,angForm1.value.password)
    .pipe(first())
    .subscribe(
    data => {
		//alert(JSON.stringify(data));
		//alert(data[0].name);
		if(data[0].newo_user_id > 0){
			const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/'; 
			this.router.navigate([redirect]);
		}
		else{
			const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/pricing'; 
			this.router.navigate([redirect]);
		}
    },
    error => {
      alert("User name or password is incorrect")
    });
  }
  get email() { return this.angForm.get('email'); }
  get password() { return this.angForm.get('password'); }

}
