(function(namespace) {

	UserHome = can.Control({
		init:function(element,options){
			this.showUserHome();
		},
		showUserHome:function(){

			var token = this.options.secret.attr("token");
			var login = this.options.secret.attr("login");
			var nickname = this.options.secret.attr("nickname");
			var isLogin = false;
			if(nickname != null && nickname != ""){
				isLogin = true;
			}

			var hash = window.location.hash;
			var id = hash.substr(1,hash.length);
			console.log("user_id="+id);

			this.element.html(can.view(
				"js/app/views/home/userHome.ejs"
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

		}
	});


	can.extend(namespace,{
		UserHome:UserHome
	});
	
})(window);