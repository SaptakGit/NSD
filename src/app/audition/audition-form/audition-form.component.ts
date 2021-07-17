import { Component, OnInit } from '@angular/core';
import { OwlOptions } from "ngx-owl-carousel-o"; 
import { AuditionheaderComponent } from "../auditionheader/auditionheader.component";
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BsDatepickerConfig } from "ngx-bootstrap/datepicker"; //for datepicker changing

import * as $ from 'jquery';



@Component({
  selector: 'app-audition-form',
  templateUrl: './audition-form.component.html',
  styleUrls: ['./audition-form.component.css'],
  
  
})
export class AuditionFormComponent implements OnInit {
  
  // name = 'Angular';
  //  optn: string[] = ['Male', 'Female', 'Other'];
  //  gendervalue = '';



  datepickerConfig: Partial<BsDatepickerConfig>   //for datepicker


  angAuditionForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phone1: new FormControl('', Validators.required),
    whatsapp_no: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.minLength(1), Validators.email]),
    gender: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    pin: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    guardian: new FormControl('', Validators.required),
    guardian_relation: new FormControl('', Validators.required),
    guardian_mobile: new FormControl('', Validators.required),
  })


  // validation checking
  get name() { return this.angAuditionForm.get('name') }
  get phone1() { return this.angAuditionForm.get('phone1') }
  get whatsapp_no() { return this.angAuditionForm.get('whatsapp_no') }
  get email() { return this.angAuditionForm.get('email') }
  get gender() { return this.angAuditionForm.get('gender') }
  get dob() { return this.angAuditionForm.get('dob') }
  get age() { return this.angAuditionForm.get('age') }
  get pin() { return this.angAuditionForm.get('pin') }
  get address() { return this.angAuditionForm.get('address') }
  get state() { return this.angAuditionForm.get('state') }
  get guardian() { return this.angAuditionForm.get('guardian') }
  get guardian_relation() { return this.angAuditionForm.get('guardian_relation') }
  get guardian_mobile() { return this.angAuditionForm.get('guardian_mobile') }




  constructor(private http: HttpClient) {//private fb: FormBuilder,private dataService: ApiService,private router:Router
    this.datepickerConfig = Object.assign({}, {
      containerClass: 'theme-dark-blue',//for datepicker
      dateInputFormat: 'DD/MM/YYYY'
    })

    $(document).ready(() => {
      $("#applyCustom .select-items").html('<div>Please enter Date of Birth first</div>');
      $("#venueDateShow .select-items").html('<div>Please select Venue first</div>');
    });
    

  }

 
  ngOnInit(): void { }
  
  //for saving registration form data in database
  auditiondata(angAuditionForm) {
    console.warn(angAuditionForm);
  }
  // ----
 // find age & eligibility
 
 //minAge = 6;
 //minorAge = 13;
 //maxAge = 55;
 
 findAge() {
  var dob = (<HTMLInputElement>document.getElementById('dob')).value;
  console.log(dob);
  var userBirthYear = parseInt(dob.substring(6));
  var currentYear = (new Date).getFullYear();
  var ageEligible = (currentYear - userBirthYear);
  // console.log(typeof ageEligible); //number type

  var minAge = 6;
  var maxAge = 55;
  var minorAge = 13;


  if (ageEligible <= minorAge && ageEligible >= minAge) {//checked
    $("#below_age").val(1);
    $("#years").val(ageEligible);
    // $('#age').val('You Are Eligible, Your Age is ' + ageEligible);
    $('#age').val('Your age is '+ageEligible+' and  your age Below 18 so fill-up Parent Details');
    $("#guardianInfo").show('slow');//checked
    // $("#guardianInfo").hide('slow');
    $("#parent_detail").show('slow');
    $("#relation").show('slow');
    $("#address_guardian").show('slow');
    $("#state_guardian").show('slow');
    $("#mobile_guardian").show('slow');
    //--
    $("#parent").attr('required','required');
    $("#parent").prop('disabled',false);
    $("#guardian_rel").attr('required','required');
   $("#guardian_add").attr('required','required');
   $("#guardian_st").attr('required','required');
   $("#guardian_phone").attr('required','required');
   $("#submit").attr("disabled");
  
   
  }
  else if (ageEligible <= maxAge && ageEligible >= minAge) { //checked
    $("#below_age").val(1);
    $("#years").val(ageEligible);
    $('#age').val('You Are Eligible, Your Age is ' + ageEligible);
    $("#guardianInfo").hide('slow');
    $("#parent_detail").hide('slow');
    $("#relation").hide('slow');
    $("#address_guardian").hide('slow');
    $("#state_guardian").hide('slow');
    $("#mobile_guardian").hide('slow');
    $("#parent").removeAttr("required");
    $("#parent").prop("disabled",true);
    $("#guardian_rel").removeAttr("required");
    $("#guardian_add").removeAttr("required");
    $("#guardian_st").removeAttr("required");
    $("#guardian_phone").removeAttr("required");
    $("#submit").attr("disabled");
    // $("#submit").attr("disabled", false);
    
  }
  else if (ageEligible < minAge) { //checked
    $("#below_age").val(2);
    $('#age').val('Your age is ' + ageEligible + ' You Are Not Eligible');
    $("#guardianInfo").hide('slow');
    $("#guardianInfo").prop('disabled', true);
    $("#parent_detail").hide('slow');
    $("#relation").hide('slow');
    $("#address_guardian").hide('slow');
    $("#state_guardian").hide('slow');
    $("#mobile_guardian").hide('slow');
    $("#parent").removeAttr("required");
    $("#parent").prop("disabled",true);
    $("#guardian_rel").removeAttr("required");
    $("#guardian_add").removeAttr("required");
    $("#guardian_st").removeAttr("required");
    $("#guardian_phone").removeAttr("required");
    $("#submit").attr("disabled");
    // $("#submit").attr("disabled", true);
    
  
  
  }
  else if (ageEligible > maxAge) {//checked
    $("#below_age").val(2);
    $('#age').val('Your age is ' + ageEligible + ' You Are Not Eligible');
    $("#guardianInfo").hide('slow');
    $("#guardianInfo").prop('disabled', true);
    $("#parent_detail").hide('slow');
    $("#relation").hide('slow');
    $("#address_guardian").hide('slow');
    $("#state_guardian").hide('slow');
    $("#mobile_guardian").hide('slow');
    $("#parent").removeAttr("required");
    $("#parent").prop("disabled",true);
    $("#guardian_rel").removeAttr("required");
    $("#guardian_add").removeAttr("required");
    $("#guardian_st").removeAttr("required");
    $("#guardian_phone").removeAttr("required");
    $("#submit").attr("disabled");
    
  }


  $('#years').val(ageEligible);


}
//end of age & eligibility

