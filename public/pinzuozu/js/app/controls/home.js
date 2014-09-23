(function(namespace) {

	var Home = can.Control({
		init:function(element,options){
			this.showHome();
		},
		showHome:function(){
			// $("#banner").removeClass('banner-bg home-search-banner h500').addClass('banner-bg home-search-banner h500');
			// $("#banner").html(can.view(
   //      		"js/app/views/head/banner.ejs"
   //      	));

			var username = this.options.secret.attr("username");
			var isLogin = false;
			if(username != null && username != ""){
				isLogin = true;
			}

			var el = this;
			Line.findAll({},function(results){
				var local_lines = results.filter("上下班拼车");
				var long_lines = results.filter("长途拼车");
				var need_lines = results.filter("乘客需求");
				el.element.html(can.view(
					"js/app/views/home/home.ejs",{
						local_lines:local_lines,
						long_lines:long_lines,
						need_lines:need_lines
					}
				));
				$("#header-top").html(can.view(
					"js/app/views/head/headTop.ejs",{isLogin:isLogin,username:username}
				));
				$("#header-bottom").html(can.view(
					"js/app/views/head/headBottom.ejs"
				));
				$("#banner").html(can.view(
					"js/app/views/head/banner.ejs"
				));
				$("#footer").html(can.view(
					"js/app/views/footer/footer.ejs"
				));
				$("#menu-home").parent().addClass('current');
			});
			
		},
		'home route':function(){
			this.showHome();			
		}
	});
	
	//上下班拼车
	PincheLocalList = can.Control({
		init:function(element,options){
			var el = this;
			Line.findAll({},function(results){
				var lines = results.filter("上下班拼车");
				el.element.html(can.view(
					"js/app/views/home/pincheLocalList.ejs",{lines:lines}
				));
			});
			
		}
	});

	//长途拼车
	PincheLongList = can.Control({
		init:function(element,options){
			var el = this;
			Line.findAll({},function(results){
				var lines = results.filter("长途拼车");
				el.element.html(can.view(
					"js/app/views/home/pincheLongList.ejs",{lines:lines}
				));
			});
			
		}
	});
	//乘客需求
	PincheNeedList = can.Control({
		init:function(element,options){
			var el = this;
			Line.findAll({},function(results){
				var needs = results.filter("乘客需求");
				el.element.html(can.view(
					"js/app/views/home/pincheNeedList.ejs",{lines:needs}
				));
			});
			
		}
	});

	// can.extend(namespace,{
	// 	Home:Home
	// })
	namespace.Home = Home;
})(window);