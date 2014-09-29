(function(namespace) {
	
	RoutePassengerDetail = can.Control({
		init:function(element,options){
			if(this.options.route === 'passenger_detail'){
				this.showRoutePassengerDetail();
			}
		},
		showRoutePassengerDetail:function(){
			var isLogin = false;

			var userid = this.options.secret.attr("userid");
			var nickname = this.options.secret.attr("nickname");
			var token = this.options.secret.attr("token");
			var login = this.options.secret.attr("login");

			if(nickname != null && nickname != ""){
				isLogin = true;
			}
			var id = can.route.attr("id");
			console.log("id=="+can.route.attr("id"));
			var self = this;
			Line.findOne({id:id},function(line){
				console.log(line.extras.user_avatar_url);
				self.element.html(can.view(
					"js/app/views/detail/passenger_detail.ejs",{line:line}
				));

				$("#header-top").html(can.view(
					"js/app/views/head/headTop.ejs",{isLogin:isLogin,username:nickname}
				));
				$("#header-bottom").html(can.view(
					"js/app/views/head/headBottom.ejs"
				));
				$("#footer").html(can.view(
					"js/app/views/footer/footer.ejs"
				));
			},function(error){
				console.log(error);
			});

			
			//$("#menu-route").parent().addClass('current');
		},
		'passenger_detail route':function(){
			this.showRoutePassengerDetail();
		},
		'#lookContact click':function(el,event){
			var userid = this.options.secret.attr("userid");
			var token = this.options.secret.attr("token");
			var login = this.options.secret.attr("login");
			if(token == null || token == ""){
				can.route.attr("route","login");
			}else{
				$("#mymodal").modal('show');
			}
		},
		'#driver-join-submit click':function(el,event){//邀请加入
			var userid = this.options.secret.attr("userid");
			var token = this.options.secret.attr("token");
			var login = this.options.secret.attr("login");
			var pzz_line_id = can.route.attr("id");
			if(token == null || token == ""){
				can.route.attr("route","login");
			}else{

				userid = parseInt(userid);
				pzz_line_id = parseInt(pzz_line_id);

				console.log("-----"+Object.prototype.toString.apply(userid));
				console.log("-----"+Object.prototype.toString.apply(pzz_line_id));
				
				Order.joinLine({
					auth_token:token,
					login:login,
					pzz_user_id:userid,
					pzz_line_id:pzz_line_id
				},function(order){
					console.log(order);
				},function(error){
					console.log(error);
				});
			}
		}
        
	});

	can.extend(namespace,{
		RoutePassengerDetail:RoutePassengerDetail
	})
})(window);