(function(namespace) {

	//LoginView
	Login = can.Control({
		init:function(element,options){
			
		},
		'login route':function(){
			this.element.html(can.view(
				"js/app/views/login/login.ejs",{}
			));
			$("#login").html(can.view(
				"js/app/views/login/loginView.ejs"
			));
			$("#footer").html(can.view(
				"js/app/views/footer/footer.ejs"
			));
		},
		'#submit click':function(el,event){
			var username = $("#username").val();
			var password = $("#password").val();

			if($.trim(username).length<=0){
				$("#msg").text("请输入账号");	
				return;
			}
			if($.trim(password).length<=0){
				$("#msg").text("请输入密码");	
				return;
			}
			this.options.secret.attr({'username':username});
			this.options.secret.attr({'token':password});
			//$.cookie("username",username);
			//$.cookie("token",password);
			can.route.attr("route","home");
			// User.login({login:username,password:password}).done(
			// 	function(data, textStatus, xhr){
			// 		console.log(textStatus+"-"+xhr.status);
			// 		if(xhr.status==200){
			// 			//Secret.attr("username",data.email);
			// 			//Secret.attr("token",data.authentication_token);
			// 			// window.location.href = "index.html?username="
			// 			// +data.email+"&token="+data.authentication_token;
			// 			//can.route.attr("");
			// 			can.route.attr("route","home");
			// 		}else{ 
			// 			$("#msg").text("用户名或密码错误");
			// 		}
			// 	}
			// );
		},
		'#isRememberPwd click':function(el,event){//记住密码
			//alert($("#isRememberPwd").prop("checked"));
		},
		'#username input':function(el,event){ //监听输入框值变化
			var username = el.val();
			if($.trim(username).length>0){
				$("#msg").text("");	
			}
		},
		'#password input':function(el,event){
			var password = el.val();
			if($.trim(password).length>0){
				$("#msg").text("");	
			}
		}
	});

	can.extend(namespace,{
		Login:Login
	});
})(window);