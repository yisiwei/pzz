(function(namespace) {
	//填写用户名
	FindPwdUsername = can.Control({
		init:function(element,options){
			//if(this.options.route === 'findPwd_username'){
				this.showFindPwdUsername();
			//}
		},
		showFindPwdUsername:function(){

			this.element.html(can.view(
				"js/app/views/findPwd/fp_username.ejs",{}
			));
			
			$("#header-top").html(can.view(
				"js/app/views/head/headTop.ejs",{isLogin:false,username:"",token:"",login:""}
			));

			$("#footer").html(can.view(
				"js/app/views/footer/footer2.ejs"
			));
			

		},
		// 'findPwd_username route':function(){
		// 	this.showFindPwdUsername();
		// },
		'#findPwd-verify click':function(){
			if($.trim($("#username").val()).length <= 0){
				$("#username-msg").addClass('crred fa fa-times-circle');
				$("#username-msg").text("请输入账号");	
				return;
			}
			var fpCode = $("#fp-code").val().toUpperCase();
			if($.trim(fpCode).length <= 0){
				$("#code-msg").addClass('crred fa fa-times-circle');
				$("#code-msg").text("请输入验证码");	
				return;
			}
			var codeValue = $("#codeValue").val();
			if (fpCode != codeValue) {
				//alert(codeValue+"--"+fpCode);
				$("#code-msg").addClass('crred fa fa-times-circle');
				$("#code-msg").text("验证码错误");
				createCode();
				$("#fp-code").val("");
				return;
			}
			if (fpCode === codeValue) {
				//alert("success");
			}

			//验证用户名是否存在
			//can.route.attr("route","findPwd_verify");
			window.location.href="findPwd_verify.html";
		},
		'#username blur':function(el,event){
			if($.trim(el.val()).length<=0){
				$("#username-msg").addClass('crred fa fa-times-circle');
				$("#username-msg").text("请输入账号");	
			}else{
				$("#username-msg").removeClass('crred fa fa-times-circle');
				$("#username-msg").text("");
			}
		}
	});
	//验证
	FindPwdVerify = can.Control({
		init:function(element,options){
			//if(this.options.route === 'findPwd_verify'){
				this.showFindPwdVerify();
			//}
		},
		showFindPwdVerify:function(){

			this.element.html(can.view(
				"js/app/views/findPwd/fp_verify.ejs",{}
			));

			$("#header-top").html(can.view(
				"js/app/views/head/headTop.ejs",{isLogin:false,username:"",token:"",login:""}
			));

			$("#footer").html(can.view(
				"js/app/views/footer/footer2.ejs"
			));

		},
		// 'findPwd_verify route':function(){
		// 	this.showFindPwdVerify();
		// },
		'#findPwd-newPwd click':function(){
			//can.route.attr("route","findPwd_newPwd");
			window.location.href="findPwd_newPwd.html";
		},
		'#send-verify-email click':function(){
			$("#verify-content").html(can.view(
				"js/app/views/findPwd/fp_send_email_success.ejs"
			));
		}
	});
	//设置新密码
	FindPwdNewPwd = can.Control({
		init:function(element,options){
			//if(this.options.route === 'findPwd_newPwd'){
				this.showFindPwdNewPwd();
			//}
		},
		showFindPwdNewPwd:function(){

			this.element.html(can.view(
				"js/app/views/findPwd/fp_newPwd.ejs",{}
			));

			$("#header-top").html(can.view(
				"js/app/views/head/headTop.ejs",{isLogin:false,username:"",token:"",login:""}
			));

			$("#footer").html(can.view(
				"js/app/views/footer/footer2.ejs"
			));
		},
		'#submit-btn click':function(el,event){
			window.location.href="findPwd_success.html";
		}
	});
	//成功
	FindPwdSuccess = can.Control({
		init:function(element,options){
			this.showFindPwdSuccess();
		},
		showFindPwdSuccess:function(){

			this.element.html(can.view(
				"js/app/views/findPwd/fp_success.ejs",{}
			));

			$("#header-top").html(can.view(
				"js/app/views/head/headTop.ejs",{isLogin:false,username:"",token:"",login:""}
			));

			$("#footer").html(can.view(
				"js/app/views/footer/footer2.ejs"
			));
		}
	});

	can.extend(namespace,{
		FindPwdUsername:FindPwdUsername
	})
})(window);