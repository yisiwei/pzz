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
							username:user.user_nickname,
							token:token,
							login:login
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
		//认证
		'#certificate-realname click':function(el){//实名认证
			var userid = this.options.secret.attr("userid");
			var token = this.options.secret.attr("token");
			var login = this.options.secret.attr("login");
			userid = parseInt(userid);

			$("#accordion li").removeClass('menu-current');
			el.parent().addClass('menu-current');

			Identity.find_identity_realname({
				auth_token:token,
				login:login,
				pzz_user_id:userid
			},function(identity,status){
				console.log(status);
				console.log(identity);
				if(identity != null){
					if(identity.identity_status == "pending"){//审核中
						$("#user-content").html(can.view(
							"js/app/views/userCenter/certificate/realname_wait.ejs",{identity:identity}
						));
					}else if(identity.identity_status == "failed"){
						$("#user-content").html(can.view(
							"js/app/views/userCenter/certificate/realname_fail.ejs",{identity:identity}
						));
					}else{
						$("#user-content").html(can.view(
							"js/app/views/userCenter/certificate/realname_success.ejs",{identity:identity}
						));
					}
				}else{
					
				}
			},function(error){
				//console.log(status);
				console.log(error.status);
				$("#user-content").html(can.view(
					"js/app/views/userCenter/certificate/realname.ejs"
				));
			});

			
		},
		'#identity-realname-btn click':function(el,event){//提交实名认证
			var userid = this.options.secret.attr("userid");
			var token = this.options.secret.attr("token");
			var login = this.options.secret.attr("login");

			if($("#identity_realname").val() == null || $("#identity_realname").val() == ""){
				$("#realname-name-msg").addClass('crred fa fa-times-circle');
				$("#realname-name-msg").text("请填写真实姓名");
				return;	
			}
			
			if($("#identity_card_no").val() == null || $("#identity_card_no").val() == ""){
				$("#realname-card_no-msg").addClass('crred fa fa-times-circle');
				$("#realname-card_no-msg").text("请填写有效身份证");
				return;	
			}
			
			if($("#identity_card_image").val() == null || $("#identity_card_image").val() == ""){
				$("#realname-card_image-msg").addClass('crred fa fa-times-circle');
				$("#realname-card_image-msg").text("请上传身份证扫描件");
				return;	
			}

			var identity = new Identity();
			var form = this.element.find("form");
			values = can.deparam(form.serialize());
			identity.attr(values);

			userid = parseInt(userid);
			//alert(Object.prototype.toString.apply(userid));
			// identity.attr("auth_token",token);
			// identity.attr("login",login);
			// identity.attr("pzz_user_id",userid);
			
			// identity.attr("identity_card_image",$("#card-image").attr("src"));
			var identity_card_image = $("#card-image").attr("src");
		
			Identity.identity_realname({
				auth_token:token,
				login:login,
				pzz_user_id:userid,
				identity_realname:identity.identity_realname,
				identity_gender:identity.identity_gender,
				identity_card_no:identity.identity_card_no,
				identity_card_image:identity_card_image
			},function(identity){
				console.log(identity);
				$("#user-content").html(can.view(
					"js/app/views/userCenter/certificate/realname_wait.ejs",{identity:identity}
				));
			},function(error){
				console.log(error);
			});
			//alert(identity.identity_realname);
		},
		'#identity_realname input':function(el,event){ //监听真实姓名输入框值变化
			var realname = el.val();
			if($.trim(realname).length>0){
				$("#realname-name-msg").removeClass('crred fa fa-times-circle');
				$("#realname-name-msg").text("");	
			}
		},
		'#identity_card_no input':function(el,event){ //监听身份证输入框值变化
			var card_no = el.val();
			if($.trim(card_no).length>0){
				$("#realname-card_no-msg").removeClass('crred fa fa-times-circle');
				$("#realname-card_no-msg").text("");	
			}
		},
		'#identity_realname_again click':function(el,event){//重新实名认证
			var userid = this.options.secret.attr("userid");
			var token = this.options.secret.attr("token");
			var login = this.options.secret.attr("login");
			Identity.find_identity_realname({
				auth_token:token,
				login:login,
				pzz_user_id:userid
			},function(identity){
				$("#user-content").html(can.view(
					"js/app/views/userCenter/certificate/realname_again.ejs",{identity:identity}
				));
			},function(error){

			});
			
		},
		'#identity_realname_again_btn click':function(el,event){//重新实名认证提交
			var userid = this.options.secret.attr("userid");
			var token = this.options.secret.attr("token");
			var login = this.options.secret.attr("login");

			if($("#identity_realname").val() == null || $("#identity_realname").val() == ""){
				$("#realname-name-msg").addClass('crred fa fa-times-circle');
				$("#realname-name-msg").text("请填写真实姓名");
				return;	
			}
			
			if($("#identity_card_no").val() == null || $("#identity_card_no").val() == ""){
				$("#realname-card_no-msg").addClass('crred fa fa-times-circle');
				$("#realname-card_no-msg").text("请填写有效身份证");
				return;	
			}
			
			if($("#identity_card_image").val() == null || $("#identity_card_image").val() == ""){
				$("#realname-card_image-msg").addClass('crred fa fa-times-circle');
				$("#realname-card_image-msg").text("请上传身份证扫描件");
				return;	
			}

			var identity = new Identity();
			var form = this.element.find("form");
			values = can.deparam(form.serialize());
			identity.attr(values);

			userid = parseInt(userid);
			var identity_card_image = $("#card-image").attr("src");

			

			Identity.update_identity_realname({
				auth_token:token,
				login:login,
				pzz_user_id:userid,
				id:identity.id,
				identity_realname:identity.identity_realname,
				identity_gender:identity.identity_gender,
				identity_card_no:identity.identity_card_no,
				identity_card_image:identity_card_image
			},function(identity){
				console.log(identity);
				$("#user-content").html(can.view(
					"js/app/views/userCenter/certificate/realname_wait.ejs",{identity:identity}
				));
			},function(error){
				console.log(error);
			});
		},
		'#certificate-driver click':function(el){//驾驶认证
			$("#accordion li").removeClass('menu-current');
			el.parent().addClass('menu-current');
			$("#user-content").html(can.view(
				"js/app/views/userCenter/certificate/driver.ejs"
			));
		},
		'#identity-driver-btn click':function(el,event){//驾驶认证提交
			var userid = this.options.secret.attr("userid");
			var token = this.options.secret.attr("token");
			var login = this.options.secret.attr("login");
			userid = parseInt(userid);

			var identity = new Identity();
			var form = this.element.find("form");
			values = can.deparam(form.serialize());
			identity.attr(values);

			Identity.identity_driver({
				auth_token:token,
				login:login,
				pzz_user_id:userid,
				identity_realname:identity.identity_realname,
				identity_gender:identity.identity_gender,
				identity_card_no:identity.identity_card_no,
				identity_card_image:identity_card_image
			},function(identity){
				console.log(identity);
			},function(error){
				console.log(error);
			});
		},
		'#certificate-car click':function(el){//车辆认证
			$("#accordion li").removeClass('menu-current');
			el.parent().addClass('menu-current');
			$("#user-content").html(can.view(
				"js/app/views/userCenter/certificate/car.ejs"
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
		'.driver-confirm-apply click':function(el,event){//司机同意申请
			var userid = this.options.secret.attr("userid");
			var token = this.options.secret.attr("token");
			var login = this.options.secret.attr("login");
			var id = el.attr("id").split("_")[1];
			userid = parseInt(userid);
			id = parseInt(id);
			Order.confirmOrder({
				auth_token:token,
				login:login,
				pzz_user_id:userid,
				id:id
			},function(orders){
				console.log(orders);
			},function(error){	
				console.log(error);
			});
		},
		'#myroute-passenger click':function(el,event){//我是乘客
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
		'.passenger-confirm-invite click':function(el,event){//乘客同意邀请
			var userid = this.options.secret.attr("userid");
			var token = this.options.secret.attr("token");
			var login = this.options.secret.attr("login");
			var id = el.attr("id").split("_")[1];
			userid = parseInt(userid);
			id = parseInt(id);
			Order.confirmOrder({
				auth_token:token,
				login:login,
				pzz_user_id:userid,
				id:id
			},function(orders){
				console.log(orders);
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

			$("#user-content").html(can.view(
				"js/app/views/userCenter/myroute/route.ejs"
			));

			Line.findLinesByUser({userid:userid,token:token,login:login}, function(lines){
				//console.log(lines.length);
				//使用each报错
				if(lines.length > 0){
					$("#myroute-list").html(can.view(
						"js/app/views/userCenter/myroute/routeList.ejs",{lines:lines}
					));
				}
			},function(error){
				console.log(error);
			});
		},
		'.addseat click':function(el,event){
			var t = el.parent().find('input[class*=numseat]'); 
	        t.val(parseInt(t.val())+1);
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
			var userid = this.options.secret.attr("userid");
			var token = this.options.secret.attr("token");
			var login = this.options.secret.attr("login");
			userid = parseInt(userid);
			Message.findMessageByUser({
				userid:userid,
				token:token,
				login:login
			},function(messages){
				console.log(messages);
				$("#messageList").html(can.view(
					"js/app/views/userCenter/message/messageList.ejs",{messages:messages}
				));
			},function(error){
				console.log(error);
			});

		},
		'.loadMessageDetail click':function(el,event){//查看消息
			var userid = this.options.secret.attr("userid");
			var token = this.options.secret.attr("token");
			var login = this.options.secret.attr("login");
			userid = parseInt(userid);

			var message_id = el.attr("id").split("_")[1];
			message_id = parseInt(message_id);
			alert(message_id);

			//查询消息
			Message.findMessageById({
				userid:userid,
				token:token,
				login:login,
				messageId:messageId
			},function(message){
				$("#message-detail-model").html(can.view(
					"js/app/views/userCenter/message/messageDetail.ejs",{message:message}
				));
				$("#message-detail-model").modal('show');
			},function(error){
				console.log(error);
			});
			

		},
		'.deleteMessage click':function(el,event){//删除消息
			if(confirm("确定要删除该消息吗？")){
				var userid = this.options.secret.attr("userid");
				var token = this.options.secret.attr("token");
				var login = this.options.secret.attr("login");
				userid = parseInt(userid);

				var message_id = el.attr("id").split("_")[1];
				message_id = parseInt(message_id);
				alert(message_id);

				//删除消息
				Message.findMessageById({
					userid:userid,
					token:token,
					login:login,
					messageId:messageId
				},function(message){
					$("#message-detail-model").html(can.view(
						"js/app/views/userCenter/message/messageDetail.ejs",{message:message}
					));
					$("#message-detail-model").modal('show');
				},function(error){
					console.log(error);
				});
			}
		}
		// '#car-mycar click':function(el,event){//车辆信息
		// 	$("#accordion li").removeClass('menu-current');
		// 	el.parent().addClass('menu-current');
		// 	$("#user-content").html(can.view(
		// 		"js/app/views/userCenter/car/mycar.ejs"
		// 	));
		// }
	});

	can.extend(namespace,{
		UserCenter:UserCenter
	});
})(window);