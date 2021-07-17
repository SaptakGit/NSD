<?php 
include_once("database.php");
$postdata = file_get_contents("php://input");
//echo $postdata; die();
if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata);
	$primary = mysqli_real_escape_string($mysqli, trim($request->primary));
	$netwood_phone = mysqli_real_escape_string($mysqli, trim($request->netwoodphone));
	$games_phone = mysqli_real_escape_string($mysqli, trim($request->gamesphone));
	$starhunt_phone = mysqli_real_escape_string($mysqli, trim($request->starhuntphone));
	
	$selMain = "SELECT id, name, phone, email, status FROM newo_users WHERE phone = '".$primary."'";
	$resMain = $mysqli->query($selMain);
	$rowMain = $resMain -> fetch_assoc();
	
	if($primary == $netwood_phone){
		$i = 1;
	}
	else{
		$selOldOtt = "SELECT id FROM ott_subscription WHERE ott_username = '".$primary."'";
		$resOldOtt = $mysqli->query($selOldOtt);
		$rowOldOtt = $resOldOtt -> fetch_assoc();
		
		$ottPass = randomPassword(8);
		$newOttUser = "INSERT INTO newo_users(name,phone,email,password,created_ts) VALUES('".$rowMain['name']."','".$netwood_phone."','".$rowMain['email']."','".$ottPass."',NOW())";
		$resNewOttUser = $mysqli->query($newOttUser);
		
		$sqlOtt = "UPDATE ott_subscription SET ott_username = '".$netwood_phone."' WHERE id = '".$rowOldOtt['id']."'";
		$resOtt = $mysqli->query($sqlOtt);
	}
	
	if($primary == $games_phone){
		$i = 1;
	}
	else{
		$selOldGame = "SELECT id FROM game_subscription WHERE game_username = '".$primary."'";
		$resOldGame = $mysqli->query($selOldGame);
		$rowOldGame = $resOldGame -> fetch_assoc();
		//echo $rowOldGame['id'];die;
		$gamePass = randomPassword(8);
		$sqlGame = "UPDATE game_subscription SET game_username = '".$games_phone."', game_password = '".$gamePass."' WHERE id = '".$rowOldGame['id']."'";
		$resGame = $mysqli->query($sqlGame);
	}
	
	if($primary == $starhunt_phone){
		$i = 1;
	}
	else{
		$selOldStarhunt = "SELECT id FROM starhunt_subscription WHERE starhunt_username = '".$primary."'";
		$resOldStarhunt = $mysqli->query($selOldStarhunt);
		$rowOldStarhunt = $resOldStarhunt -> fetch_assoc();
		
		$starhuntPass = randomPassword(8);
		$sqlStarhunt = "UPDATE starhunt_subscription SET starhunt_username = '".$starhunt_phone."', starhunt_password = '".$starhuntPass."' WHERE id = '".$rowOldStarhunt['id']."'";
		$resStarhunt = $mysqli->query($sqlStarhunt);
	}

$authdata_all=[
       'status'=>'success',
       'code'=>1,
       'username'=>$primary
        // 'last_id'=>$last_id
    ];
    //print_r($authdata_all); die();
    echo json_encode($authdata_all);
}


function randomPassword($m) {
	$alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
	$pass = array(); //remember to declare $pass as an array
	$alphaLength = strlen($alphabet) - 1; //put the length -1 in cache
	for ($i = 0; $i < $m; $i++) {
		$n = rand(0, $alphaLength);
		$pass[] = $alphabet[$n];
	}
	return implode($pass); //turn the array into a string
}
?>