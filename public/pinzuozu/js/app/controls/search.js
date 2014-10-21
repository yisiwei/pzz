(function(namespace) {

	Search = can.Control({
		init:function(element,options){
			if(this.options.route === 'search'){
				this.showSearch();
			}
		},
		showSearch:function(){

			var nickname = this.options.secret.attr("nickname");
			var isLogin = false;
			if(nickname != null && nickname != ""){
				isLogin = true;
			}

			this.element.html(can.view(
				"js/app/views/search/search.ejs"
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
			//$("#menu-home").parent().addClass('current');

			$('.carousel').carousel({
            	interval: 2000
            });

            $("#search-driver").html(can.view(
				"js/app/views/search/search_driver.ejs"
			));

			$("#search-passenger").html(can.view(
				"js/app/views/search/search_passenger.ejs"
			));
			
		},
		'search route':function(){
			this.showSearch();			
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

	namespace.Home = Home;
})(window);