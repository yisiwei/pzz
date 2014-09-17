(function(namespace) {
	//HeadTop
	HeadTop = can.Control({
		init:function(element,options){
			this.element.html(can.view(
				"js/app/views/head/headTop.ejs",{isLogin:'yes'}
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