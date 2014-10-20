(function(namespace) {

	//HeadTop
	HeadTop = can.Control({
		init:function(element,options){
			// var search = window.location.search;
			var isLogin = false;
			var username = "admin";
			// if(search!=null){
			// 	var result = search.substr(1, search.length);
			// 	var arr = result.split("&");
			// 	for (var i = 0; i < arr.length; i++) {
			// 		var param = arr[i].split("=");
			// 		var name = param[0];
			// 		if (name == "username") {
			// 			isLogin = true;
			// 			username = param[1];
			// 		}
			// 		console.log(param);
			// 	};
			// }
			this.element.html(can.view(
				"js/app/views/head/headTop.ejs",{isLogin:isLogin,username:username}
			));
		},
		'#logout click':function() {
			/* Act on the event */
			$("#head-top-left").html(can.view(
				'js/app/views/head/logout.ejs'
			));
		}
	});
	//HeadBottom
	HeadBottom = can.Control({
		init:function(element,options){
			this.element.html(can.view(
				"js/app/views/head/headBottom.ejs"
			));
		},
		// '#menu-home click':function(el){
		// 	$("#nav li").removeClass('current');
		// 	el.parent().addClass('current');
		// 	alert(el.attr("id"));
		// },
		// '#menu-local click':function(el){
		// 	$("#nav li").removeClass('current');
		// 	el.parent().addClass('current');
		// },
		// '#menu-long click':function(el){
		// 	$("#nav li").removeClass('current');
		// 	el.parent().addClass('current');
		// },
		// '#menu-share click':function(el){
		// 	$("#nav li").removeClass('current');
		// 	el.parent().addClass('current');
		// },
		// '#menu-route click':function(el){
		// 	$("#nav li").removeClass('current');
		// 	el.parent().addClass('current');
		// }
	});

	//Banner
	Banner = can.Control({
		init:function(element,options){
			this.element.html(can.view(
				"js/app/views/head/banner.ejs"
			));
		}
	});

	//日记Model
	DiaryList = can.Control({
		init:function(element,options){
			this.element.html(can.view(
				"js/app/views/article/diaryListModel.ejs"
			));
		}
	});

	//路况Model
	RoadList = can.Control({
		init:function(element,options){
			this.element.html(can.view(
				"js/app/views/article/roadListModel.ejs"
			));
		}
	});

	//Footer
	Footer = can.Control({
		init:function(element,options){
			this.element.html(can.view(
				"js/app/views/footer/footer.ejs"
			));
		}
	});
})(window);