(function(namespace) {
	//乘客需求
	Need = can.Control({
		init:function(element,options){
			//if(this.options.route === 'need'){
				this.showNeed();
			//}
		},
		showNeed:function(){
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

			var currentCity = $.cookie("currentCity");//从cookie中取当前城市
			if(currentCity != "" && currentCity != null){
				//alert(opt);
				//currentCity = opt;
				$("#currentCity").text(currentCity);
			}else{//定位当前城市
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
		// 'need route':function(){
		// 	this.showNeed();
		// },
		'#slectcity click':function(el,event){//切换城市
			$("#main").html(can.view(
				"js/app/views/head/city.ejs"
			));
		},
		'.city click':function(el,event){//选择城市后跳回来
			//console.log("选择城市："+el.attr("title"));
			$.cookie("currentCity",el.attr("title"));//将选择的城市存到cookie
			//can.route.attr({"route":"local","city":el.attr("title")});
			this.showNeed();
		},
		"#search-btn click":function(){//搜索
			window.location.href="search.html";
		},
		"#detail-search-btn click":function(){//去搜索
			window.location.href="search.html";
		}
	});

	can.extend(namespace,{
		Need:Need
	})
})(window);