(function(namespace) {

	var User = can.Model({
		findAll:'GET /pzz_users',
		findOne:'GET /pzz_users/{id}',
		//findByPhone: 'GET /pzz_users/phone_registered',
		// findByPhone: function(params){
		// 	return $.get('/pzz_users/phone_registered').then(function(data){
		// 		alert("1");
		// 	});
		// },
		login: function(params){
			console.log("email:"+params.login+",password:"+params.password);
			var self = this;
			return $.post('http://192.168.1.115:3000/pzz_users/sign_in.json', {
				login: params.login, 
				password:params.password
			},function(data, textStatus, xhr) {
				console.log(xhr.status);
				console.log(data.email+"-"+textStatus+"-"+xhr.responseText+xhr.status);
			},"json");

			// return $.ajax({
			// 	url: 'http://192.168.1.115:3000/pzz_users/sign_in.json',
			// 	type: 'POST',
			// 	dataType: 'json',
			// 	data: {
			// 		login: params.login, 
			// 		password:params.password
			// 	},
			// })
			// .done(function(data, textStatus) {
			// 	console.log("success："+data.email);
			// 	//return data;
			// })
			// .fail(function(xhr, textStatus, errorThrown) {
			// 	console.log("error"+xhr.status);
			// });
			

		},
		register:function(params){
			console.log("email:"+params.email+",password:"+params.password);
			return $.post('http://192.168.1.115:3000/pzz_users.json', {
				user_phone:params.user_phone,
				email:params.email,
				password:params.password,
				password_confirmation:params.password_confirmation
			}, function(data, textStatus, xhr) {
				console.log(data+"-"+textStatus+"-"+xhr.responseText+xhr.status);
			},"json");

			// return $.ajax({
			// 	url: 'http://192.168.1.115:3000/pzz_users.json',
			// 	type: 'POST',
			// 	dataType: 'json',
			// 	data: {
			// 		user_phone:params.user_phone,
			// 		email:params.email,
			// 		password:params.password,
			// 		password_confirmation:params.password_confirmation
			// 	},
			// 	success:function(data, textStatus){
			// 		console.log("success:"+textStatus+"-"+data);
			// 		//return new User(data);
			// 	},
			// 	error:function(xhr, textStatus, errorThrown) {
			// 		console.log(xhr.responseText+xhr.status);
			// 		var err = eval("(" + xhr.responseText + ")");
  	// 				console.log(err.user_phone);
  	// 				return xhr.responseText;
			// 	}
			// });
			
		},
		create: 'POST http://192.168.1.115:3000/pzz_users',
		update: 'PUT /pzz_users/{id}',
		destroy: 'DELETE /pzz_users/{id}' 
	},{});

	// Export our model to the namespace
	namespace.User = User;
})(window);