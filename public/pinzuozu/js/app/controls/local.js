(function(namespace) {
	//上下班拼座

	Local = can.Control({
		init:function(element,options){
			if(this.options.route === 'local'){
				this.showLocal();
			}
		},
		showLocal:function(){
			var isLogin = false;

			var userid = this.options.secret.attr("userid");
			var nickname = this.options.secret.attr("nickname");
			var token = this.options.secret.attr("token");
			var login = this.options.secret.attr("login");

			if(userid != null && userid != ""){
				isLogin = true;
			}

			this.element.html(can.view(
				"js/app/views/local/local.ejs"
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
			$("#menu-local").parent().addClass('current');

			//var el = this;
			Line.findAll({user_type:1,line_type:0},function(lines){
				//var lines = results.filter("上下班拼车");
				console.log(lines);
				if(lines.length>0){
					$("#work-local").html(can.view(
						"js/app/views/local/localListView.ejs",{lines:lines}
					));
				}else{
					$("#work-long").html(can.view(
						"js/app/views/local/localNullView.ejs"
					));
				}
				
			},function(error){
				console.log(error);
			});

			User.findAll({page:"1",per_page:"9"},function(users){
				console.log(users);
				$("#all-user").html(can.view(
					"js/app/views/home/users.ejs",{users:users}
				));
			},function(error){
				console.log(error);
			});
		},
		'local route':function(){
			this.showLocal();
		}
	});

	NextPrev = can.Control({
		init:function(){
			this.element.html(can.view('nextPrevStache',this.options));
		},
		".next click" : function(){
	    	var paginate = this.options.paginate;
	    	paginate.next();
	  	},
	  	".prev click" : function(){
	    	var paginate = this.options.paginate;
	    	paginate.prev();
	  	}
	});

	can.extend(namespace,{
		Local:Local
	})
})(window);