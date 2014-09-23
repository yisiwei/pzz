(function(namespace) {
	//乘客需求
	Need = can.Control({
		init:function(element,options){
			
		},
		'need route':function(){
			var username = this.options.secret.attr("username");
			var isLogin = false;
			if(username != null && username != ""){
				isLogin = true;
			}
			
			var el = this;
			Line.findAll({},function(results){
				var lines = results.filter("乘客需求");
				el.element.html(can.view(
					"js/app/views/need/needList.ejs",{lines:lines}
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
				$("#menu-need").parent().addClass('current');
			});
		}
	});

	can.extend(namespace,{
		Need:Need
	})
})(window);