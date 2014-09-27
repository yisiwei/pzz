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
$(document).ready(function() {
	
});
function formatDate(date){
	var formatDate = date.substr(0,9)+date.substr(11,date.length-2);
	return formatDate;
}