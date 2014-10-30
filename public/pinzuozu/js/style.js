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