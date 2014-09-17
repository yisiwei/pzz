(function(namespace) {
	//LoginView
	LoginView = can.Control({
		init:function(element,options){
			this.element.html(can.view(
				"js/app/views/loginView.ejs"
			));
		},
		'#submit click':function(el){
			this.login(el);
		},
		login:function(){
			var username = $("#username").val();
			var password = $("#password").val();
			if($.trim(username).length<=0){
				$("#username_msg").text("请输入账号");	
				return;
			}
			if($.trim(password).length<=0){
				$("#password_msg").text("请输入密码");	
				return;
			}
			User.findOne({id:1},function(user){
				//alert(user.user_phone);
				if(username === user.user_phone && 
					password === user.user_password){
					window.location.href = "index.html";
					
				}else{
					alert("用户名或密码错误");
				}
			});
		},
		'#isRememberPwd click':function(){
			alert($("#isRememberPwd").prop("checked"));
		},
		'#username input':function(){ //监听输入框值变化
			var username = $("#username").val();
			var password = $("#password").val();
			if($.trim(username).length>0){
				$("#username_msg").text("");	
			}
		},
		'#password input':function(){
			var password = $("#password").val();
			if($.trim(password).length>0){
				$("#password_msg").text("");	
			}
		}
	});

	can.extend(namespace,{
		LoginView:LoginView
	})
})(window);