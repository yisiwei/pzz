(function(namespace) {
	//乘客需求
	Need = can.Control({
		init:function(element,options){
			if(this.options.route === 'need'){
				this.showNeed();
			}
		},
		showNeed:function(opt){
			var isLogin = false;

			var userid = this.options.secret.attr("userid");
			var nickname = this.options.secret.attr("nickname");
			var token = this.options.secret.attr("token");
			var login = this.options.secret.attr("login");

			if(userid != null && userid != ""){
				isLogin = true;
			}
			
			this.element.html(can.view(
				"js/app/views/need/need.ejs"
			));
			$("#header-top").html(can.view(
				"js/app/views/head/headTop.ejs",{isLogin:isLogin,username:nickname,token:token,login:login}
			));
			$("#header-bottom").html(can.view(
				"js/app/views/head/headBottom.ejs"
			));
			
			$("#banner").html(can.view(
				"js/app/views/head/banner_local.ejs"
			));

			var currentCity;
			if(opt != "" && opt != null){
				//alert(opt);
				currentCity = opt;
				$("#currentCity").text(currentCity);
			}else{
				
				function myFun(result){
				  currentCity = result.name;
				  $("#currentCity").text(currentCity);
				}
				var myCity = new BMap.LocalCity();
				myCity.get(myFun);
			}

			$("#footer").html(can.view(
				"js/app/views/footer/footer.ejs"
			));
			$("#menu-need").parent().addClass('current');

			Line.findAll({user_type:0},function(lines){
				console.log(lines.length);
				if(lines.length>0){
					$("#work-need").html(can.view(
						"js/app/views/need/needListView.ejs",{lines:lines}
					));
				}else{
					$("#work-need").html(can.view(
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
		'need route':function(){
			this.showNeed();
		}
	});

	can.extend(namespace,{
		Need:Need
	})
})(window);