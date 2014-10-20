(function(namespace) {

	//HeadTop
	HeadTop = can.Control({
		init:function(element,options){
			this.element.html(can.view(
				"js/app/views/head/headTop.ejs",{isLogin:'yes'}
			));
		},
		'#logout click':function() {
			/* Act on the event */
			$("#head-top-left").html(can.view(
				'js/app/views/head/logout.ejs'
			));
		}
	});
	//HeadBottom
	HeadBottom = can.Control({
		init:function(element,options){
			this.element.html(can.view(
				"js/app/views/head/headBottom.ejs"
			));
		}
	});

	$("#userMsg a").bind("click",function(ev){

	});

	//left menu
	Menu = can.Control({
		init:function(element,options){
			this.element.html(can.view(
				"js/app/views/userCenter/menu.ejs"
			));
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

	UserContent = can.Control({
		init:function(element,options){
			this.element.html(can.view(
				"js/app/views/userCenter/user_index.ejs"
			));
		}
	});


	//foot
	Footer = can.Control({
		init:function(element,options){
			this.element.html(can.view(
				"js/app/views/footer/footer.ejs"
			));
		}
	});

	can.extend(namespace,{

	})
})(window);