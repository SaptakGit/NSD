<?php 
include_once("database.php");
$postdata = file_get_contents("php://input");
//echo $postdata; die();
if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata);
	$primary = mysqli_real_escape_string($mysqli, trim($request->primary));
	$netwood_email = mysqli_real_escape_string($mysqli, trim($request->netwoodemail));
	$games_email = mysqli_real_escape_string($mysqli, trim($request->gamesemail));
	$starhunt_email = mysqli_real_escape_string($mysqli, trim($request->starhuntemail));
	
	$selMain = "SELECT id, name, phone, email, status FROM newo_users WHERE phone = '".$primary."'";
	$resMain = $mysqli->query($selMain);
	$rowMain = $resMain -> fetch_assoc();
	
	if($primary == $netwood_email){
		$i = 1;
	}
	else{
		$selOldOtt = "SELECT id FROM ott_subscription WHERE ott_username = '".$primary."'";
		$resOldOtt = $mysqli->query($selOldOtt);
		$rowOldOtt = $resOldOtt -> fetch_assoc();
		
		$ottPass = randomPassword(8);
		$newOttUser = "INSERT INTO newo_users(parent_id,email,password,created_ts) VALUES('".$rowOldOtt['id']."','".$netwood_email."','".$ottPass."',NOW())";
		$resNewOttUser = $mysqli->query($newOttUser);
		
		$sqlOtt = "UPDATE ott_subscription SET ott_username = '".$netwood_email."' WHERE id = '".$rowOldOtt['id']."'";
		$resOtt = $mysqli->query($sqlOtt);
	}
	
	if($primary == $games_email){
		$i = 1;
	}
	else{
		$selOldGame = "SELECT id FROM game_subscription WHERE game_username = '".$primary."'";
		$resOldGame = $mysqli->query($selOldGame);
		$rowOldGame = $resOldGame -> fetch_assoc();
		
		$gamePass = randomPassword(8);
		$newGameUser = "INSERT INTO newo_users(parent_id,email,password,created_ts) VALUES('".$rowOldGame['id']."','".$games_email."','".$gamePass."',NOW())";
		$resNewGameUser = $mysqli->query($newGameUser);

		$sqlGame = "UPDATE game_subscription SET game_username = '".$games_email."' WHERE id = '".$rowOldGame['id']."'";
		$resGame = $mysqli->query($sqlGame);
	}
	
	if($primary == $starhunt_email){
		$i = 1;
	}
	else{
		$selOldStarhunt = "SELECT id FROM starhunt_subscription WHERE starhunt_username = '".$primary."'";
		$resOldStarhunt = $mysqli->query($selOldStarhunt);
		$rowOldStarhunt = $resOldStarhunt -> fetch_assoc();
		
		$starhuntPass = randomPassword(8);
		$newStarhuntUser = "INSERT INTO newo_users(parent_id,email,password,created_ts) VALUES('".$rowOldStarhunt['id']."','".$starhunt_email."','".$starhuntPass."',NOW())";
		$resNewStarhuntUser = $mysqli->query($newStarhuntUser);

		$sqlStarhunt = "UPDATE starhunt_subscription SET starhunt_username = '".$starhunt_email."' WHERE id = '".$rowOldStarhunt['id']."'";
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