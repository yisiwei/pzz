define([
	'jquery',
	'can',
	'controls/pages'
],function($,can,Pages){
	var Router = can.Control({
		init:function(){

		},
		//routes
		'route':'home',
		'local route':'local',
		'long route':'long',
		//'need route':'need',
		//'route route':'route'
		//'login route':'login',
		//'register route':'register',

		home:function(){
			Pages.home();
		},
		local:function(){
			Pages.local();
		},
		long:function(){
			Pages.long();
		}
	});

	return{
		init:function(){
			$(function(){
				can.route.ready(false);

				new Router(document);

				can.route.bind("change",function(ev, attr, how, newVal, oldVal){

				});

				can.route.ready(true);
			});
		}
	};
});