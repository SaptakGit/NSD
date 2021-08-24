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

// import { data, each } from 'jquery';





@Component({
  selector: 'app-audition-form',
  templateUrl: './audition-form.component.html',
  styleUrls: ['./audition-form.component.css'],


})
export class AuditionFormComponent implements OnInit {
  angForm: FormGroup;


  // apply:Applyfor[] = [];
  apply = [];
  error = "";
  success = "";

  //private applicant_age: any;

  // name = 'Angular';
  optn: string[] = [];
  optn_id: string[] = [];
  gendervalue = '';
  result_data: string[] = [];
  result_data_amount: any[] = [];
  choose_phase: string[] = [];
  choose_venue: string[] = [];
  hotel_venue: string[] = [];
  venue_date: string = '';
  venue_date_id: string = '';


  datepickerConfig: Partial<BsDatepickerConfig>  //for datepicker





  //validation checking





  constructor(private http: HttpClient, private dataService: ApiService, private applyService: ApiService, private router: Router) {//private fb: FormBuilder,private dataService: ApiService,private router:Router
    this.datepickerConfig = Object.assign({}, {
      containerClass: 'theme-dark-blue',//for datepicker
      dateInputFormat: 'DD/MM/YYYY'
    })

    $(document).ready(() => {
      $("#applyCustom .select-items").html('<div>Please enter Date of Birth first</div>');
      $("#venueDateShow .select-items").html('<div>Please select Venue first</div>');
    });


  }


  ngOnInit(): void {

    this.angForm = new FormGroup({
      name: new FormControl('', Validators.required),
      phone1: new FormControl('', Validators.required),
      whatsapp_no: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.minLength(1), Validators.email]),
      gender: new FormControl('', Validators.required),


      pin: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),

      guardian: new FormControl('', Validators.required),
      guardian_relation: new FormControl('', Validators.required),
      guardian_mobile: new FormControl('', Validators.required),

      aud_type: new FormControl('', Validators.required),

      years: new FormControl('', Validators.required),

