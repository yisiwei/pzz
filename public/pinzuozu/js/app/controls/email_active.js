(function(namespace) {

	//LoginView
	EmailActive = can.Control({
		init:function(element,options){
			if(this.options.route === 'email_active'){
				this.showEmailActive();
			}
		},
		showEmailActive:function(){
			this.element.html(can.view(
				"js/app/views/register/email_active.ejs",{}
			));
			$("#footer").html(can.view(
				"js/app/views/footer/footer2.ejs"
			));
		},
		'email_active route':function(){
			this.showEmailActive();
		},
		
	});

	can.extend(namespace,{
		EmailActive:EmailActive
	});
})(window);