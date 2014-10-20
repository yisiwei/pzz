(function(namespace) {
	//发布线路
	Route = can.Control({
		init:function(element,options){
			if(this.options.route === 'route'){
				this.showRoute();
			}
		},
		showRoute:function(){
			var isLogin = false;

			var userid = this.options.secret.attr("userid");
			var nickname = this.options.secret.attr("nickname");
			var token = this.options.secret.attr("token");
			var login = this.options.secret.attr("login");

			if(nickname != null && nickname != ""){
				isLogin = true;
			}

			this.element.html(can.view(
				"js/app/views/route/route.ejs",{}
			));

			$("#header-top").html(can.view(
				"js/app/views/head/headTop.ejs",{isLogin:isLogin,username:nickname}
			));
			$("#header-bottom").html(can.view(
				"js/app/views/head/headBottom.ejs"
			));
			// $("#banner").html(can.view(
			// 	"js/app/views/head/banner.ejs"
			// ));
			$("#footer").html(can.view(
				"js/app/views/footer/footer.ejs"
			));
			$("#menu-route").parent().addClass('current');
		},
		'route route':function(){
			this.showRoute();
		},
		'#select-passenger click':function(el,event) {//我是乘客
			var userid = this.options.secret.attr("userid");
			var nickname = this.options.secret.attr("nickname");
			var token = this.options.secret.attr("token");
			var login = this.options.secret.attr("login");
            $("#select-passenger").css({
                backgroundColor: '#6DC5DD',
                color: '#fff'
            });
            $("#select-passenger b").css("color","#fff");
            //window.location.href="#!route_passenger";
        	can.route.attr('route','route_passenger');
        },
        '#select-driver click':function(el,event) {//我是司机
            $("#select-driver").css({
                backgroundColor: '#6DC5DD',
                color: '#fff'
            });
            $("#select-driver b").css("color","#fff");
            //window.location.href="#!route_driver"
        	can.route.attr('route','route_driver');
        	// $("#banner").html(can.view(
        	// 	"js/app/views/head/banner2.ejs"
        	// ));
        	// $("#banner").removeClass('banner-bg home-search-banner h500')
        	// $("#main").html(can.view(
        	// 	"js/app/views/route/driver_route.ejs"
        	// ));
        }
        
	});

	can.extend(namespace,{
		Route:Route
	})
})(window);