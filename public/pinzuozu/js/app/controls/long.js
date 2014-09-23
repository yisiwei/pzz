(function(namespace) {
	//长途拼车
	Long = can.Control({
		init:function(element,options){
			
		},
		'long route':function(){
			var username = this.options.secret.attr("username");
			var isLogin = false;
			if(username != null && username != ""){
				isLogin = true;
			}
			
			var el = this;
			Line.findAll({},function(results){
				var lines = results.filter("长途拼车");
				el.element.html(can.view(
					"js/app/views/long/longList.ejs",{lines:lines}
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
				$("#menu-long").parent().addClass('current');
			});
		}
	});

	can.extend(namespace,{
		Long:Long
	})
})(window);