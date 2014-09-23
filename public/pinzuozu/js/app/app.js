(function() {
	$(function() {

		can.route( ':route/:id' );
		//can.route('',{line_type:''});
		can.route.ready(false);

		// can.route.bind('change', function(ev, attr, how, newVal, oldVal) {
		// 	//if (how === 'set') Pages.initMenu();
		// });

		var secret = new can.Observe({username:'',token:''});

		new Home("#wrapper",{'secret':secret});
		new Local("#wrapper",{'secret':secret});
		new Long("#wrapper",{'secret':secret});
		new Need("#wrapper",{'secret':secret});
		new Route("#wrapper",{'secret':secret});
		new RoutePassenger("#wrapper",{'secret':secret});
		new RouteDriver("#wrapper",{'secret':secret});

		new UserCenter("#wrapper",{'secret':secret});

		new Register("#wrapper",{'secret':secret});
		new Login("#wrapper",{'secret':secret});

		can.route.ready(true);
	});
})();