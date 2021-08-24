<?php
include_once("dbaudition.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata); 
$applicant_age= $_REQUEST['applicant_age']; //for applyValue this is a come as a id
$action_type= $_REQUEST['action_type']; //static value comes frots file for different work in single php page


if($action_type == 'applyFor'){
    if($applicant_age<13){
    $select="SELECT id,apply_name,amount from tbl_apply_for where post_for = 'junior'";
    }
    else{
    $select="SELECT id,apply_name,amount FROM tbl_apply_for where post_for = 'senior'";
    }
    $mysqli=mysqli_query($conn,$select);
    $ar=array();
    while ($rows=mysqli_fetch_assoc($mysqli)) {
        $ar[]=$rows;
    }
    echo json_encode(['data'=>$ar]);
}
elseif($action_type == 'applyValue'){
        $select="SELECT amount FROM tbl_apply_for where id=$applicant_age";
        $mysqli=mysqli_query($conn,$select);
        $ar=array();
        $rows=mysqli_fetch_assoc($mysqli);
        $ar[]=$rows; 
        echo json_encode(['data'=>$ar]);
}
elseif($action_type == 'phaseChoose'){
        $select="SELECT phase_title FROM tbl_phase;";
        $mysqli=mysqli_query($conn,$select);
        $ar=array();
        while ($rows=mysqli_fetch_assoc($mysqli)) {
            $ar[]=$rows;
        }
        echo json_encode(['data'=>$ar]);
}
elseif($action_type == 'venueChoose'){  // finding the venue
        $select="SELECT id,venue_name,venue_address,phase FROM tbl_venue_list WHERE phase=$applicant_age";
        $mysqli=mysqli_query($conn,$select);
        $ar=array();
        while ($rows=mysqli_fetch_assoc($mysqli)) {
            $ar[]=$rows;
        }
        echo json_encode(['data'=>$ar]);
}
elseif($action_type == 'hotelChoose'){  // finding the venue
    

        $select="SELECT tbl_venue_list.venue_address, tbl_venuedatecapacity.venue_date,tbl_venuedatecapacity.id
                FROM tbl_venue_list
                 INNER JOIN tbl_venuedatecapacity
                 ON tbl_venue_list.id=tbl_venuedatecapacity.venue_id WHERE tbl_venue_list.id=$applicant_age";
        $mysqli=mysqli_query($conn,$select);
        $ar=array();
        $rows=mysqli_fetch_assoc($mysqli);
        $ar[]=$rows;
        $newD=explode('-',$rows['venue_date']); 
        $newDD=$newD[2].'/'.$newD[1].'/'.$newD[0];
        $ar['newDate'] =  $newDD;

        echo json_encode(['data'=>$ar]);




}
elseif($action_type == 'submit'){
// $reg_id=$reg_id = 'NWA'.rand(100000,999999);
// $name=$_REQUEST['name'];
// $phone1=$_REQUEST['phone1'];
// $whatsapp=$_REQUEST['whatsapp_no'];
// $email$=$_REQUEST['email'];
// $gender=$_REQUEST['gender']
// $dob=$_REQUEST['dob'];
// // $age=$_REQUEST['age'];
// $pin=$_REQUEST['pin'];
// $address=$_REQUEST['address'];
// $state=$_REQUEST['state'];
// $guardian=$_REQUEST['guardian'];
// $guardian_relation=$_REQUEST['guardian_relation'];
// $guardian_mobile=$_REQUEST['guardian_mobile'];
// $applyFor=$_REQUEST['applyFor'];
// $amount=$_REQUEST['applyValue'];
// $phase=$_REQUEST['phase'];
// $venue_name=$_REQUEST['venue_name'];
// $venue_hotel=$_REQUEST['venuadd']
// $venue_date=$_REQUEST['venue_date'];

// $insert="INSERT INTO `tbl_application_detail`(`id`, `reg_id`, `password`, `name`, `email`, `picture`, `gender`, `address`, `state`, `occupation`, `art_institute`, `pin`, `dob`, `age`, `guardian_name`, `guardian_relation`, `guardian_address`, `guardian_state`, `guardian_mobile`, `phone1`, `whatsapp_no`, `phone2`, `video_link`, `apply_for`, `upload_file`, `upload_file_jpg`, `upload_file_pdf`, `upload_file_mp4`, `upload_file_mp3`, `aud_type`, `apply_for_amount`, `phase`, `venue`, `DateCapacity_id`, `payment_status`, `created_date`, `affiliatedBy`, `offline`, `step`, `followup_date`, `note_label`, `assigned_id`, `login_status`, `reject`, `doc`, `transcoding_status`, `submission1`, `submission2`, `submission3`, `reported_by`, `reported_reason`, `check_completed`, `user_otp`, `coupon_code`, `teleadmin_id`, `telecaller_id`, `is_finalist`, `rank`, `pay_later_flag`, `not_interest_flag`) VALUES ('$reg_id','','$name','$email','','$gender','$address','$state','','','$pin','$dob','','$guardian','$guardian_relation','','','$guardian_mobile','$phone1','$whatsapp','','','','$applyFor','','','','','','','$amount','$phase','$venue_name','','','','','','','','','','',','','','','','','','','','','','','','','','')";

// $mysqli=mysqli_query($conn,$insert);
// if($mysqli){
//   $success="submission succesfull";
// }



}



?>