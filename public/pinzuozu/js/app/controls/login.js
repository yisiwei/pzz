(function(namespace) {

	Login = can.Control({
		init:function(element,options){
			if(this.options.route === 'login'){
				this.showLogin();
			}
		},
		showLogin:function(){

			var username = $.cookie("username");
			var password = $.cookie("password");
			var isRememberPwd = $.cookie("isRememberPwd");

			this.element.html(can.view(
				"js/app/views/login/login.ejs",{}
			));
			$("#login").html(can.view(
				"js/app/views/login/loginView.ejs"
			));
			$("#footer").html(can.view(
				"js/app/views/footer/footer2.ejs"
			));
			
			if (isRememberPwd == "1" ) {
				$("#username").val(username);
				$("#password").val(password);
				$("#isRememberPwd").prop('checked',true);
			}
		},
		'login route':function(){
			this.showLogin();
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
			var self = this;
			
			//can.route.attr("route","home");
			User.login({login:username,password:password},function(success){
				console.log("success:"+success.user_phone);
				
				$.cookie("userid",success.id);
				$.cookie("nickname",success.user_nickname);
				$.cookie("token",success.authentication_token);
				$.cookie("login",username);

				if ($("#isRememberPwd").prop("checked") == true) {
					$.cookie("username",username);
					$.cookie("password",password);
					$.cookie("isRememberPwd","1");
				}else{
					$.removeCookie("username");
					$.removeCookie("password");
					$.removeCookie("isRememberPwd");
				}
				
				self.options.secret.attr({'userid':success.id});
				self.options.secret.attr({'nickname':success.user_nickname});
				self.options.secret.attr({'token':success.authentication_token});
				self.options.secret.attr({'login':username});

				//console.log("line_id="+can.route.attr("id"));
				//var line_id = can.route.attr("id");
				
				can.route.attr("route","home");

			},function(error){
				console.log(error);
				$("#msg").text("用户名或密码错误");
			});
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