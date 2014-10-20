(function(namespace) {
	
	RetrievePwd = can.Control({
		init:function(element,options){
			if(this.options.route === 'retrieve_pwd'){
				this.showRetrievePwd();
			}
		},
		showRetrievePwd:function(){
			this.element.html(can.view(
				"js/app/views/login/retrieve_pwd.ejs"
			));
			$("#header-top").html(can.view(
				"js/app/views/head/headTop.ejs",{isLogin:false}
			));
			$("#footer").html(can.view(
				"js/app/views/footer/footer2.ejs"
			));
		},
		'retrieve_pwd route':function(){
			this.showRetrievePwd();
		}
	});

	can.extend(namespace,{
		RetrievePwd:RetrievePwd
	})
})(window);