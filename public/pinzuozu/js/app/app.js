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

		new Home("#wrapper",{'secret':secret,'route':route});
		new Local("#wrapper",{'secret':secret,'route':route});
		new Long("#wrapper",{'secret':secret,'route':route});
		new Need("#wrapper",{'secret':secret,'route':route});
		new Route("#wrapper",{'secret':secret,'route':route});
		new RoutePassenger("#wrapper",{'secret':secret,'route':route});
		new RouteDriver("#wrapper",{'secret':secret,'route':route});
		//路线详情
		new RouteDriverDetail("#wrapper",{'secret':secret,'route':route});
		new RoutePassengerDetail("#wrapper",{'secret':secret,'route':route});

		new UserCenter("#wrapper",{'secret':secret,'route':route});

		new Register("#wrapper",{'secret':secret,'route':route});
		new EmailActive("#wrapper",{'route':route});

		new Login("#wrapper",{'secret':secret,'route':route});
		new RetrievePwd("#wrapper",{'secret':secret,'route':route});

		can.route.ready(true);

	
	});
})();