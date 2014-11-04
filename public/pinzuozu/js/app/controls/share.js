(function(namespace) {

	Share = can.Control({
		init:function(element,options){
			//if(this.options.route === 'share'){
				this.showShare();
			//}
		},
		showShare:function(){

			var token = this.options.secret.attr("token");
			var login = this.options.secret.attr("login");
			var nickname = this.options.secret.attr("nickname");
			var isLogin = false;
			if(nickname != null && nickname != ""){
				isLogin = true;
			}

			this.element.html(can.view(
				"js/app/views/share/share.ejs"
			));
			$("#header-top").html(can.view(
				"js/app/views/head/headTop.ejs",{isLogin:isLogin,username:nickname,token:token,login:login}
			));
			$("#header-bottom").html(can.view(
				"js/app/views/head/headBottom.ejs"
			));
			
			$("#footer").html(can.view(
				"js/app/views/footer/footer.ejs"
			));
			$("#menu-share").parent().addClass('current');

		}
	});

	ShareDiary = can.Control({
		init:function(element,options){
			this.showShareDiary();
		},
		showShareDiary:function(){

			var token = this.options.secret.attr("token");
			var login = this.options.secret.attr("login");
			var nickname = this.options.secret.attr("nickname");
			var isLogin = false;
			if(nickname != null && nickname != ""){
				isLogin = true;
			}

			this.element.html(can.view(
				"js/app/views/share/share_diary.ejs"
			));
			$("#header-top").html(can.view(
				"js/app/views/head/headTop.ejs",{isLogin:isLogin,username:nickname,token:token,login:login}
			));
			$("#header-bottom").html(can.view(
				"js/app/views/head/headBottom.ejs"
			));
			
			$("#footer").html(can.view(
				"js/app/views/footer/footer.ejs"
			));
			$("#menu-share").parent().addClass('current');

		}
	});

	//车辆信息
	ShareCar = can.Control({
		init:function(element,options){
			this.showShareCar();
		},
		showShareCar:function(){

			var token = this.options.secret.attr("token");
			var login = this.options.secret.attr("login");
			var nickname = this.options.secret.attr("nickname");
			var isLogin = false;
			if(nickname != null && nickname != ""){
				isLogin = true;
			}

			this.element.html(can.view(
				"js/app/views/share/share_car.ejs"
			));
			$("#header-top").html(can.view(
				"js/app/views/head/headTop.ejs",{isLogin:isLogin,username:nickname,token:token,login:login}
			));
			$("#header-bottom").html(can.view(
				"js/app/views/head/headBottom.ejs"
			));
			
			$("#footer").html(can.view(
				"js/app/views/footer/footer.ejs"
			));
			$("#menu-share").parent().addClass('current');

		}
	});

	ShareDetail = can.Control({
		init:function(element,options){
			this.showShareDetail();
		},
		showShareDetail:function(){

			var token = this.options.secret.attr("token");
			var login = this.options.secret.attr("login");
			var nickname = this.options.secret.attr("nickname");
			var isLogin = false;
			if(nickname != null && nickname != ""){
				isLogin = true;
			}

			//var id = can.route.attr("id");
			//console.log("id=="+can.route.attr("id"));

			var hash = window.location.hash;
			var id = hash.substr(1, hash.length);
			//console.log(id);

			this.element.html(can.view(
				"js/app/views/share/share_detail.ejs"
			));
			$("#header-top").html(can.view(
				"js/app/views/head/headTop.ejs",{isLogin:isLogin,username:nickname,token:token,login:login}
			));
			$("#header-bottom").html(can.view(
				"js/app/views/head/headBottom.ejs"
			));
			
			$("#footer").html(can.view(
				"js/app/views/footer/footer.ejs"
			));
			$("#menu-share").parent().addClass('current');

		}
	});

	can.extend(namespace,{
		Share:Share,
		ShareDetail:ShareDetail
	})
	//namespace.Share = Share;
})(window);