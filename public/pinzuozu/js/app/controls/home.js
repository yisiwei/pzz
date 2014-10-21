(function(namespace) {

	Home = can.Control({
		init:function(element,options){
			//this.showHome();
			if(this.options.route === 'home' || this.options.route==""){
				this.showHome();
			}
		},
		showHome:function(){
			var token = this.options.secret.attr("token");
			var login = this.options.secret.attr("login");
			var nickname = this.options.secret.attr("nickname");
			var isLogin = false;
			if(nickname != null && nickname != ""){
				isLogin = true;
			}

			this.element.html(can.view(
				"js/app/views/home/home.ejs"
			));
			$("#header-top").html(can.view(
				"js/app/views/head/headTop.ejs",{isLogin:isLogin,username:nickname,token:token,login:login}
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
				if (results.length>0) {
					$("#work").html(can.view(
						"js/app/views/home/pincheLocalList.ejs",{
							local_lines:results
						}
					));
				}else{
					$("#work").html(can.view(
						"js/app/views/local/localNullView.ejs"
					));	
				}
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
				if (results.length>0) {
					$("#passenger-need").html(can.view(
						"js/app/views/home/pincheNeedList.ejs",{
							need_lines:results
						}
					));
				}else{
					$("#passenger-need").html(can.view(
						"js/app/views/need/needNullView.ejs"
					));	
				}
			},function(error){
				console.log(error);
			});

			User.findAll({page:"1",per_page:"9"},function(users){
				console.log(users);
				$("#all-user").html(can.view(
					"js/app/views/home/users.ejs",{users:users}
				));
			},function(error){
				console.log(error);
			});
			
		},
		'home route':function(){
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
		},
		"#search-btn click":function(){
			can.route.attr("route","search");
		}
	});

	// can.extend(namespace,{
	// 	Home:Home
	// })
	namespace.Home = Home;
})(window);