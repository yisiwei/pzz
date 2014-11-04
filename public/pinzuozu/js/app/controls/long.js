(function(namespace) {
	//长途拼车
	Long = can.Control({
		init:function(element,options){
			//if(this.options.route === 'long'){
				this.showLong();
			//}
		},
		showLong:function(){
			var isLogin = false;

			var userid = this.options.secret.attr("userid");
			var nickname = this.options.secret.attr("nickname");
			var token = this.options.secret.attr("token");
			var login = this.options.secret.attr("login");

			if(userid != null && userid != ""){
				isLogin = true;
			}
			
			this.element.html(can.view(
				"js/app/views/long/long.ejs"
			));
			$("#header-top").html(can.view(
				"js/app/views/head/headTop.ejs",{isLogin:isLogin,username:nickname,token:token,login:login}
			));
			$("#header-bottom").html(can.view(
				"js/app/views/head/headBottom.ejs"
			));
			$("#banner").html(can.view(
				"js/app/views/head/banner_long.ejs"
			));
			$("#footer").html(can.view(
				"js/app/views/footer/footer.ejs"
			));
			$("#menu-long").parent().addClass('current');

			//var el = this;
			Line.findAll({user_type:1,line_type:1},function(lines){
				//var lines = results.filter("上下班拼车");
				console.log(lines.length);
				if(lines.length>0){
					$("#work-long").html(can.view(
						"js/app/views/long/longListView.ejs",{lines:lines}
					));
				}else{
					$("#work-long").html(can.view(
						"js/app/views/long/longNullView.ejs"
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
		// 'long route':function(){
		// 	this.showLong();
		// },
		"#search-btn click":function(){//搜索
			window.location.href="search.html";
		},
		"#detail-search-btn click":function(){//去搜索
			window.location.href="search.html";
		}
	});

	can.extend(namespace,{
		Long:Long
	})
})(window);