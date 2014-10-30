(function(namespace) {

	//发布线路
	RouteSuccess = can.Control({
		init:function(element,options){
			if(this.options.route === 'route_success'){
				this.showRouteSuccess();
			}
		},
		showRouteSuccess:function(){
			var isLogin = false;

			var userid = this.options.secret.attr("userid");
			var nickname = this.options.secret.attr("nickname");
			var token = this.options.secret.attr("token");
			var login = this.options.secret.attr("login");

			if(nickname != null && nickname != ""){
				isLogin = true;
			}

			this.element.html(can.view(
				"js/app/views/route/route_passenger_success.ejs",{}
			));

			$("#footer").html(can.view(
				"js/app/views/footer/footer.ejs"
			));

		},
		'route_success route':function(){
			this.showRouteSuccess();
		}

	});

	can.extend(namespace,{
		RouteSuccess:RouteSuccess
	})
})(window);