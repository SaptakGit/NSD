import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
//import * as $ from 'jquery';
//import 'jquery';


@Component({
  selector: 'app-ottheader',
  templateUrl: './ottheader.component.html',
  styleUrls: ['./ottheader.component.css']
})
export class OttheaderComponent implements OnInit {

  openNav_search() {
    document.getElementById("mySidenav-search").style.width = "100%";
    //(<any>$("#mySidenav-search")).show();
  }

  closeNav_search() {
    document.getElementById("mySidenav-search").style.width = "0";
    //(<any>$("#mySidenav-search")).hide();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
