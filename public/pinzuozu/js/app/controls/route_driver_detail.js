(function(namespace) {
	
	RouteDriverDetail = can.Control({
		init:function(element,options){
			if(this.options.route === 'driver_detail'){
				this.showRouteDriverDetail();
			}
		},
		showRouteDriverDetail:function(){
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
					"js/app/views/detail/driver_detail.ejs",{line:line}
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
		'driver_detail route':function(){
			this.showRouteDriverDetail();
		},
		'#passenger-submit click':function(el,event){
			var userid = this.options.secret.attr("userid");
			var token = this.options.secret.attr("token");
			var login = this.options.secret.attr("login");
			if(token == null || token == ""){
				can.route.attr("route","login");
			}else{

			}
		},
		'#seatCount change':function(el,event){
			//alert(el.val());
			$("#priceCount").val(el.val()*$("#single-price").val());
		}
        
	});

	can.extend(namespace,{
		RouteDriverDetail:RouteDriverDetail
	})
})(window);