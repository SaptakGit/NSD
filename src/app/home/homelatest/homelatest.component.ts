import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homelatest',
  templateUrl: './homelatest.component.html',
  styleUrls: ['./homelatest.component.css']
})
export class HomelatestComponent implements OnInit {

  customOptions: any = {
    loop: true,
    margin: 10,
    autoplay:true,
    responsiveClass: true,
    navText: [],
    dots:false,
    responsive: {
      0: {
       items: 4
     },
      480: {
       items: 3
     },
      940: {
       items: 3
     }
    },
   nav: false
  };

  constructor() { };

  ngOnInit(): void {
  };

}
