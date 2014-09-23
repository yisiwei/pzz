(function(namespace) {

	UserCenter = can.Control({
		init:function(element,options){

		},
		showUserCenter:function(){
			var username = this.options.secret.attr("username");
			var isLogin = false;
			if(username != null && username != ""){
				isLogin = true;
			}

			this.element.html(can.view(
				"js/app/views/userCenter/userCenter.ejs",{}
			));
			$("#header-top").html(can.view(
				"js/app/views/head/headTop.ejs",{isLogin:isLogin,username:username}
			));
			$("#header-bottom").html(can.view(
				"js/app/views/head/headBottom.ejs"
			));
			$("#footer").html(can.view(
				"js/app/views/footer/footer.ejs"
			));
			$("#user-menu").html(can.view(
				"js/app/views/userCenter/userMenu.ejs"
			));
			$("#user-content").html(can.view(
				"js/app/views/userCenter/user_index.ejs"
			));
		},
		'userCenter route':function(){
			this.showUserCenter();
		},
		'#account-basic click':function(el){
			//el.parent().siblings().removeClass('menu-current');
			$("#accordion li").removeClass('menu-current');
			el.parent().addClass('menu-current');
			$("#user-content").html(can.view(
				"js/app/views/userCenter/account/basic.ejs"
			));
		},
		'#account-header click':function(el){
			$("#accordion li").removeClass('menu-current');
			el.parent().addClass('menu-current');
			$("#user-content").html(can.view(
				"js/app/views/userCenter/account/header.ejs"
			));
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
		'#myroute-passenger click':function(el){
			$("#accordion li").removeClass('menu-current');
			el.parent().addClass('menu-current');
			$("#user-content").html(can.view(
				"js/app/views/userCenter/myroute/passenger.ejs"
			));
		},
		'#myroute-driver click':function(el){
			$("#accordion li").removeClass('menu-current');
			el.parent().addClass('menu-current');
			$("#user-content").html(can.view(
				"js/app/views/userCenter/myroute/driver.ejs"
			));
		},
		'#myroute-route click':function(el){
			$("#accordion li").removeClass('menu-current');
			el.parent().addClass('menu-current');
			$("#user-content").html(can.view(
				"js/app/views/userCenter/myroute/route.ejs"
			));
		}
	});

	can.extend(namespace,{
		UserCenter:UserCenter
	})
})(window);