(function(namespace) {
	//上下班拼座

	Local = can.Control({
		init:function(element,options){
			//if(this.options.route === 'local'){
				this.showLocal();
			//}
		},
		showLocal:function(){
			var isLogin = false;

			var userid = this.options.secret.attr("userid");
			var nickname = this.options.secret.attr("nickname");
			var token = this.options.secret.attr("token");
			var login = this.options.secret.attr("login");

			if(userid != null && userid != ""){
				isLogin = true;
			}

			this.element.html(can.view(
				"js/app/views/local/local.ejs"
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
			$("#menu-local").parent().addClass('current');

			//TODO 添加城市条件
			Line.findAll({user_type:1,line_type:0},function(lines){
				//var lines = results.filter("上下班拼车");
				console.log(lines);
				if(lines.length>0){
					$("#work-local").html(can.view(
						"js/app/views/local/localListView.ejs",{lines:lines}
					));
				}else{
					$("#work-long").html(can.view(
						"js/app/views/local/localNullView.ejs"
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
		// 'local route':function(){
		// 	this.showLocal();
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
			this.showLocal();
		},
		"#search-btn click":function(){//搜索
			//can.route.attr("route","search");
			window.location.href="search.html";
		},
		"#detail-search-btn click":function(){//去搜索
			//can.route.attr("route","search");
			window.location.href="search.html";
		}
	});

	// NextPrev = can.Control({
	// 	init:function(){
	// 		this.element.html(can.view('nextPrevStache',this.options));
	// 	},
	// 	".next click" : function(){
	//     	var paginate = this.options.paginate;
	//     	paginate.next();
	//   	},
	//   	".prev click" : function(){
	//     	var paginate = this.options.paginate;
	//     	paginate.prev();
	//   	}
	// });

	can.extend(namespace,{
		Local:Local
	})
})(window);