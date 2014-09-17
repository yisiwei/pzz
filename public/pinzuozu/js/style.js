// 发布线路
/*date start*/
$(document).ready(function() {
  var d=new Date();
  var todayMonth=d.getMonth()+1;
  var todaydate=d.getFullYear()+"-"+todayMonth+"-"+d.getDate();
  $('#d').val(todaydate);
  $('#db').val(todaydate);
});
/*date end*/