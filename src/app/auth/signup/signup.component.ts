import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  postdata(angForm1) 
  {
    //console.warn(angForm1.value);
    this.dataService.userregistration(angForm1.value.name,angForm1.value.phone,angForm1.value.email,angForm1.value.password)
    .pipe(first())
    .subscribe(
    data => {
      this.router.navigate(['home']); 
    },

    error => {
    });
  }

  get email() { return this.angForm.get('email'); }
  get password() { return this.angForm.get('password'); }
  get name() { return this.angForm.get('name'); }
  get phone() { return this.angForm.get('phone'); }

}