//function next button
  next_div() { 
    var minAge = 6;
    var maxAge = 55;
    var minorAge = 13;
    var years = $("#years").val();
 
    if (this.name.status == 'INVALID') {
      alert('Name field is required');
      $('#name').focus();
    }
    else if (this.phone1.status == 'INVALID') {
      $('#phone1').focus();
      alert('phone number field is required');
    }
    else if (this.whatsapp_no.status == 'INVALID') {
      $('#whatsapp_no').focus();
      alert('whatsapp number field is required');
    }
    else if (this.email.status == 'INVALID') {
      $('#email').focus();
      alert('email field is required');
    }
    else if (this.gender.status == 'INVALID') {
      $('#gender').focus();
      alert('gender field is required');
    }
    else if (this.dob.status == 'INVALID') {
      $('#dob').focus();
      alert('dob field is required');
    }
   

    else if (this.pin.status == 'INVALID') {
      $('#pin').focus();
      alert('pin field is required');
    }

    else if (this.address.status == 'INVALID') {
      $('#address').focus();
      alert('address field is required');
    }
    else if (this.state.status == 'INVALID') {
      $('#state').focus();
      alert('state field is required');
    }
    else if(years < minorAge && years > minAge){
          if (this.guardian.status == 'INVALID') {
            $('#guardian').focus();
            alert('guardian field is required');
          }
          else if (this.guardian_relation.status == 'INVALID') {
            $('#guardian_relation').focus();
            alert('guardian relation field is required');
          }
          else if (this.guardian_mobile.status == 'INVALID') {
            $('#guardian_mobile').focus();
            alert('guardian mobile field is required');
          }
    }
    else {
      document.getElementById("fist-div-registration").style.display = "none";
      document.getElementById("scand-div-registration").style.display = "block";
    }

  // another type
// if(years < minorAge && years >minAge){
//   //under 1st if

//       if (this.name.status == 'INVALID') {
//         alert('Name field is required');
//         $('#name').focus();
//       }
//       else if (this.phone1.status == 'INVALID') {
//         $('#phone1').focus();
//         alert('phone number field is required');
//       }
//       else if (this.whatsapp_no.status == 'INVALID') {
//         $('#whatsapp_no').focus();
//         alert('whatsapp number field is required');
//       }
//       else if (this.email.status == 'INVALID') {
//         $('#email').focus();
//         alert('email field is required');
//       }
//       else if (this.gender.status == 'INVALID') {
//         $('#gender').focus();
//         alert('gender field is required');
//       }
//       else if (this.dob.status == 'INVALID') {
//         $('#dob').focus();
//         alert('dob field is required');
//       }
    

//       else if (this.pin.status == 'INVALID') {
//         $('#pin').focus();
//         alert('pin field is required');
//       }

//       else if (this.address.status == 'INVALID') {
//         $('#address').focus();
//         alert('address field is required');
//       }
//       else if (this.state.status == 'INVALID') {
//         $('#state').focus();
//         alert('state field is required');
//       }else if (this.guardian.status == 'INVALID') {
//         $('#guardian').focus();
//         alert('guardian field is required');
//       }
//       else if (this.guardian_relation.status == 'INVALID') {
//         $('#guardian_relation').focus();
//         alert('guardian relation field is required');
//       }
//       else if (this.guardian_mobile.status == 'INVALID') {
//         $('#guardian_mobile').focus();
//         alert('guardian mobile field is required');
//       }else{
//         document.getElementById("fist-div-registration").style.display = "none";
//         document.getElementById("scand-div-registration").style.display = "block";
//       }
//   // ---------------
 



// }else {
//       if (this.name.status == 'INVALID') {
//         alert('Name field is required');
//         $('#name').focus();
//       }
//       else if (this.phone1.status == 'INVALID') {
//         $('#phone1').focus();
//         alert('phone number field is required');
//       }
//       else if (this.whatsapp_no.status == 'INVALID') {
//         $('#whatsapp_no').focus();
//         alert('whatsapp number field is required');
//       }
//       else if (this.email.status == 'INVALID') {
//         $('#email').focus();
//         alert('email field is required');
//       }
//       else if (this.gender.status == 'INVALID') {
//         $('#gender').focus();
//         alert('gender field is required');
//       }
//       else if (this.dob.status == 'INVALID') {
//         $('#dob').focus();
//         alert('dob field is required');
//       }
    

//       else if (this.pin.status == 'INVALID') {
//         $('#pin').focus();
//         alert('pin field is required');
//       }

//       else if (this.address.status == 'INVALID') {
//         $('#address').focus();
//         alert('address field is required');
//       }
//       else if (this.state.status == 'INVALID') {
//         $('#state').focus();
//         alert('state field is required');
//       }else {
//         document.getElementById("fist-div-registration").style.display = "none";
//         document.getElementById("scand-div-registration").style.display = "block";
//       }
// }

 
  }
