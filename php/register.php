<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$name = mysqli_real_escape_string($mysqli, trim($request->name));
$phone = mysqli_real_escape_string($mysqli, trim($request->phone));
$email = mysqli_real_escape_string($mysqli, trim($request->email));
$pwd = mysqli_real_escape_string($mysqli, trim($request->pwd));
$sql = "INSERT INTO newo_users(name,phone,email,password) VALUES ('$name','$phone','$email','$pwd')";
if ($mysqli->query($sql) === TRUE) {
$authdata = [
'name' => $name,
'phone' => $phone,
'pwd' => '',
'email' => $email,
'Id' => mysqli_insert_id($mysqli)
];
echo json_encode($authdata);
}
}

?>