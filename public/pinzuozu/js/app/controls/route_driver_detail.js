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
		'#driver-lookContact click':function(el,event){//查看联系方式
			var userid = this.options.secret.attr("userid");
			var token = this.options.secret.attr("token");
			var login = this.options.secret.attr("login");
			if(token == null || token == ""){
				//can.route.attr("route","login");
				$("#driver-modal").html(can.view(
					"js/app/views/detail/message.ejs"
				));
				$("#driver-modal").modal('show');
			}else{
				$("#driver-modal").modal('show');
			}
		},
		'#passenger-join-submit click':function(el,event){//申请加入
			var userid = this.options.secret.attr("userid");
			var token = this.options.secret.attr("token");
			var login = this.options.secret.attr("login");
			var pzz_line_id = can.route.attr("id");
			if(token == null || token == ""){
				can.route.attr("route","login");
			}else{
				var line_participants = $("#seatCount").val();

				userid = parseInt(userid);
				pzz_line_id = parseInt(pzz_line_id);
				line_participants = parseInt(line_participants);

				console.log("-----"+Object.prototype.toString.apply(userid));
				console.log("-----"+Object.prototype.toString.apply(pzz_line_id));
				console.log("-----"+Object.prototype.toString.apply(line_participants));

				
				Order.joinLine({
					auth_token:token,
					login:login,
					pzz_user_id:userid,
					pzz_line_id:pzz_line_id,
					line_participants:line_participants
				},function(order){
					console.log(order);
				},function(error){
					console.log(error);
				});
			}
		},
		'#addseat click':function(el,event){
			var joinCount = $("#seatCount");
        	joinCount.val(parseInt(joinCount.val()) + 1);
        	var count = $("#line_participants").text();
        	if (parseInt(joinCount.val()) > parseInt(count)) {
        		joinCount.val(parseInt(count));
        	}
        	var priceCoute = (joinCount.val()*$("#single-price").text()).toFixed(1);
			$("#priceCount").val(priceCoute);
		},
		'#minseat click':function(el,event){
			var joinCount = $("#seatCount"); 
	        joinCount.val(parseInt(joinCount.val()) - 1);
	        if(parseInt(joinCount.val()) < 1){ 
	        	joinCount.val(1); 
	        }
	        var priceCoute = (joinCount.val()*$("#single-price").text()).toFixed(1);
			$("#priceCount").val(priceCoute);
		}
        
	});

	can.extend(namespace,{
		RouteDriverDetail:RouteDriverDetail
	})
})(window);