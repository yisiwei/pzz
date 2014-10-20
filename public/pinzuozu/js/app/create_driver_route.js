$(function() {
	//alert("发布线路");
	new CreateDriverRoute("#driver-add-roude");

	//head
  	new HeadTop("#head-top");
  	new HeadBottom("#head-bottom");

  	//footer
  	new Footer("#footer");

	$("#menu-route").parent().addClass('current');
});