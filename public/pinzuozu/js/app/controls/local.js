(function(namespace) {
	//上下班拼座
	Local = can.Control({
		init:function(element,options){

		},
		showLocal:function(){
			var username = this.options.secret.attr("username");
			var isLogin = false;
			if(username != null && username != ""){
				isLogin = true;
			}

			var el = this;
			Line.findAll({},function(results){
				var lines = results.filter("上下班拼车");
				el.element.html(can.view(
					"js/app/views/local/localList.ejs",{lines:lines}
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
				$("#menu-local").parent().addClass('current');
			});
		},
		'local route':function(){
			this.showLocal();
		}
	});

	can.extend(namespace,{
		Local:Local
	})
})(window);