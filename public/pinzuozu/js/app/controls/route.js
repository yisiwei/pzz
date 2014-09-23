(function(namespace) {
	//发布线路
	Route = can.Control({
		init:function(element,options){
			
		},
		'route route':function(){
			var username = this.options.secret.attr("username");
			var isLogin = false;
			if(username != null && username != ""){
				isLogin = true;
			}

			this.element.html(can.view(
				"js/app/views/route/route.ejs",{}
			));

			$("#header-top").html(can.view(
				"js/app/views/head/headTop.ejs",{isLogin:isLogin,username:username}
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
			$("#menu-route").parent().addClass('current');
		},
		'#select-passenger click':function(el,event) {
            $("#select-passenger").css({
                backgroundColor: '#6DC5DD',
                color: '#fff'
            });
            $("#select-passenger b").css("color","#fff");
            window.location.href="#!route_passenger";
        	// can.route.attr('route','route_passenger');
        	// $("#banner").html(can.view(
        	// 	"js/app/views/head/banner2.ejs"
        	// ));
        	// $("#banner").removeClass('banner-bg home-search-banner h500');
        	// $("#main").html(can.view(
        	// 	"js/app/views/route/passenger_route.ejs"
        	// ));
        },
        '#select-driver click':function(el,event) {
            $("#select-driver").css({
                backgroundColor: '#6DC5DD',
                color: '#fff'
            });
            $("#select-driver b").css("color","#fff");
            window.location.href="#!route_driver"
        	//can.route.attr('route','route_driver');
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