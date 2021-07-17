<?php 
include_once("database.php");
$postdata = file_get_contents("php://input");
//echo $postdata; die();

if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata);
	$type = mysqli_real_escape_string($mysqli, trim($request->type));
	$logged_no = mysqli_real_escape_string($mysqli, trim($request->loggedNo));
	
	if($type == 'ott'){
		$chkOtt = "SELECT COUNT(1) cnt,os.ott_username, IFNULL(us.subscription_end_date, '') subscription_end_date FROM ott_subscription os LEFT JOIN user_subscription us ON os.newo_user_id = us.id AND us.subscription_end_date > NOW() WHERE os.ott_username = '".$logged_no."'";
		$resOtt = $mysqli->query($chkOtt);
		$rowOtt = $resOtt -> fetch_assoc();
		
		if($rowOtt['cnt'] == 1){
			if($rowOtt['subscription_end_date'] != ''){
				$authdata_all=['status'=>'success','code'=>1,'username'=>$logged_no,'msg'=>'You have access to OTT!'];
			}
			else{
				$authdata_all=['status'=>'error','code'=>2,'username'=>$logged_no,'msg'=>'Your Subscription has expired!'];
			}
		}
		else{
			$authdata_all=['status'=>'error','code'=>2,'username'=>$logged_no,'msg'=>'You do not have access to OTT!'];
		}
	}	
	
	if($type == 'game'){
		$chkOtt = "SELECT COUNT(1) cnt,gs.game_username, IFNULL(us.subscription_end_date, '') subscription_end_date FROM game_subscription gs LEFT JOIN user_subscription us ON gs.newo_user_id = us.id AND us.subscription_end_date > NOW() WHERE gs.game_username = '".$logged_no."'";
		$resOtt = $mysqli->query($chkOtt);
		$rowOtt = $resOtt -> fetch_assoc();
		
		if($rowOtt['cnt'] == 1){
			if($rowOtt['subscription_end_date'] != ''){
				$authdata_all=['status'=>'success','code'=>1,'username'=>$logged_no,'msg'=>'You have access to GAME!'];
			}
			else{
				$authdata_all=['status'=>'error','code'=>2,'username'=>$logged_no,'msg'=>'Your Subscription has expired!'];
			}
		}
		else{
			$authdata_all=['status'=>'error','code'=>2,'username'=>$logged_no,'msg'=>'You do not have access to GAME!'];
		}
	}	
	
	if($type == 'star'){
		$chkOtt = "SELECT COUNT(1) cnt,ss.starhunt_username, IFNULL(us.subscription_end_date, '') subscription_end_date FROM starhunt_subscription ss LEFT JOIN user_subscription us ON ss.newo_user_id = us.id AND us.subscription_end_date > NOW() WHERE ss.starhunt_username = '".$logged_no."'";
		$resOtt = $mysqli->query($chkOtt);
		$rowOtt = $resOtt -> fetch_assoc();
		
		if($rowOtt['cnt'] == 1){
			if($rowOtt['subscription_end_date'] != ''){
				$authdata_all=['status'=>'success','code'=>1,'username'=>$logged_no,'msg'=>'You have access to STAR HUNT!'];
			}
			else{
				$authdata_all=['status'=>'error','code'=>2,'username'=>$logged_no,'msg'=>'Your Subscription has expired!'];
			}
		}
		else{
			$authdata_all=['status'=>'error','code'=>2,'username'=>$logged_no,'msg'=>'You do not have access to STAR HUNT!'];
		}
	}	

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