// end of next button function

//function for previous button
  prev_div() {


    $("#fist-div-registration").show();
    $("#applyCustom .select-selected").html('Select');
    $("#applyCustom .select-items div").removeClass('same-as-selected');
    $("#applyValue").val('');
    $("#phase_div .select-selected").html('Select');
    $("#phase_div .select-items div").removeClass('same-as-selected');
    // $("#venue").removeAttr('required', true);
    $('.aud_type[value="Online"]').prop('checked', false);
    $('.aud_type[value="Physical"]').prop('checked', false);
    $('#apply_for_div').hide();
    $('#register_div').hide();
    $("#venue_div .select-selected").html('');
    $("#venueDateShow .select-selected").html('');
    $("#venuAdd").html('');
    $("#scand-div-registration").hide();
  };
 //end for previous button function



  //physical and online functionality
  changeAuditiontype(val) {
    var state = $("#state").val();
    $("#phase_div .select-selected").html('Select');
    $("#phase_div .select-items div").removeClass('same-as-selected');
    //Checking if audition type value is empty or not
    if (val == '') {
      var swal: ({
        title: "Warning!",
        text: "Audition type Not Selected",
        icon: "warning",
        button: "Okk",
      });
      return false;
    }
    // alert(state); 
    if (state == 'West Bengal' || state == 'Chhattisgarh' || state == 'Odisha' || state == 'Assam') {
      //alert('if');
      var divs = $("#phase_div .select-items div");

      for (var x = 0; x < divs.length; x++) {
        var div = divs[x];
        var content = div.innerHTML.trim();

        if (val == 'Online') {
          // if (content == 'Phase - 1' || content == 'Phase - 3') {
          if (content == 'Phase - 1' || content == 'Phase - 2' || content == 'Phase - 3') {
            div.style.display = 'none';
          } else {
            div.style.display = 'block';
          }
        } else {
          if (content == 'Phase - 1') {
            div.style.display = 'block';
          } else {
            div.style.display = 'none';
          }
        }
      }
    }
    else if (state == 'Madhya Pradesh') {
      //alert('else if');
      var divs = $("#phase_div .select-items div");

      for (var x = 0; x < divs.length; x++) {
        var div = divs[x];
        var content = div.innerHTML.trim();
        // alert(content);
        // if (content == 'Phase - 2') {

        if (val == 'Online') {

          if (content == 'Phase - 3') {
            div.style.display = 'block';
          } else {
            div.style.display = 'none';
          }
        } else {
          if (content == 'Phase - 2') {
            div.style.display = 'block';
          } else {
            div.style.display = 'none';
          }
        }
      }
    }
    else if (state == 'Uttarakhand' || state == 'Odisha') {
      //alert('else if');
      var divs = $("#phase_div .select-items div");

      for (var x = 0; x < divs.length; x++) {
        var div = divs[x];
        var content = div.innerHTML.trim();

        if (val == 'Online') {
          // if (content == 'Phase - 1' || content == 'Phase - 3') {
          if (content == 'Phase - 3') {
            div.style.display = 'block';
          } else {
            div.style.display = 'none';
          }
        } else {
          if (content == 'Phase - 2') {
            div.style.display = 'block';
          } else {
            div.style.display = 'none';
          }
        }
      }
    }
    else {

      var divs = $("#phase_div .select-items div");

      for (var x = 0; x < divs.length; x++) {
        var div = divs[x];
        var content = div.innerHTML.trim();
        if (content == 'Phase - 3') {
          div.style.display = 'block';
        } else {
          div.style.display = 'none';
        }


      }
    }
    $("#venue_div .select-selected").html('');
    $("#venueDateShow .select-selected").html('');
    $("#venuAdd").html('');
    if (val == 'Physical') {
      $('#txtAge').show('slow');
      $("#venue").attr('required', 'required');
      $("#venuData").attr('required', 'required');
      $('#onlineTag').hide('slow');
    } else {
      $('#txtAge').hide('slow');
      // $("#venue").removeAttr('required', true);
      $("#venue").removeAttr('required');
      // $("#venuData").removeAttr('required', true);
      $("#venuData").removeAttr('required');
      $('#onlineTag').show('slow');
    }
    if (val == 'Physical' || val == 'Online') {
      $('#apply_for_div').show();
      $('#register_div').show();
    }

    var years = $("#years").val();
    var minAge = 6;
    var maxAge = 55;
    var minorAge = 13;

    if (years <= minorAge && years >= minAge) {
      $.ajax({
        url: "<?=base_url();?>form/check_JuniorPost",
        method: "POST",
        dataType: "json",
        data: { years: years, val: val },
        success: function (data) {

          $("#applyFor").html(data.output);
          $("#applyCustom .select-items").html(data.selectDiv);
        }
      });
    }

    else {
      $.ajax({
        url: "<?=base_url();?>form/check_SeniorPost",
        method: "POST",
        dataType: "json",
        data: { years: years, val: val },
        success: function (data) {
          //alert(data.output);
          $("#applyFor").html(data.output);
          $("#applyCustom .select-items").html(data.selectDiv);
        }
      });
    }
  }

  // ----





  //owl carousel
  customOptions: any = {
    loop: true,
    margin: 10,
    autoplay: true,
    responsiveClass: true,
    navText: [],
    dots: false,
    responsive: {
      0: {
        items: 2
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


  customAchive: any = {
    loop: true,
    margin: 10,
    autoplay: true,
    responsiveClass: true,
    navText: [],
    dots: false,
    responsive: {
      0: {
        items: 4
      },
      480: {
        items: 1
      },
      940: {
        items: 4
      }
    },

    nav: false,
  };
  customSchedule: any = {
    loop: true,
    margin: 10,
    autoplay: true,
    responsiveClass: true,
    navText: [],
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      450: {
        items: 2
      },
      940: {
        items: 4
      }
    },

    nav: false,
  };
  customSponcers: any = {
    loop: true,
    margin: 10,
    autoplay: true,
    responsiveClass: true,
    navText: [],
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      450: {
        items: 2
      },
      940: {
        items: 2
      }
    },

    nav: false,
  };
  // end owl carousel
  // age dob

  addclass(id, value) {
    var new_src = "<?php  echo base_url(); ?>../assets/images/loader_form.gif";
    $("#response").attr("src", new_src);

    // appyleramounttadekhanorjonno(id);
    this.appyleramounttadekhanorjonno(id);
    $(this).addClass('same-as-selected');
    $("#applyCustom .select-selected").text(value);


    $('#pdfUploadjpg').val('');
    $('#applyCustom select option[value=' + id + ']').attr('selected', 'selected');
    $('#venue_div select option[value=""]').attr('selected', 'selected');
    $('#venueDateShow select option[value=""]').attr('selected', 'selected');

    $('#venue_div .select-items div').removeAttr('class');
    $('#venueDateShow .select-items').html('');

  }

  addclassDate(id, value) {
    $(this).addClass('same-as-selected');
    $("#venueDateShow .select-selected").text(value);
    $('#venueDateShow select option[value=' + id + ']').attr('selected', 'selected');
  }

  addclassVenue(id, value) {

    $(this).addClass('same-as-selected');
    $("#venue_div .select-selected").text(value);
    $('#venue_div select option[value=' + id + ']').attr('selected', 'selected');
    console.log(id);
    // venue_div(id);  // need this line
  }



  // //start dob works from here
  // $(function () {
  //   $('input[name="dob"]').daterangepicker({
  //     autoUpdateInput: false,
  //     singleDatePicker: true,
  //     showDropdowns: true,
  //     //showButtonPanel: false,
  //     minYear: 1901,
  //     maxYear: parseInt(moment().format('YYYY'), 10),
  //     locale: {
  //       //cancelLabel: 'Clear',
  //       format: 'DD-MM-YYYY'
  //     }
  // }, (start, end, label)=> {
  //   $(this.element).val(start.format('DD-MM-YYYY'));
  //   var years = moment().diff(start, 'years');
  //     if (years <= minorAge && years >= minAge) { ///1
  //       $("#below_age").val(0);
  //       $("#years").val(years);
  //       $('#age').val('Age Below 18 fill-up Parent Details');
  //       $("#guardianInfo").show('slow');
  //       $("#parent_detail").show('slow');
  //       $("#relation").show('slow');
  //       $("#address_guardian").show('slow');
  //       $("#state_guardian").show('slow');
  //       $("#mobile_guardian").show('slow');
  //       $("#parent").attr('required', 'required');
  //       $("#guardian_rel").attr('required', 'required');
  //       $("#guardian_add").attr('required', 'required');
  //       $("#guardian_st").attr('required', 'required');
  //       $("#guardian_phone").attr('required', 'required');
  //       $("#submit").attr("disabled", false);
  //     }
  //     else {

  //       if (years <= maxAge && years >= minAge) { ///2
  //         $("#below_age").val(1);
  //         $("#years").val(years);
  //         $('#age').val('You Are Eligible, Your Age is ' + years);
  //         $("#guardianInfo").hide('slow');
  //         $("#parent_detail").hide('slow');
  //         $("#relation").hide('slow');
  //         $("#address_guardian").hide('slow');
  //         $("#state_guardian").hide('slow');
  //         $("#mobile_guardian").hide('slow');
  //         $("#parent").removeAttr("required");
  //         $("#guardian_rel").removeAttr("required");
  //         $("#guardian_add").removeAttr("required");
  //         $("#guardian_st").removeAttr("required");
  //         $("#guardian_phone").removeAttr("required");
  //         $("#submit").attr("disabled", false);



  //       }
  //       else {
  //         if (years < minAge) { ///3
  //           $("#below_age").val(2);

  //           $('#age').val('Your age is ' + years + ' You Are Not Eligible');
  //           $("#guardianInfo").hide('slow');
  //           $("#parent_detail").hide('slow');
  //           $("#relation").hide('slow');
  //           $("#address_guardian").hide('slow');
  //           $("#state_guardian").hide('slow');
  //           $("#mobile_guardian").hide('slow');
  //           $("#parent").removeAttr("required");
  //           $("#guardian_rel").removeAttr("required");
  //           $("#guardian_add").removeAttr("required");
  //           $("#guardian_st").removeAttr("required");
  //           $("#guardian_phone").removeAttr("required");
  //           $("#submit").attr("disabled", true);
  //         }
  //         else {
  //           if (years > maxAge) { ///4
  //             $("#below_age").val(2);

  //             $('#age').val('Your age is ' + years + ' You Are Not Eligible');
  //             $("#guardianInfo").hide('slow');
  //             $("#parent_detail").hide('slow');
  //             $("#relation").hide('slow');
  //             $("#address_guardian").hide('slow');
  //             $("#state_guardian").hide('slow');
  //             $("#mobile_guardian").hide('slow');
  //             $("#parent").removeAttr("required");
  //             $("#guardian_rel").removeAttr("required");
  //             $("#guardian_add").removeAttr("required");
  //             $("#guardian_st").removeAttr("required");
  //             $("#guardian_phone").removeAttr("required");
  //             $("#submit").attr("disabled", true);
  //           }
  //         }
  //       }
  //     }
  //   });
  // });


  // // // //keyup=enter
  // $('input[name="dob"]').keyup(function () {
  //   var dob = $('input[name="dob"]').val();
  //   //alert(dob);
  //   if (dob == '') {
  //     $("#applyFor").html('<option value="">Applying for</option>');
  //     $("#applyCustom .select-selected").text('Applying For');
  //     $("#applyCustom .select-items").html('<div>Enter Date of Birth</div>');
  //     $('#age').val('');
  //   }

  // });



  // $(document).ready(function () {
  //   $("#applyCustom .select-items").html('<div>Please enter Date of Birth first</div>');
  //   $("#venueDateShow .select-items").html('<div>Please select Venue first</div>');
  // });

  // end age dob work and its done

  // //physical and online functionality
  // changeAuditiontype(val) {

  //   var state = $("#state").val();
  //   $("#phase_div .select-selected").html('Select');
  //   $("#phase_div .select-items div").removeClass('same-as-selected');
  //   //Checking if audition type value is empty or not
  //   if (val == '') {
  //    var swal:({
  //       title: "Warning!",
  //       text: "Audition type Not Selected",
  //       icon: "warning",
  //       button: "Okk",
  //     });
  //     return false;
  //   }
  //   // alert(state); 
  //   if (state == 'West Bengal' || state == 'Chhattisgarh' || state == 'Odisha' || state == 'Assam') {
  //     //alert('if');
  //     var divs = $("#phase_div .select-items div");

  //     for (var x = 0; x < divs.length; x++) {
  //       var div = divs[x];
  //       var content = div.innerHTML.trim();

  //       if (val == 'Online') {
  //         // if (content == 'Phase - 1' || content == 'Phase - 3') {
  //         if (content == 'Phase - 1' || content == 'Phase - 2' || content == 'Phase - 3') {
  //           div.style.display = 'none';
  //         } else {
  //           div.style.display = 'block';
  //         }
  //       } else {
  //         if (content == 'Phase - 1') {
  //           div.style.display = 'block';
  //         } else {
  //           div.style.display = 'none';
  //         }
  //       }
  //     }
  //   }
  //   else if (state == 'Madhya Pradesh') {
  //     //alert('else if');
  //     var divs = $("#phase_div .select-items div");

  //     for (var x = 0; x < divs.length; x++) {
  //       var div = divs[x];
  //       var content = div.innerHTML.trim();
  //       // alert(content);
  //       // if (content == 'Phase - 2') {

  //       if (val == 'Online') {

  //         if (content == 'Phase - 3') {
  //           div.style.display = 'block';
  //         } else {
  //           div.style.display = 'none';
  //         }
  //       } else {
  //         if (content == 'Phase - 2') {
  //           div.style.display = 'block';
  //         } else {
  //           div.style.display = 'none';
  //         }
  //       }






  //     }
  //   }
  //   else if (state == 'Uttarakhand' || state == 'Odisha') {
  //     //alert('else if');
  //     var divs = $("#phase_div .select-items div");

  //     for (var x = 0; x < divs.length; x++) {
  //       var div = divs[x];
  //       var content = div.innerHTML.trim();

  //       if (val == 'Online') {
  //         // if (content == 'Phase - 1' || content == 'Phase - 3') {
  //         if (content == 'Phase - 3') {
  //           div.style.display = 'block';
  //         } else {
  //           div.style.display = 'none';
  //         }
  //       } else {
  //         if (content == 'Phase - 2') {
  //           div.style.display = 'block';
  //         } else {
  //           div.style.display = 'none';
  //         }
  //       }






  //     }
  //   }
  //   else {

  //     var divs = $("#phase_div .select-items div");

  //     for (var x = 0; x < divs.length; x++) {
  //       var div = divs[x];
  //       var content = div.innerHTML.trim();
  //       if (content == 'Phase - 3') {
  //         div.style.display = 'block';
  //       } else {
  //         div.style.display = 'none';
  //       }


  //     }
  //   }
  //   $("#venue_div .select-selected").html('');
  //   $("#venueDateShow .select-selected").html('');
  //   $("#venuAdd").html('');
  //   if (val == 'Physical') {
  //     $('#txtAge').show('slow');
  //     $("#venue").attr('required', 'required');
  //     $("#venuData").attr('required', 'required');
  //     $('#onlineTag').hide('slow');
  //   } else {
  //     $('#txtAge').hide('slow');
  //     // $("#venue").removeAttr('required', true);
  //     $("#venue").removeAttr('required');
  //     // $("#venuData").removeAttr('required', true);
  //     $("#venuData").removeAttr('required');
  //     $('#onlineTag').show('slow');
  //   }
  //   if (val == 'Physical' || val == 'Online') {

  //     $('#apply_for_div').show();
  //     $('#register_div').show();


  //   }

  //   var years = $("#years").val();
  //   var minAge = 6;
  //   var maxAge = 55;
  //   var minorAge = 13;



  //   if (years <= minorAge && years >= minAge) {
  //     $.ajax({
  //       url: "<?=base_url();?>form/check_JuniorPost",
  //       method: "POST",
  //       dataType: "json",
  //       data: { years: years, val: val },
  //       success: function (data) {

  //         $("#applyFor").html(data.output);
  //         $("#applyCustom .select-items").html(data.selectDiv);
  //       }
  //     });


  //   }

  //   else {


  //     $.ajax({
  //       url: "<?=base_url();?>form/check_SeniorPost",
  //       method: "POST",
  //       dataType: "json",
  //       data: { years: years, val: val },
  //       success: function (data) {
  //         //alert(data.output);
  //         $("#applyFor").html(data.output);
  //         $("#applyCustom .select-items").html(data.selectDiv);
  //       }
  //     });

  //   }
  // }

  // // ----




  checkvalidateForm() {
    var occup_opt = $('#occup_opt .select-selected').text();
    if (occup_opt == 'Select') {
      $('#occup_opt').css('border', '1px solid red');
    } else {
      $('#occup_opt').css('border', '1px solid #d5dd25');
    }
    var apply_for = $('#applyCustom .select-selected').text();
    if (apply_for == 'Choose One' || apply_for == 'Applying For') {
      $('#applyCustom').css('border', '1px solid red');
    } else {
      $('#applyCustom').css('border', '1px solid #d5dd25');
    }

    var phase_div = $('#phase_div .select-selected').text();
    if (phase_div == 'Select' || phase_div == 'Select Phase' || phase_div == '') {
      $('#phase_div').css('border', '1px solid red');
    } else {
      $('#phase_div').css('border', '1px solid #d5dd25');
    }
    var aud_type = $("input[name='aud_type']:checked").val();
    if (aud_type == 'Physical') {
      var venue_div = $('#venue_div .select-selected').text();
      if (venue_div == 'Select' || venue_div == 'Select Venue' || venue_div == '') {
        $('#venue_div').css('border', '1px solid red');
      } else {
        // $("#venue").removeAttr('required', true);
        $("#venue").removeAttr('required');
        $('#venue_div').css('border', '1px solid #d5dd25');
      }

      var venueDateShow = $('#venueDateShow .select-selected').text();
      if (venueDateShow == 'Select' || venueDateShow == 'Select Venue Date' || venueDateShow == '') {
        $('#venueDateShow').css('border', '1px solid red');
      } else {
        $('#venueDateShow').css('border', '1px solid #d5dd25');
      }
    }
    if ($('#accept_otac').is(":checked")) {
      $('.terms').css('border', 'none');
    } else {
      $('.terms').css('border', '2px solid red');
    }

    var aud_type1 = $('input[name="aud_type"]:checked').val();

    if ($('input[name="aud_type"]').is(":checked")) {
      $('.audition_type').css('border', '1px solid #d5dd25');
    } else {
      $('.audition_type').css('border', '1px solid red');
    }

  }

  loadFunction() {


  }

  check_element(ele) {
    var all = document.getElementsByTagName("alluploadFilejpg");
    var totalele = all.length;
    var per_inc = 100 / all.length + "%";

    if ($(ele).on('click', function () {

    })) {

      document.getElementById("progress").style.width = per_inc;
      document.getElementById("progstat").innerHTML = "Loading " + per_inc;


    } else {
      this.set_ele(ele);
    }
  }
  resendOTP(app_id, email, phone) {
    // alert(app_id);
    if (app_id != '' && phone != '' && email != '') {
      $.ajax({
        url: "<?=base_url();?>home/resend_OTP",
        method: "POST",
        dataType: "json",
        data: { app_id: app_id, phone1: phone, email: email },
        success: function (data) {
          if (data == '1') {
            var swal = ({
              title: "Success!",
              text: "OTP Send Successfully",
              icon: "Success",
              button: "Okk",
            });
          } else {
            var swal = ({
              title: "Warning!",
              text: "OTP send Faild",
              icon: "Warning",
              button: "Okk",
            });
          }

        }
      });
    }
  }

  set_ele(set_element) {
    this.check_element(set_element);
  }
  changeStateReg(elem) {
    var state_val = $(elem)[0].outerText;
    if ($(elem).parent()[0].className == 'custom-select mstate') {

      $('.aud_type[value="Online"]').prop('disabled', false);
      $('.aud_type[value="Physical"]').prop('checked', false);
      $('#txtAge').hide();

    } else {
      return true;
    }
  }



















































































  appyleramounttadekhanorjonno(applyFor_id) {

    $('#response').show();

    if (applyFor_id != "") {
      $.ajax({
        url: "<?=base_url();?>form/getApplyForData",
        method: "POST",
        data: { applyFor_id: applyFor_id },
        success: function (data) {
          //alert(data);
          $("#applyValue").val(data);
          $('#response').hide();
        }
      });

      //////////////////////////


      $.ajax({
        url: "<?=base_url();?>form/getApplyVirtual",
        method: "POST",
        data: { applyFor_id: applyFor_id },
        success: function (response) {
          if (response == 1) {
            //alert('response');
            //$("#txtUpload").show('slow');

            $("#txtAge").hide('slow');
            $("#venue").removeAttr("required");
            $("#venuData").removeAttr("required");

            $('#auditiontype').hide('slow');

            $('.aud_type').removeAttr("required");


            $("#venue option[value='']").attr('selected', 'selected');
            $("#venuData option[value='']").attr('selected', 'selected');

            $("#pdfUploadjpg").attr('required', 'required');
            $("#venuAdd").hide('slow');

            $('#linkdetails').show('slow');

            if (applyFor_id == 14) {
              //alert(applyFor_id);
              /*$("#txtAge").hide('slow');
              $("#venuAdd").hide('slow');
              $("#txtUpload").show('slow');*/
              $("#filecheck").val('0');
              $("#pdfUploadjpg").attr('accept', '.mp4');
              $("#pdfUploadjpg").attr('placeholder', 'Upload mp4 File');

            } else {

              $("#filecheck").val('1');
              $("#pdfUploadjpg").attr('accept', '.doc, .docx, .pdf');
              $("#pdfUploadjpg").attr('placeholder', 'Upload pdf or word File');
              $('#mp4Tag').hide('slow');
              $('#pdfTag').hide('slow');
            }


          } else {
            $("#filecheck").val('1');

            var aud_type = $("input[name='aud_type']:checked").val();
            $('#auditiontype').show('slow');
            $('#pdfTag').hide('slow');
            $('#mp4Tag').hide('slow');
            if (aud_type == 'Physical') {
              $("#txtAge").show('slow');
              $("#venue").attr('required', 'required');
              $("#venuData").attr('required', 'required');

            } else {
              $("#txtAge").hide('slow');
              $("#venue").removeAttr('required');
              $("#venuData").removeAttr('required');

            }

            $('.aud_type').attr("required", "required");

            $('#linkdetails').show('slow');
            //$("#video_link").removeAttr("required");

            $("#pdfUploadjpg").removeAttr('required');

            $("#venue option[value='']").attr('selected', 'selected');
            $("#venuData option[value='']").attr('selected', 'selected');
          }
        }
      });



      /////////////////////////////
    }
    else {
      $("#applyValue").html('');
      //////////////////////
      //$("#txtUpload").hide('slow');
      $("#txtAge").show('slow');
      $("#pdfUpload").removeAttr("required");
      $("#venue").attr('required', 'required');
      $("#venuData").attr('required', 'required');
      // $("#video_link").removeAttr("required");
      $('#linkdetails').show('slow');
      $("#filecheck").val('1');

      $("#venue option[value='']").attr('selected', 'selected');
      $("#venuData option[value='']").attr('selected', 'selected');
      /////////////////////////////////
    }
  }

}
