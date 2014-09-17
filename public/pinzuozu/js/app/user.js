$(function() {
	//alert("用户中心");

	//can.route(':route/:id');
	//can.route.ready(false);

	//head
	new HeadTop("#head-top");
	new HeadBottom("#head-bottom");

	new Menu("#menu");

	new UserContent("#user-content");

	//footer
	new Footer("#footer");


	//can.route.ready(true);
});