function sendRequest(u){
	// Send request to server
	//u a url as a string
	//async is type of request
	var obj=$.ajax({url:u,async:false});
	//Convert the JSON string to object
	var result=$.parseJSON(obj.responseText);
	//	alert("request sent");
	return result;	//return object
}

$(function(){
	$('#home').click(function(e){
		e.preventDefault();
		here();
	});
});

$(function(){
	$('#addme').click(function(e){
		e.preventDefault();
		addValue();
	});
});

$(function(){
	$('#del').click(function(e){
		e.preventDefault();
		deleteM();
	});
});

//refreshing page button
$(function(){
	$('#refre').click(function(e){
		e.preventDefault();
		ref();
	});
});

$(function(){
	$('#logout').click(function(e){
		e.preventDefault();
		swit();
	});
});

$(function(){
	$('#out').click(function(e){
		e.preventDefault();
		off();
	});
});

function off(){
	alert("here");
	window.close();
}

function swit(){
	window.location.href="#login";
}

function ref(){
	window.location.reload();
}

$(function(){
	$('#up').click(function(e){
		e.preventDefault();
		updateDone();
	});
});

//login button
$(function(){
	$('#logo').click(function(e){
		e.preventDefault();
		validate();
	});
});

//home page
function here(){
	window.location.href="#pageone";
}

function deleteM(){

}

function getList(){
	var objRes=sendRequest("http://cs.ashesi.edu.gh/~csashesi/class2016/daniel-osei/web_tech_2015/MobileWeb/OnlineTest1/demoEx.php?cmd=2");
	if(objRes.result==1){
		var me=objRes.reads;
		var listHTML="";
		for (var i = 0; i < me.length; i++) {
			listHTML+='<li data-role="collapsible" data-iconpos="right" data-inset="true" data-icon="bars"><h2>Meter Number: '+me[i]['no']+'</h2><br><h2>Value Entered: '+me[i]['Value']+'</h2><br><h2>Time Recorded: '+me[i]['Time']+'</h2><br></li>';
		}
		document.getElementById('myid').innerHTML=listHTML;
		return;
	}
	document.getElementById('res').innerHTML=objRes.Message;
	return;
}

function update(){
	var objRes=sendRequest("http://cs.ashesi.edu.gh/~csashesi/class2016/daniel-osei/web_tech_2015/MobileWeb/OnlineTest1/demoEx.php?cmd=2");
	if(objRes.result==1){
		var me=objRes.reads;
		var listHTML="";
		for (var i = 0; i < me.length; i++) {
			listHTML+='<option value='+me[i]['no']+'><h2>Meter Number: '+me[i]['no']+'    Entered Value: '+me[i]['Value']+'</h2><br></option>';
		}
		document.getElementById('selector').innerHTML=listHTML;
		return;
	}
	document.getElementById('res').innerHTML=objRes.Message;
	return;
}

function upda(number){
	document.getElementById('n').value=number;
	alert("here too");
	update();
	window.location.href="#upga1";
	}

function updateDone(){
	alert("come home");
	var kkN=$('#n').val();
	var kkV=$('#v').val();
	alert(kkV);
	var objRes=sendRequest("http://cs.ashesi.edu.gh/~csashesi/class2016/daniel-osei/web_tech_2015/MobileWeb/OnlineTest1/demoEx.php?cmd=4&no="+kkN+"&val="+kkV);
	alert(objRes.Message);
	if(objRes.result==1){
		document.getElementById('inu').innerHTML=objRes.Message;
		return;
	}
	document.getElementById('inu').innerHTML=objRes.Message;
}

function validate(){
	var us=$('#usname').val();
	var pas=$('#passwd').val();
	var objRes=sendRequest("http://cs.ashesi.edu.gh/~csashesi/class2016/daniel-osei/web_tech_2015/MobileWeb/OnlineTest1/demoEx.php?cmd=3&username="+us+"&password="+pas);
	if(objRes.result==1){
		document.getElementById('rep').innerHTML=objRes.Message;
		window.location.href="#pageone";
		return;
	}
	else{
		document.getElementById('rep').innerHTML=objRes.Message;
		return;
	}
}

function addValue(){
	var nu=$('#no1').val();
	var va=$('#valu').val();
	var objRes=sendRequest("http://cs.ashesi.edu.gh/~csashesi/class2016/daniel-osei/web_tech_2015/MobileWeb/OnlineTest1/demoEx.php?cmd=1&no="+nu+"&value="+va);
	if(objRes.result==1){
		document.getElementById('in').innerHTML=objRes.Message;
		return;
	}
	else{
		document.getElementById('in').innerHTML=objRes.Message;
		return;
	}
}