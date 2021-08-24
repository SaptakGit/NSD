<?php
include_once("dbaudition.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
// echo $postdata;
// $authdata_all=[];
if(isset($postdata) && !empty($postdata)){
 $request = json_decode($postdata); 

$reg_id = 'NWA'.rand(100000,999999);

 $name = mysqli_real_escape_string($conn, trim($request->name)); 


 $phone1 = mysqli_real_escape_string($conn, trim($request->phone1));
 
 $whatsapp = mysqli_real_escape_string($conn, trim($request->whatsapp_no));
 $email = mysqli_real_escape_string($conn, trim($request->email));
 $gender = mysqli_real_escape_string($conn, trim($request->gender));
 $dob = mysqli_real_escape_string($conn, trim($request->dob));
 $years = mysqli_real_escape_string($conn, trim($request->years));
 $pin = mysqli_real_escape_string($conn, trim($request->pin));
 $address = mysqli_real_escape_string($conn, trim($request->address));
 $state = mysqli_real_escape_string($conn, trim($request->state));

 $guardian = mysqli_real_escape_string($conn, trim($request->guardian));
 $guardian_relation = mysqli_real_escape_string($conn, trim($request->guardian_relation ));
 $guardian_mobile = mysqli_real_escape_string($conn, trim($request->guardian_mobile));
 $aud_type = mysqli_real_escape_string($conn, trim($request->aud_type));
 $applyFor = mysqli_real_escape_string($conn, trim($request->applyFor));
 $amount = mysqli_real_escape_string($conn, trim($request->applyValue));
 $phase = mysqli_real_escape_string($conn, trim($request->phase));
 $venue_name = mysqli_real_escape_string($conn, trim($request->venuename));

 $venue_date = mysqli_real_escape_string($conn, trim($request->venuDate));


  
$insert="INSERT INTO `tbl_application_detail`(`reg_id`, `name`, `email`, `gender`, `address`, `state`, `pin`, `dob`, `age`, `guardian_name`, `guardian_relation`,`guardian_mobile`, `phone1`, `whatsapp_no`,`apply_for`,`aud_type`, `apply_for_amount`, `phase`,`venue`,`DateCapacity_id`) VALUES ('$reg_id','$name','$email','$gender','$address','$state','$pin','$dob','$years','$guardian','$guardian_relation','$guardian_mobile','$phone1','$whatsapp','$applyFor','$aud_type','$amount','$phase','$venue_name','$venue_date')"; 
$mysqli_querry=mysqli_query($conn,$insert);
  if($mysqli_querry){
    $authdata_all=['status'=>'success','code'=>1,'msg'=>'Registration Successfull'];
  }
}
else {
  $authdata_all=['status'=>'unsuccessful','code'=>2,'msg'=>'Try Again'];

}

echo json_encode($authdata_all);


?>