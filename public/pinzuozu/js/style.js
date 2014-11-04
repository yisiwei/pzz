// 发布线路
/*date start*/
// $(document).ready(function() {
//   var d=new Date();
//   var todayMonth=d.getMonth()+1;
//   var todaydate=d.getFullYear()+"-"+todayMonth+"-"+d.getDate();
//   $('#d').val(todaydate);
//   $('#db').val(todaydate);
// });
/*date end*/

var numplace=1;
var placeId=1;
$(document).ready(function() {
	$('#addplace').click(function(){
		if($("#line_place").val().trim()!="" && $("#line_place").val()!=null){
			if(numplace <= 4){
				var placeDivId = "placeDiv" + placeId;
				var valueId = "addplace" + placeId;
				var delId = "del" + placeId;
      	$('#addsite').append("<div id='"+placeDivId+"' class='form-group has-feedback addplace-span'><div class='col-xs-6 col-xs-offset-2'><input class='form-control  border-radius-style' name='placeValue' id='"+valueId+"'placeholder='途径地'/><span class='glyphicon glyphicon-remove form-control-feedback cr999 spancolor' id='"+delId+"'></span></div></div>");
				$("#"+delId).click(function(){
					//alert("message");
					$("#"+placeDivId).remove();
					numplace--;
				});
				numplace++;
				placeId++;
			}else{
    		//alert("最多添加5个地点");
			}
		}               
	});
	


});

function formatDate(date){
	var formatDate = date.substr(0,9)+date.substr(11,date.length-2);
	return formatDate;
}

var code; //在全局 定义验证码
function createCode(){ 
	code = new Array();
	var codeLength = 4;//验证码的长度
	var checkCode = $("#codeValue");
	//checkCode.value = "";
	var selectChar = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');

	for(var i=0;i<codeLength;i++) {
	   var charIndex = Math.floor(Math.random()*36);
	   code +=selectChar[charIndex];
	}
	checkCode.val(code);
}

//60秒后重新获取短信验证码
var wait = 60;
function getCode(btn) {
	//alert(btn.val());
    if (wait == 0) {
        btn.removeAttr("disabled");
        btn.text("获取验证码");
        wait = 60;
    } else {
        btn.attr("disabled", true);
        btn.text(wait + "秒后重新获取验证码");
        wait--;
        setTimeout(function () {
            getCode(btn);
        },1000);
    }
} 

//邮箱正则表达式
function checkEmail(email){
    var reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
    if(reg.test(email)){
        return true;
    }else{
        return false;
    }
}
//手机正则表达式
function checkMobile(mobile) {
    var reg = /^1\d{10}$/;
    if (reg.test(mobile)) {
        return true;
    } else {
        return false;
    }
}
