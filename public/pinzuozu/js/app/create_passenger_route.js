$(function() {
  //alert("乘客发布线路");
  new CreatePassengerRoute("#passenger-add-roude");

  //head
  new HeadTop("#head-top");
  new HeadBottom("#head-bottom");

  //footer
  new Footer("#footer");

  $("#menu-route").parent().addClass('current');
});