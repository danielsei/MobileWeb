<?php
if(isset($_REQUEST['cmd'])){
	$switch=$_REQUEST['cmd'];
	switch($switch){
		case 1:
			addMeter();
			break;
		case 2:
			viewRec();
			break;
		case 3:
			validUser();
			break;
		case 4:
			update();
			break;
		case 5:
			deleteMeter();
			break;	
		default:

	}
}

function addMeter(){
	include("functions.php");
	$obj=new adb();
	if(isset($_REQUEST['no']) && isset($_REQUEST['value'])){
		$num=$_REQUEST['no'];
		$val=$_REQUEST['value'];

		$str="insert into meter set no='$num', value='$val'";
		$respond=$obj->query($str);
		if(!$respond){
			echo '{"result":0,"Message":"Failed Running Query"}';
			return;
		}
		else{
		echo '{"result":1,"Message":"Successfully Added Record"}';
		return;
		}
	}
	else{
		echo '{"result":0,"Message":"Enter Value or Meter Number"}';
		return;
	}

}

function viewRec(){
	include("functions.php");
	$obj=new adb();
	$str="select * from meter";
	$respond=$obj->query($str);
	if(!$respond){
		echo '{"result":0,"Message":"Query failed running"}';
		return;
	}
	$row=$obj->fetch();
	echo '{"result":1,"reads":[';
	while($row){
		echo json_encode($row);
		$row=$obj->fetch();
		if($row){
			echo ",";
		}
	}
	echo "]}";
}

function update(){
	include("functions.php");
	$obj=new adb();
	if(isset($_REQUEST['no']) && isset($_REQUEST['val'])){
		$numb=$_REQUEST['no'];
		$vi=$_REQUEST['val'];
		$str="update meter set value='$vi' where no='$numb'";
		$respond=$obj->query($str);
		if(!$respond){
			echo '{"result":0,"Message":"query failed "}';
			return;
		}
		else{
			echo '{"result":1,"Message":"Updated Successfully"}';
			return;
		} 
	}
	echo '{"result":0,"Message":"No Number Entered"}';
}

function deleteMeter(){
	include("functions.php");
	$obj=new adb();
	if(isset($_REQUEST['no'])){
		$numb=$_REQUEST['no'];
		
		$str="delete from meter where no='$numb'";
		$respond=$obj->query($str);
		if(!$respond){
			echo '{"result":0,"Message":"query failed"}';
			return;
		}
		else{
			echo '{"result":1,"Message":"Deleted Successfully"}';
			return;
		} 
	}
}

function validUser(){
	include("functions.php");
	$obj=new adb();
	if(isset($_REQUEST['username']) && isset($_REQUEST['password'])){
		$usname=$_REQUEST['username'];
		$paswd=$_REQUEST['password'];

		$str="select * from users where username='$usname' and password='$paswd'";
		$respond=$obj->query($str);

		if(!$respond){
			echo '{"result":0,"Message":"Incorrect Username or Password"}';
			return;
		}
		else{
			echo '{"result":1,"Message":"Good to go"}';
			return;
		}
	}
	else{
		echo '{"result":0,"Message":"Enter both Username and Password"}';
		return;
	}
}
?>