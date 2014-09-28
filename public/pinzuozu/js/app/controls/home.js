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

			this.element.html(can.view(
				"js/app/views/home/home.ejs"
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

			$('.carousel').carousel({
            	interval: 2000
            });

			Line.findAll({user_type:1,line_type:0,page:'1',per_page:'5'},function(results){
				// var local_lines = results.filter("上下班拼车");
				// var long_lines = results.filter("长途拼车");
				// var need_lines = results.filter("乘客需求");
				$("#work").html(can.view(
					"js/app/views/home/pincheLocalList.ejs",{
						local_lines:results
					}
				));
			},function(error){
				console.log(error);
			});

			Line.findAll({user_type:1,line_type:1,page:'1',per_page:'5'},function(results){
				if (results.length>0) {
					$("#long-distance").html(can.view(
						"js/app/views/home/pincheLongList.ejs",{
							long_lines:results
						}
					));	
				}else{
					$("#long-distance").html(can.view(
						"js/app/views/long/longNullView.ejs"
					));	
				}
				
			},function(error){
				console.log(error);
			});

			Line.findAll({user_type:0,page:'1',per_page:'5'},function(results){
				$("#passenger-need").html(can.view(
					"js/app/views/home/pincheNeedList.ejs",{
						need_lines:results
					}
				));
			},function(error){
				console.log(error);
			});
			
		},
		'home route':function(){
			console.log("home load");
			this.showHome();			
		},
		'#logout click':function(){
			$.removeCookie("userid");
			$.removeCookie("nickname");
			$.removeCookie("token");
			$.removeCookie("login");	

			this.options.secret.attr("userid","");
			this.options.secret.attr("nickname","");
			this.options.secret.attr("token","");
			this.options.secret.attr("login","");
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