(function(namespace) {
	var Order = can.Model({
		
		create:function(params,success,error){
			console.log("token:"+params.auth_token+"-userid:"+params.userid);
			// return $.ajax({
			// 	url: 'http://192.168.1.115:3000/pzz_users/'+params.userid+'/pzz_orders.json',
			// 	type: 'POST',
			// 	dataType: 'json',
			// 	data: {
			// 		auth_token:params.auth_token,
			// 		login:params.login,
			// 		pzz_user_id:params.userid,
			// 		line_participants:params.line_participants
			// 	},
			// 	success:success,
			// 	error:error
			// });
		},
		
	},{});

	// Export our model to the namespace
	namespace.Order = Order;
})(window);