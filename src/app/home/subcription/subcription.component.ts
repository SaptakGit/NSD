import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm, FormControl} from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router,ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-subcription',
  templateUrl: './subcription.component.html',
  styleUrls: ['./subcription.component.css']
})
export class SubcriptionComponent implements OnInit {
  angForm: FormGroup;
  constructor(private _Activatedroute:ActivatedRoute,private fb: FormBuilder,private dataService: ApiService,private router:Router) {
    this.angForm = this.fb.group({
      netwood_email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
      //netwood_phone: ['', Validators.required],
     
    });


   }
  sub;
  id;
  prod;
  data;
  ngOnInit(): void {
    //console.log(this._Activatedroute.snapshot.params);
    this.data=this._Activatedroute.snapshot.params.username;
    

    this.angForm = new FormGroup({
      netwood_email: new FormControl(this.data),
      newogames_email: new FormControl(this.data),
      starhunt_email: new FormControl(this.data),
   });

  }

  subscribe(angForm1) 
    {
      this.dataService.usersubscribe(angForm1.netwood_email,angForm1.newogames_email,angForm1.starhunt_email).subscribe((result)=>{
      if(result.code==1){
		alert('User Subscription Successfully Completed!');
		const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '';
        this.router.navigate([redirect]);
      }
      else{
		alert('User Subscription Failed!');
        const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/subcription/'+result.username;
        this.router.navigate([redirect]);
      }
    })
    }

    get netwood_email() { return this.angForm.get('netwood_phone'); }

}
/*function subscribe(angForm1: any) {
  throw new Error('Function not implemented.');
}*/

