import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-neworatingdetail',
  templateUrl: './neworatingdetail.component.html',
  styleUrls: ['./neworatingdetail.component.css']
})
export class NeworatingdetailComponent implements OnInit {

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
    $(document).ready(function() {
      //alert('I am Called From jQuery');//select-native-id
      $("#select-native-id").change(function(){
        if($("#select-native-id").val()!=0){
          $("#blue-div-id").show();
          $("#rt-value-main-id").show();
          $("#grey-div-id").hide();
          $("#rate-id").hide();
          $("#top-sp").html($("#select-native-id").val());
      }
      else{
          $("#blue-div-id").hide();
          $("#rt-value-main-id").hide();
          $("#grey-div-id").show();
          $("#rate-id").show();
          $("#top-sp").html('');
      }
      });
    });
  };

}
