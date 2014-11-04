(function() {
	$(function() {

		//can.route('',{line_type:''});
		can.route.ready(false);

		can.route( ':route/:id' );

		// can.route.bind('change', function(ev, attr, how, newVal, oldVal) {
		// 	//if (how === 'set') Pages.initMenu();
		// });

		var userid = $.cookie("userid");
		var nickname = $.cookie("nickname");
		var token = $.cookie("token");
		var login = $.cookie("login");

		console.log("cookie:"+userid+"-"+login+"-"+token+"-"+nickname);
		//$.removeCookie("nickname");

		var hash = window.location.hash;
		var route = hash.substr(2, hash.length);
		route = route.split("&")[0];
		console.log(route);

		var secret = new can.Observe({userid:userid,nickname:nickname,token:token,login:login});

		new Need("#wrapper",{'secret':secret});		

		can.route.ready(true);
	
	});
})();