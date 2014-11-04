(function(namespace) {
	//RegisterView
	Register = can.Control({
		init:function(element,options){
			//if(this.options.route === 'register'){
				this.showRegister();
			//}
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
			
			// User.register(user,function(success){
			// 	//alert("success");
			// 	//window.location.href="register_active.html";

			// },function(error){
			// 	console.log(error.status+error.responseText);
			// 	$("#email-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
			// 	$("#email-msg").text("邮箱已被注册");	
			// });
			// $("#main").html(can.view(
			// 	"js/app/views/register/bind_phone.ejs"
			// ));
			$("#register_div").hide();
			$("#bind_phone_div").show();
		},
		'#phone-submit click':function(el,event){//手机注册提交
			var user_phone = $("#user_phone").val();
			var code = $("#code").val();
			var password = $("#password").val();
			var cfPwd = $("#confirmPwd").val();
			var nickname = $("#nickname").val();
			var agreement = $("#agreement").prop("checked");
			if($.trim(user_phone).length<=0){
				$("#phone-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
				$("#phone-msg").text("请输入手机号");		
				return;
			}
			var verification_code = this.options.secret.attr("code");
			if($.trim(code).length<=0){
				$("#code-msg").addClass('crred fa fa-times-circle');
				$("#code-msg").text("请输入验证码");	
				return;
			}
			// if(code != verification_code){
			// 	$("#code-msg").addClass('crred fa fa-times-circle');
			// 	$("#code-msg").text("验证码错误");	
			// 	return;
			// }
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

			User.findByPhone(user_phone,function(result){
				console.log(result);
				$("#phone-msg").removeClass('crred fa fa-times-circle').addClass('cr5a fa fa-check-circle');
				$("#phone-msg").text("");
			},function(error){
				console.log(error.status);
				if(error.status == '409'){
					$("#phone-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
					$("#phone-msg").text("手机已被注册");
					return;
				}
			});
			

			var user = new User();
			var form = this.element.find("form");
			values = can.deparam(form.serialize());
			user.attr(values);
			user.attr("verfication_code",code);
			alert(user.attr("verfication_code"));

			User.register(user,function(success){
				//alert("success");
				//can.route.attr("route","login");
				window.location.href="login.html";
			},function(error){
				console.log(error.status+error.responseText);
				$("#phone-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
				$("#phone-msg").text("手机已被注册");	
			});

		},
		'#code-btn click':function(){//获取短信验证码
			var user_phone = $("#user_phone").val();
			if($.trim(user_phone).length<=0){
				$("#phone-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
				$("#phone-msg").text("请输入手机号");	
				return;
			}else if(!checkMobile(user_phone)){
				$("#phone-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
				$("#phone-msg").text("请输入正确的手机号");
				return;
			}
			//判断手机号是否被注册
			User.findByPhone(user_phone,function(result){
				console.log(result);
			},function(error){
				console.log(error.status);
				if(error.status == '409'){
					$("#phone-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
					$("#phone-msg").text("手机已被注册");
					return;
				}
			});

			getCode($("#code-btn"));
			var self = this;
			User.getCode(user_phone,function(result){
				console.log(result.verification_code);
				self.options.secret.attr({'code':result.verification_code});
			},function(error){
				console.log(error);
			});
		},
		'#mobile-reg click':function(){//切换到邮箱注册界面
			$("#register").html(can.view(
				"js/app/views/register/registerViewMail.ejs"
			));
		},
		'#mail-reg click':function(){//切换到手机注册界面
			$("#register").html(can.view(
				"js/app/views/register/registerViewPhone.ejs"
			));
		},
		'#user_phone blur':function(el,event){//手机输入框验证
			var user_phone = el.val();

			if($.trim(user_phone).length<=0){
				$("#phone-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
				$("#phone-msg").text("请输入手机号");	
			}else if(!checkMobile(user_phone)){
				$("#phone-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
				$("#phone-msg").text("请输入正确的手机号");
			}else{
				//判断手机号是否被注册
				User.findByPhone(user_phone,function(result){
					console.log(result);
					$("#phone-msg").removeClass('crred fa fa-times-circle').addClass('cr5a fa fa-check-circle');
					$("#phone-msg").text("");
				},function(error){
					console.log(error.status);
					if(error.status == '409'){
						$("#phone-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
						$("#phone-msg").text("手机已被注册");
						return;
					}
				});
			}
		},
		'#code blur':function(el,event){//验证码输入框验证
			var verification_code = this.options.secret.attr("code");
			if($.trim(el.val()).length<=0){
				$("#code-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
				$("#code-msg").text("请输入验证码");	
			}
			// else if(el.val() != verification_code){
			//     $("#code-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
			// 	$("#code-msg").text("验证码错误");	
			// }
			else{
				$("#code-msg").removeClass('crred fa fa-times-circle').addClass('cr5a fa fa-check-circle');
				$("#code-msg").text("");
			}
		},
		'#email blur':function(el,event){//邮箱输入框验证
			if($.trim(el.val()).length<=0){
				$("#email-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
				$("#email-msg").text("请输入邮箱");	
			}else if(!checkEmail(el.val())){
			    $("#email-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
				$("#email-msg").text("请输入有效的邮箱");	
			}else{
				$("#email-msg").removeClass('crred fa fa-times-circle').addClass('cr5a fa fa-check-circle');
				$("#email-msg").text("");
			}
		},
		'#password blur':function(){//密码框验证
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
		'#confirmPwd blur':function(){//确认密码框验证
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
		'#nickname blur':function(){//昵称输入框验证
			var nickname = $("#nickname").val();
			if($.trim(nickname).length<=0){
				$("#nickname-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
				$("#nickname-msg").text("请输入姓名/昵称");	
			}else{
				$("#nickname-msg").removeClass('crred fa fa-times-circle').addClass('cr5a fa fa-check-circle');
				$("#nickname-msg").text("");
			}
		},
		'#agreement click':function(){//同意/接受协议验证
			if($("#agreement").prop("checked")==true){
				$("#agreement-msg").removeClass('crred fa fa-times-circle');
				$("#agreement-msg").text("");	
			}
		},
		// '#userphone input':function(){ //监听输入框值变化
		// 	var username = $("#userphone").val();
		// 	// if($.trim(username).length>0){
		// 	// 	$("#username_msg").text("");	
		// 	// }
		// },
		// '#password input':function(){
		// 	var password = $("#password").val();
		// 	// if($.trim(password).length>0){
		// 	// 	$("#password_msg").text("");	
		// 	// }
		// }
		'#bind-phone-btn click':function(el,event){//邮箱注册，绑定手机
			var email = $("#email").val();
			var password = $("#password").val();
			var cfPwd = $("#confirmPwd").val();
			var nickname = $("#nickname").val();

			var user_phone = $("#user_phone").val();
			var code = $("#code").val();
			if($.trim(user_phone).length<=0){
				$("#phone-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
				$("#phone-msg").text("请输入手机号");		
				return;
			}else if(!checkMobile(user_phone)){
				$("#phone-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
				$("#phone-msg").text("请输入正确的手机号");
				return;
			}

			var verification_code = this.options.secret.attr("code");
			if($.trim(code).length<=0){
				$("#code-msg").addClass('crred fa fa-times-circle');
				$("#code-msg").text("请输入验证码");	
				return;
			}
			if(code != verification_code){
				$("#code-msg").addClass('crred fa fa-times-circle');
				$("#code-msg").text("验证码错误");	
				return;
			}
			alert(email+"--"+user_phone);
		}
	});

	can.extend(namespace,{
		Register:Register
	})
})(window);