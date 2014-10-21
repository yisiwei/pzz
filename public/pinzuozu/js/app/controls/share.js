(function(namespace) {

	Share = can.Control({
		init:function(element,options){
			//this.showHome();
			if(this.options.route === 'share'){
				this.showShare();
			}
		},
		showShare:function(){

			var nickname = this.options.secret.attr("nickname");
			var isLogin = false;
			if(nickname != null && nickname != ""){
				isLogin = true;
			}

			this.element.html(can.view(
				"js/app/views/share/share.ejs"
			));
			$("#header-top").html(can.view(
				"js/app/views/head/headTop.ejs",{isLogin:isLogin,username:nickname}
			));
			$("#header-bottom").html(can.view(
				"js/app/views/head/headBottom.ejs"
			));
			
			$("#footer").html(can.view(
				"js/app/views/footer/footer.ejs"
			));
			$("#menu-share").parent().addClass('current');

		},
		'share route':function(){
			this.showShare();			
		}
	});

	ShareDetail = can.Control({
		init:function(element,options){
			//this.showHome();
			if(this.options.route === 'share_detail'){
				this.showShareDetail();
			}
		},
		showShareDetail:function(){

			var nickname = this.options.secret.attr("nickname");
			var isLogin = false;
			if(nickname != null && nickname != ""){
				isLogin = true;
			}

			var id = can.route.attr("id");
			console.log("id=="+can.route.attr("id"));

			this.element.html(can.view(
				"js/app/views/share/share_detail.ejs"
			));
			$("#header-top").html(can.view(
				"js/app/views/head/headTop.ejs",{isLogin:isLogin,username:nickname}
			));
			$("#header-bottom").html(can.view(
				"js/app/views/head/headBottom.ejs"
			));
			
			$("#footer").html(can.view(
				"js/app/views/footer/footer.ejs"
			));
			$("#menu-share").parent().addClass('current');

		},
		'share_detail route':function(){
			this.showShareDetail();			
		}
	});

	can.extend(namespace,{
		Share:Share,
		ShareDetail:ShareDetail
	})
	//namespace.Share = Share;
})(window);