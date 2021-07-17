import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homenews',
  templateUrl: './homenews.component.html',
  styleUrls: ['./homenews.component.css']
})
export class HomenewsComponent implements OnInit {

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
