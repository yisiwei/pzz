(function(namespace) {

	Home = can.Control({
		init:function(element,options){
			//this.showHome();
			if(this.options.route === 'home' || this.options.route==""){
				this.showHome();
			}
		},
		showHome:function(){

			var nickname = this.options.secret.attr("nickname");
			var isLogin = false;
			if(nickname != null && nickname != ""){
				isLogin = true;
			}

			var el = this;
			Line.findAll({line_type:0},function(results){
				// var local_lines = results.filter("上下班拼车");
				// var long_lines = results.filter("长途拼车");
				// var need_lines = results.filter("乘客需求");
				el.element.html(can.view(
					"js/app/views/home/home.ejs",{
						local_lines:results,
						long_lines:results,
						need_lines:results
					}
				));
				$("#header-top").html(can.view(
					"js/app/views/head/headTop.ejs",{isLogin:isLogin,username:nickname}
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

			},function(error){
				console.log(error);
			});
			
		},
		'home route':function(){
			console.log("home load");
			this.showHome();			
		},
		'#logout click':function(){
			$.removeCookie("username");
			$.removeCookie("token");	
			this.options.secret.attr("username","");
			this.options.secret.attr("token","");
			//alert("退出成功");
			$("#header-top").html(can.view(
				"js/app/views/head/headTop.ejs",{isLogin:false}
			));
		}
	});
	

	// can.extend(namespace,{
	// 	Home:Home
	// })
	namespace.Home = Home;
})(window);