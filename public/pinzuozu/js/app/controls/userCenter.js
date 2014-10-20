(function(namespace) {

	UserCenter = can.Control({
		init:function(element,options){
			if(this.options.route === 'userCenter'){
				this.showUserCenter();
			}
		},
		showUserCenter:function(){
			var userid = this.options.secret.attr("userid");
			var nickname = this.options.secret.attr("nickname");
			var token = this.options.secret.attr("token");
			var login = this.options.secret.attr("login");
		
			console.log("userid="+userid);
			var self = this;
			if (userid != null && userid != "") {
				
				User.findById({id:userid,token:token,login:login},function(user){
					console.log(user.user_phone);
					self.element.html(can.view(
						"js/app/views/userCenter/userCenter.ejs",{
							username:user.user_nickname
						}
					));
					$("#footer").html(can.view(
						"js/app/views/footer/footer.ejs"
					));
					$("#user-menu").html(can.view(
						"js/app/views/userCenter/userMenu.ejs",{user:user}
					));
					$("#user-content").html(can.view(
						"js/app/views/userCenter/user_index.ejs",{user:user}
					));
				},function(error){
					console.log(error);
					//can.route.attr("route","login");
				});
			}else{
				can.route.attr("route","login");
			}
			
		},
		'userCenter route':function(){
			this.showUserCenter();
		},
		'#basic-btn click':function(el,event){//修改基本信息
			var user = new User();
			var form = this.element.find("form");
			values = can.deparam(form.serialize());
			user.attr(values);
			var token = this.options.secret.attr("token");
			var login = this.options.secret.attr("login");
			user.attr("auth_token",token);
			user.attr("login",login);
			console.log("QQ:"+user.user_qq);
			User.update(user,function(success){
				console.log(success);
				//can.route.attr("route","userCenter");

			},function(error){
				console.log(error);
			});
		},
		'#logout click':function(el,event){//退出
			this.options.secret.attr("username","");
			this.options.secret.attr("token","");
			//TODO 清除cookie
			can.route.attr("route","home");
		},
		'#account-basic click':function(el){//基本信息
			//el.parent().siblings().removeClass('menu-current');
			$("#accordion li").removeClass('menu-current');
			el.parent().addClass('menu-current');
			
			var userid = this.options.secret.attr("userid");
			var nickname = this.options.secret.attr("nickname");
			var token = this.options.secret.attr("token");
			var login = this.options.secret.attr("login");
			User.findById({id:userid,token:token,login:login},function(user){
				console.log(user.user_phone);
				$("#user-content").html(can.view(
					"js/app/views/userCenter/account/basic.ejs",{user:user}
				));
			},function(error){
				console.log(error);
				//can.route.attr("route","login");
			});

		},
		'#account-header click':function(el){//头像
			$("#accordion li").removeClass('menu-current');
			el.parent().addClass('menu-current');

			var userid = this.options.secret.attr("userid");
			var nickname = this.options.secret.attr("nickname");
			var token = this.options.secret.attr("token");
			var login = this.options.secret.attr("login");

			User.findById({id:userid,token:token,login:login},function(user){
				// console.log(user.user_phone);
				$("#user-content").html(can.view(
					"js/app/views/userCenter/account/header.ejs",{user:user}
				));
			},function(error){
				console.log(error);
			});
		},
		'#save_btn click':function(el,event){//修改头像
			var token = this.options.secret.attr("token");
			var login = this.options.secret.attr("login");
            
            var data = cutter.submit();
            //alert("x=" + data.x + "\ny=" + data.y + "\nw=" + data.w + "\nh=" + 
            	//data.h + "\ns=" + $("#area-jcrop img").attr("src"));
			
			$("#x").val(data.x);
			$("#y").val(data.y);
			$("#w").val(data.w);
			$("#h").val(data.h);
			
			var user = new User();
			var form = this.element.find("form");
			values = can.deparam(form.serialize());
			user.attr(values);

			user.attr("auth_token",token);
			user.attr("login",login);
			user.attr("user_avatar",$("#area-jcrop img").attr("src"));
			
			//console.log($("#area-jcrop img").attr("src"));
			var self = this;
			User.updateAvatar(user,function(success){
				console.log(success);
				self.showUserCenter();
				//window.location.reload();
			},function(error){
				console.log(error);
			});
		},
		'#account-number click':function(el){
			$("#accordion li").removeClass('menu-current');
			el.parent().addClass('menu-current');
			$("#user-content").html(can.view(
				"js/app/views/userCenter/account/number.ejs"
			));
		},
		'#account-payrecord click':function(el){
			$("#accordion li").removeClass('menu-current');
			el.parent().addClass('menu-current');
			$("#user-content").html(can.view(
				"js/app/views/userCenter/account/payrecord.ejs"
			));
		},
		'#account-awardrecord click':function(el){
			$("#accordion li").removeClass('menu-current');
			el.parent().addClass('menu-current');
			$("#user-content").html(can.view(
				"js/app/views/userCenter/account/awardrecord.ejs"
			));
		},

		'#certificate-realname click':function(el){
			$("#accordion li").removeClass('menu-current');
			el.parent().addClass('menu-current');
			$("#user-content").html(can.view(
				"js/app/views/userCenter/certificate/realname.ejs"
			));
		},
		'#certificate-driver click':function(el){
			$("#accordion li").removeClass('menu-current');
			el.parent().addClass('menu-current');
			$("#user-content").html(can.view(
				"js/app/views/userCenter/certificate/driver.ejs"
			));
		},
		//我的拼座
		'#myroute-driver click':function(el){//我是司机
			var userid = this.options.secret.attr("userid");
			var token = this.options.secret.attr("token");
			var login = this.options.secret.attr("login");

			$("#accordion li").removeClass('menu-current');
			el.parent().addClass('menu-current');
			
			$("#user-content").html(can.view(
				"js/app/views/userCenter/myroute/driver.ejs"
			));

			userid = parseInt(userid);
			Order.findOrdersByUser({//申请加入的
				auth_token:token,
				login:login,
				pzz_user_id:userid,
				order_type:'driver',
				order_status:'wait_confirm_by_driver'
			},function(orders){
				console.log(orders);
				$("#driver-apply").html(can.view(
					"js/app/views/userCenter/myroute/driver_apply.ejs",{orders:orders}
				));
			},function(error){
				console.log(error);
			});

			Order.findOrdersByUser({//我邀请加入的
				auth_token:token,
				login:login,
				pzz_user_id:userid,
				order_type:'driver',
				order_status:'wait_confirm_by_passenger'
			},function(orders){
				console.log(orders);
				$("#driver-invite").html(can.view(
					"js/app/views/userCenter/myroute/driver_invite.ejs",{orders:orders}
				));
			},function(error){
				console.log(error);
			});

		},
		'#myroute-passenger click':function(el){//我是乘客
			var userid = this.options.secret.attr("userid");
			var token = this.options.secret.attr("token");
			var login = this.options.secret.attr("login");

			$("#accordion li").removeClass('menu-current');
			el.parent().addClass('menu-current');
			$("#user-content").html(can.view(
				"js/app/views/userCenter/myroute/passenger.ejs"
			));

			userid = parseInt(userid);

			Order.findOrdersByUser({
				auth_token:token,
				login:login,
				pzz_user_id:userid,
				order_type:'passenger',
				order_status:'wait_confirm_by_driver'
			},function(orders){
				console.log(orders);
				$("#passenger-apply").html(can.view(
					"js/app/views/userCenter/myroute/passenger_apply.ejs",{orders:orders}
				));
			},function(error){
				console.log(error);
			});

			Order.findOrdersByUser({
				auth_token:token,
				login:login,
				pzz_user_id:userid,
				order_type:'passenger',
				order_status:'wait_confirm_by_passenger'
			},function(orders){
				console.log(orders);
				$("#passenger-invite").html(can.view(
					"js/app/views/userCenter/myroute/passenger_invite.ejs",{orders:orders}
				));
			},function(error){
				console.log(error);
			});
		},
		'#myroute-route click':function(el){//我的线路
			$("#accordion li").removeClass('menu-current');
			el.parent().addClass('menu-current');

			var userid = this.options.secret.attr("userid");
			var nickname = this.options.secret.attr("nickname");
			var token = this.options.secret.attr("token");
			var login = this.options.secret.attr("login");

			Line.findLinesByUser({userid:userid,token:token,login:login}, function(lines){
				console.log(lines.length+"-"+lines[1].user_nickname);
				//使用each报错
				$("#user-content").html(can.view(
					"js/app/views/userCenter/myroute/route.ejs",{lines:lines}
				));
			},function(error){
				console.log(error);
			});
		},
		'.addseat click':function(el,event){
			var t = el.parent().find('input[class*=numseat]'); 
	        t.val(parseInt(t.val())+1);
	        // setTotal(); 
		},
		'.minseat click':function(el,event){
			var t = el.parent().find('input[class*=numseat]'); 
	        t.val(parseInt(t.val())-1);
	        if(parseInt(t.val())<0){ 
	        	t.val(0); 
	        }
		},
		'.line_participants_available click':function(el,event){//修改座位数量
			var userid = this.options.secret.attr("userid");
			var token = this.options.secret.attr("token");
			var login = this.options.secret.attr("login");
			
			var line_participants_available = $("#line_participants_available"+el.attr("id")).val();
			//alert(line_participants);
			line_participants_available = parseInt(line_participants_available);

			Line.updateLineParticipants({
				userid:userid,
				token:token,
				login:login,
				id:el.attr("id"),
				line_participants_available:line_participants_available
			},function(success){
				console.log("修改成功");
				console.log(success);
			},function(error){
				console.log(error);
			});
		},
		'.cancelLine click':function(el,event){
			if(confirm("确定要取消该线路吗？")){
				var userid = this.options.secret.attr("userid");
				var token = this.options.secret.attr("token");
				var login = this.options.secret.attr("login");
				var id = el.attr("id").split("_")[1];
				Line.cancelLine({
					userid:userid,
					token:token,
					login:login,
					id:id
				},function(success){
					console.log("修改成功");
					console.log(success);
				},function(error){
					console.log(error);
				});
			}
		},
		'#share-myarticle click':function(el,event){//我的帖子
			$("#accordion li").removeClass('menu-current');
			el.parent().addClass('menu-current');
			$("#user-content").html(can.view(
				"js/app/views/userCenter/share/myarticle.ejs"
			));
		},
		'#message-message click':function(el,event){//通知消息
			$("#accordion li").removeClass('menu-current');
			el.parent().addClass('menu-current');
			$("#user-content").html(can.view(
				"js/app/views/userCenter/message/message.ejs"
			));
		},
		'#car-mycar click':function(el,event){//车辆信息
			$("#accordion li").removeClass('menu-current');
			el.parent().addClass('menu-current');
			$("#user-content").html(can.view(
				"js/app/views/userCenter/car/mycar.ejs"
			));
		},
	});

	can.extend(namespace,{
		UserCenter:UserCenter
	});
})(window);