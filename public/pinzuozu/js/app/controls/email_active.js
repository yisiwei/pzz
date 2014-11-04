(function(namespace) {

	//LoginView
	EmailActiveSuccess = can.Control({
		init:function(element,options){
			this.showEmailActiveSuccess();
		},
		showEmailActiveSuccess:function(){
			this.element.html(can.view(
				"js/app/views/register/email_active_success.ejs",{}
			));
			$("#footer").html(can.view(
				"js/app/views/footer/footer2.ejs"
			));
		},
		'#submit-btn click':function(el,event){//提交
			var userPhone = $("#userphone").val();
			if($.trim(userPhone).length<=0){
				$("#phone-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
				$("#phone-msg").text("请输入手机号");	
				return;
			}else if(!checkMobile(userPhone)){
				$("#phone-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
				$("#phone-msg").text("请输入正确的手机号");
				return;
			}
			var code = $("#code").val();
			if($.trim(code).length <= 0){
				$("#code-msg").addClass('crred fa fa-times-circle');
				$("#code-msg").text("请输入验证码");	
				return;
			}
			alert("success");

		},
		'#code-btn click':function(el,event){//获取短信验证码
			getCode($("#code-btn"));
		},
		'#userphone blur':function(el,event){//手机验证
			var phone = el.val();

			if($.trim(phone).length<=0){
				$("#phone-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
				$("#phone-msg").text("请输入手机号");	
			}else if(!checkMobile(phone)){
				$("#phone-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
				$("#phone-msg").text("请输入正确的手机号");
			}else{
				$("#phone-msg").removeClass('crred fa fa-times-circle').addClass('cr5a fa fa-check-circle');
				$("#phone-msg").text("");
			}
		}
		
	});

	can.extend(namespace,{
		EmailActiveSuccess:EmailActiveSuccess
	});
})(window);