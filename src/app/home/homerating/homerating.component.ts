import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homerating',
  templateUrl: './homerating.component.html',
  styleUrls: ['./homerating.component.css']
})
export class HomeratingComponent implements OnInit {

  customOptions: any = {
    loop: true,
    margin: 10,
    autoplay:true,
    responsiveClass: true,
    navText: [],
    dots:false,
    responsive: {
      0: {
       items: 3
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
