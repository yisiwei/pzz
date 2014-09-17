(function(namespace) {
	//RegisterView
	RegisterView = can.Control({
		init:function(element,options){
			this.element.html(can.view(
				"js/app/views/registerViewPhone.ejs"
			));
		},
		'#submit click':function(el){//提交按钮
			this.register(el);
		},
		register:function(){//注册
			var userphone = $("#userphone").val();
			var code = $("#code").val();
			var password = $("#password").val();
			var cfPwd = $("#confirmPwd").val();
			var nickname = $("#nickname").val();
			var agreement = $("#agreement").prop("checked");
			if($.trim(userphone).length<=0){
				$("#phone-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
				$("#phone-msg").text("请输入手机号");		
				return;
			}
			if($.trim(password).length<=0){
				$("#wd-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
				$("#wd-msg").text("请输入密码");	
				return;
			}
			if($.trim(cfPwd).length<=0){
				$("#cfPwd-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
				$("#cfPwd-msg").text("请输入确认密码");	
				return;
			}
			if(cfPwd != password){
				$("#cfPwd-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
				$("#cfPwd-msg").text("两次密码输入不一致");	
				return;
			}
			if($.trim(nickname).length<=0){
				$("#nickname-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
				$("#nickname-msg").text("请输入姓名/昵称");	
				return;
			}
			if(agreement == false){
				$("#agreement-msg").addClass('crred fa fa-times-circle');
				$("#agreement-msg").text("请接受");	
				return;
			}

			// User.findByPhone({},function(user){
			// 	//alert(user.user_phone);
				
			// });
			User.findOne({id:1},function(user){
				//alert(user.user_phone);
				if(user.user_phone === userphone){
					$("#phone-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
					$("#phone-msg").text("手机号已被注册");		
					return;
				}
			});
			var user = new User();
			var form = this.element.find("form");
			values = can.deparam(form.serialize());
			user.attr(values).save();
			//alert(user.attr("user_phone"));
			window.location.href="user-login.html";

			//alert("success");
			// console.log("in");
			// $.ajax({
			// 	url: '/pzz_users/phone_registered',
			// 	type: 'GET',
			// 	data: "18612696655",
			// 	success:function(d){
			// 		alert(d);
			// 	},
			// 	error:function(d) {
			// 		alert(1);
			// 	}
			// });

			// User.findByPhone({},function(results){
			// 	alert("11");
			// });
		},
		'#mobile-reg click':function(){//邮箱注册
			$("#register").html(can.view(
				"js/app/views/registerViewMail.ejs"
			));
		},
		'#mail-reg click':function(){//手机注册
			$("#register").html(can.view(
				"js/app/views/registerViewPhone.ejs"
			));
		},
		'#userphone blur':function(){
			var phone = $("#userphone").val();
			if($.trim(phone).length<=0){
				$("#phone-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
				$("#phone-msg").text("请输入手机号");	
			}else if($.trim(phone).length!=11){
				$("#phone-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
				$("#phone-msg").text("请输入正确的手机号");
			}else{
				$("#phone-msg").removeClass('crred fa fa-times-circle').addClass('cr5a fa fa-check-circle');
				$("#phone-msg").text("");
			}
		},
		'#password blur':function(){
			var password = $("#password").val();
			if($.trim(password).length<=0){
				$("#pwd-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
				$("#pwd-msg").text("请输入密码");	
			}else{
				$("#pwd-msg").removeClass('crred fa fa-times-circle').addClass('cr5a fa fa-check-circle');
				$("#pwd-msg").text("");
			}
		},
		'#confirmPwd blur':function(){
			var password = $("#password").val();
			var confirmPwd = $("#confirmPwd").val();
			if($.trim(confirmPwd).length<=0){
				$("#cfPwd-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
				$("#cfPwd-msg").text("请输入确认密码");	
			}else if(confirmPwd != password){
				$("#cfPwd-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
				$("#cfPwd-msg").text("两次密码输入不一致");	
			}else{
				$("#cfPwd-msg").removeClass('crred fa fa-times-circle').addClass('cr5a fa fa-check-circle');
				$("#cfPwd-msg").text("");
			}
		},
		'#nickname blur':function(){
			var nickname = $("#nickname").val();
			if($.trim(nickname).length<=0){
				$("#nickname-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
				$("#nickname-msg").text("请输入姓名/昵称");	
			}else{
				$("#nickname-msg").removeClass('crred fa fa-times-circle').addClass('cr5a fa fa-check-circle');
				$("#nickname-msg").text("");
			}
		},
		'#agreement click':function(){
			if($("#agreement").prop("checked")==true){
				$("#agreement-msg").removeClass('crred fa fa-times-circle');
				$("#agreement-msg").text("");	
			}
		},
		'#code-btn click':function(){
			var userphone = $("#userphone").val();
			User.findOne({id:1},function(user){
				if(user.user_phone === userphone){
					$("#phone-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
					$("#phone-msg").text("手机号已被注册");		
				}
			});
		},
		'#userphone input':function(){ //监听输入框值变化
			var username = $("#userphone").val();
			// if($.trim(username).length>0){
			// 	$("#username_msg").text("");	
			// }
		},
		'#password input':function(){
			var password = $("#password").val();
			// if($.trim(password).length>0){
			// 	$("#password_msg").text("");	
			// }
		}
	});

	can.extend(namespace,{
		RegisterView:RegisterView
	})
})(window);