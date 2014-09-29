(function(namespace) {
	//RegisterView
	Register = can.Control({
		init:function(element,options){
			if(this.options.route === 'register'){
				this.showRegister();
			}
		},
		showRegister:function(){
			this.element.html(can.view(
				"js/app/views/register/register.ejs"
			));
			$("#register").html(can.view(
				"js/app/views/register/registerViewPhone.ejs"
			));
			$("#footer").html(can.view(
				"js/app/views/footer/footer.ejs"
			));
		},
		'register route':function(){
			this.showRegister();
		},
		'#email-submit click':function(el,event){//邮箱注册提交

			var email = $("#email").val();
			var password = $("#password").val();
			var cfPwd = $("#confirmPwd").val();
			var nickname = $("#nickname").val();
			var agreement = $("#agreement").prop("checked");
			if($.trim(email).length<=0){
				$("#email-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
				$("#email-msg").text("请输入邮箱");		
				return;
			}
			if($.trim(password).length<=0){
				$("#pwd-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
				$("#pwd-msg").text("请输入密码");	
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

			//alert("a");
			var user = new User();
			var form = this.element.find("form");
			var values = can.deparam(form.serialize());
			user.attr(values);

			// user.bind("created", function(ev){
			//   	console.log("created");
			// });
			//alert(user.email);
			// var results = user.save();
			// console.log("返回："+results[0]);

			// console.log("返回："+results)
		 // 	var err = eval("(" + results + ")");
			// 	console.log("返回："+err.userp_hone);
			// 	$("#phone-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
			// $("#phone-msg").text("手机号已被注册");	
			User.register(user,function(success){
				alert("success");
			},function(error){
				console.log(error.status+error.responseText);
				$("#email-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
				$("#email-msg").text("邮箱已被注册");	
			});
			
		},
		'#phone-submit click':function(el,event){//手机注册提交
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
				$("#pwd-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
				$("#pwd-msg").text("请输入密码");	
				return;
			}
			if($.trim(password).length<3){
				$("#pwd-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
				$("#pwd-msg").text("密码长度最少3位");	
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

			var user = new User();
			var form = this.element.find("form");
			values = can.deparam(form.serialize());
			user.attr(values);
			//alert(user.attr("user_phone"));

			User.register(user,function(success){
				alert("success");
				can.route.attr("route","login");
			},function(error){
				console.log(error.status+error.responseText);
				$("#phone-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
				$("#phone-msg").text("手机已被注册");	
			});
			

		},
		'#code-btn click':function(){//获取短信验证码
			var userphone = $("#userphone").val();
			User.findByPhone(userphone,function(success){
				alert("已发送");
			},function(error){
				$("#phone-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
				$("#phone-msg").text("手机已被注册");
			});
		},
		'#mobile-reg click':function(){//邮箱注册
			$("#register").html(can.view(
				"js/app/views/register/registerViewMail.ejs"
			));
		},
		'#mail-reg click':function(){//手机注册
			$("#register").html(can.view(
				"js/app/views/register/registerViewPhone.ejs"
			));
		},
		'#userphone blur':function(){//手机验证
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
				// User.findByPhone(phone,function(success){
				// 	alert("已发送");
				// 	$("#phone-msg").removeClass('crred fa fa-times-circle').addClass('cr5a fa fa-check-circle');
				// 	$("#phone-msg").text("");
				// },function(error){
				// 	$("#phone-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
				// 	$("#phone-msg").text("手机已被注册");
				// });
			}
		},
		'#email blur':function(el,event){
			if($.trim(el.val()).length<=0){
				$("#email-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
				$("#email-msg").text("请输入邮箱");	
			}else{
				$("#email-msg").removeClass('crred fa fa-times-circle').addClass('cr5a fa fa-check-circle');
				$("#email-msg").text("");
			}
		},
		'#password blur':function(){
			var password = $("#password").val();
			if($.trim(password).length<=0){
				$("#pwd-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
				$("#pwd-msg").text("请输入密码");	
			}else if($.trim(password).length<3){
				$("#pwd-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
				$("#pwd-msg").text("密码长度最少3位");
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
		Register:Register
	})
})(window);