      applyFor: new FormControl('', Validators.required),
      applyValue: new FormControl('', Validators.required),
      phase: new FormControl('', Validators.required),
      venuename: new FormControl('', Validators.required),
      venuAdd: new FormControl('', Validators.required),
      venuDate: new FormControl('', Validators.required),





    })

  }
  get name() { return this.angForm.get('name') }
  get phone1() { return this.angForm.get('phone1') }
  get whatsapp_no() { return this.angForm.get('whatsapp_no') }
  get email() { return this.angForm.get('email') }
  get gender() { return this.angForm.get('gender') }
  get dob() { return this.angForm.get('dob') }
  get pin() { return this.angForm.get('pin') }
  get address() { return this.angForm.get('address') }
  get state() { return this.angForm.get('state') }
  get guardian() { return this.angForm.get('guardian') }
  get guardian_relation() { return this.angForm.get('guardian_relation') }
  get guardian_mobile() { return this.angForm.get('guardian_mobile') }
  get aud_type() { return this.angForm.get('aud_type') }
  get years() { return this.angForm.get('years') }
  get applyFor() { return this.angForm.get('applyFor') }
  get applyValue() { return this.angForm.get('applyValue') }
  get phase() { return this.angForm.get('phase') }
  get venuename() { return this.angForm.get('venuename') }
  get venuAdd() { return this.angForm.get('venuAdd') }
  get venuDate() { return this.angForm.get('venuDate') }

  // find age & eligibility

  //minAge = 6;
  //minorAge = 13;
  //maxAge = 55;

  findAge(event) {
    console.log(event);
    var dob = (<HTMLInputElement>document.getElementById('dob')).value;
    console.log(dob);
    var userBirthYear = parseInt(dob.substring(6));
    var currentYear = (new Date).getFullYear();
    var ageEligible = (currentYear - userBirthYear);
  

    var minAge = 6;
    var maxAge = 55;
    var minorAge = 13;


    if (ageEligible <= minorAge && ageEligible >= minAge) {
      $("#years").val(ageEligible);
      $('#age').val('Your age is ' + ageEligible + ' and  your age Below 18 so fill-up Parent Details');
      $("#guardianInfo").show('slow');
      $("#parent_detail").show('slow');
      $("#relation").show('slow');
      $("#address_guardian").show('slow');
      $("#state_guardian").show('slow');
      $("#mobile_guardian").show('slow');
      //--
      $("#parent").attr('required', 'required');
      $("#parent").prop('disabled', false);
      $("#guardian_rel").attr('required', 'required');
      $("#guardian_add").attr('required', 'required');
      $("#guardian_st").attr('required', 'required');
      $("#guardian_phone").attr('required', 'required');
      $("#submit").attr("disabled");


    }
    else if (ageEligible <= maxAge && ageEligible >= minAge) {
      $("#years").val(ageEligible);
      $('#age').val('You Are Eligible, Your Age is ' + ageEligible);
      $("#guardianInfo").hide('slow');
      $("#parent_detail").hide('slow');
      $("#relation").hide('slow');
      $("#address_guardian").hide('slow');
      $("#state_guardian").hide('slow');
      $("#mobile_guardian").hide('slow');
      $("#parent").removeAttr("required");
      $("#parent").prop("disabled", true);
      $("#guardian_rel").removeAttr("required");
      $("#guardian_add").removeAttr("required");
      $("#guardian_st").removeAttr("required");
      $("#guardian_phone").removeAttr("required");
      $("#submit").attr("disabled");
      // $("#submit").attr("disabled", false);

    }
    else if (ageEligible < minAge) { //checked
      // $("#below_age").val(2);
      $('#age').val('Your age is ' + ageEligible + ' You Are Not Eligible');
      $("#guardianInfo").hide('slow');
      $("#guardianInfo").prop('disabled', true);
      $("#parent_detail").hide('slow');
      $("#relation").hide('slow');
      $("#address_guardian").hide('slow');
      $("#state_guardian").hide('slow');
      $("#mobile_guardian").hide('slow');
      $("#parent").removeAttr("required");
      $("#parent").prop("disabled", true);
      $("#guardian_rel").removeAttr("required");
      $("#guardian_add").removeAttr("required");
      $("#guardian_st").removeAttr("required");
      $("#guardian_phone").removeAttr("required");
      $("#submit").attr("disabled");
      // $("#submit").attr("disabled", true);



    }
    else if (ageEligible > maxAge) {//checked
      // $("#below_age").val(2);
      $('#age').val('Your age is ' + ageEligible + ' You Are Not Eligible');
      $("#guardianInfo").hide('slow');
      $("#guardianInfo").prop('disabled', true);
      $("#parent_detail").hide('slow');
      $("#relation").hide('slow');
      $("#address_guardian").hide('slow');
      $("#state_guardian").hide('slow');
      $("#mobile_guardian").hide('slow');
      $("#parent").removeAttr("required");
      $("#parent").prop("disabled", true);
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

    // document.getElementById("fist-div-registration").style.display = "none";
    // document.getElementById("scand-div-registration").style.display = "block";
    this.getApply();
    // console.log(this.result_data);
    //  console.log(this.result_data.values);
    // console.log(this.name.status);
   var minAge = 6;
    var maxAge = 55;
    var minorAge = 13;
    var years = $("#years").val();

   
    // another type
    if(years < minorAge && years >minAge){
      //under 1st if

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
          }else if (this.guardian.status == 'INVALID') {
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
          }else{
            document.getElementById("fist-div-registration").style.display = "none";
            document.getElementById("scand-div-registration").style.display = "block";
          }
      
    }else {
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
          }else {
            document.getElementById("fist-div-registration").style.display = "none";
            document.getElementById("scand-div-registration").style.display = "block";
          }
    }


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

    // var years = $("#years").val();
    // var minAge = 6;
    // var maxAge = 55;
    // var minorAge = 13;

    /*  if (years <= minorAge && years >= minAge) {

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
   
    }*/
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


  //for 'apply for'  data  this function is called by next_div function
  getApply() {
    var applicant_age = $('#years').val();
    var action_type = 'applyFor';
    this.dataService.getApplyfor(applicant_age, action_type).subscribe((result) => {
      this.result_data = result.data;
    });
    return this.result_data;
  }

  //get the amount value for every applied field
  findAmount() {
    var applicant_age = $('#applyFor').val();
    var action_type = 'applyValue';
    this.dataService.getApplyfor(applicant_age, action_type).subscribe((result_amount) => {
      this.result_data_amount = (result_amount.data[0].amount);
      $('#applyValue').val((this.result_data_amount));
    });
    $("#phaseChoose").show('slow');
    return this.result_data_amount;

  }

  getPhase() {
    console.log('amount click');

    // var applicant_age = $('#applyFor').val();
    // var action_type='phaseChoose';
    // this.dataService.getApplyfor(applicant_age,action_type).subscribe((result_phase)=>{ 
    //   this.choose_phase=result_phase.data;
    //   console.log(this.choose_phase);
    // });
    // return this.choose_phase;
  }


  findPlace() {
    console.log("hellofrom venue");
    var applicant_age = $('#choose_phase').val();
    // console.log(applicant_age);
    var action_type = 'venueChoose';
    this.dataService.getApplyfor(applicant_age, action_type).subscribe((result_phase) => {
      this.choose_venue = result_phase.data;
      console.log(this.choose_venue);
    });
    return this.choose_venue;
  }
  //find hotel based on location
  findHotel() {
    var applicant_age = $('#venue').val();
    var action_type = 'hotelChoose';
    this.dataService.getApplyfor(applicant_age, action_type).subscribe((result_phase) => {
      // this.hotel_venue=(result_phase.data[0].venue_address);
      this.hotel_venue = (result_phase.data[0].venue_address);
      this.venue_date = (result_phase.data.newDate);
      this.venue_date_id = (result_phase.data[0].id);

      // console.log(this.hotel_venue);
      // console.log(this.venue_date);
      console.log("hello date id");
      // console.log(result_phase);

      console.log(this.venue_date_id);

      $('#venuAdd').val(this.hotel_venue);
    });
  }
  //for saving registration form data in database
  postauditiondata(angForm) {
    // console.log(angForm);
    var action_type = 'submit';

    var amount = $('#applyValue').val();
    this.angForm.value.applyValue = amount;
     var applyValue = this.angForm.value.applyValue;
    this.angForm.value.venuDate = this.venue_date_id;
     var venuDate = this.angForm.value.venuDate;
    this.angForm.value.years = $('#years').val();
     var years = this.angForm.value.years;
    console.log(this.applyFor.status );

    if(this.angForm.value.aud_type=="Online"){
        if(this.applyFor.status == 'INVALID'){
          alert('selecting Aplying for section is required');
          $('#applyFor').focus();
        }
        else if(this.phase.status =='INVALID'){
          alert('selecting phase is required');
          $('#choose_phase').focus();
        }else{
          this.dataService.postAuditionForm(action_type, angForm.name, angForm.phone1, angForm.whatsapp_no, angForm.email, angForm.gender, angForm.dob, years, angForm.pin, angForm.address, angForm.state, angForm.guardian, angForm.guardian_relation, angForm.guardian_mobile, angForm.aud_type, angForm.applyFor, applyValue, angForm.phase, angForm.venuename, venuDate).subscribe((result => {
            alert(JSON.stringify(result['msg']));
          }));
        }            
    }else {
      if(this.applyFor.status == 'INVALID'){
        alert('selecting Aplying for section is required');
        $('#applyFor').focus();
      }           
      else if(this.phase.status =='INVALID'){
        alert('selecting phase is required');
        $('#choose_phase').focus();
      } 
      else if(this.venuename.status =='INVALID'){
        alert('selecting venue is required');
        $('#venue').focus();
      }
      // else if(this.venuDate.status =='INVALID'){
      //   alert('selecting venued date is required');
      //   $('#venuDate').focus();
      // }
      else{
        this.dataService.postAuditionForm(action_type, angForm.name, angForm.phone1, angForm.whatsapp_no, angForm.email, angForm.gender, angForm.dob, years, angForm.pin, angForm.address, angForm.state, angForm.guardian, angForm.guardian_relation, angForm.guardian_mobile, angForm.aud_type, angForm.applyFor, applyValue, angForm.phase, angForm.venuename, venuDate).subscribe((result => {
          alert(JSON.stringify(result['msg']));
        }));
      }
    }



   


    // this.dataService.postAuditionForm(action_type, angForm.name, angForm.phone1, angForm.whatsapp_no, angForm.email, angForm.gender, angForm.dob, years, angForm.pin, angForm.address, angForm.state, angForm.guardian, angForm.guardian_relation, angForm.guardian_mobile, angForm.aud_type, angForm.applyFor, applyValue, angForm.phase, angForm.venuename, venuDate).subscribe((result => {
    //   alert(JSON.stringify(result['msg']));
    // }));


  }
  // ----


  changeStateReg(e){

  }

}




