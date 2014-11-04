(function() {
	$(function() {

		can.route.ready(false);

		can.route( ':route/:id' );

		var userid = $.cookie("userid");
		var nickname = $.cookie("nickname");
		var token = $.cookie("token");
		var login = $.cookie("login");

		console.log("cookie:"+userid+"-"+login+"-"+token+"-"+nickname);

		var secret = new can.Observe({userid:userid,nickname:nickname,token:token,login:login});

		new Login("#wrapper",{'secret':secret});		

		can.route.ready(true);
	
	});
})();