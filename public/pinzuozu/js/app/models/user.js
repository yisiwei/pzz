(function(namespace) {

	var User = can.Model({
		findAll:function(params,success,error){
			console.log("page:"+params.page);
			return $.ajax({
				url: 'http://192.168.1.115:3000/pzz_users.json?page='+params.page+'&per_page='+params.per_page,
				type: 'GET',
				dataType: 'json',
				// data: {
				// 	page:params.page,
				// 	per_page:params.per_page
				// },
				success:success,
				error:error
			});
		},
		findOne:'GET /pzz_users/{id}.json',
		findById:function(params,success,error){
			console.log("token:"+params.token+"-login:"+params.login);
			return $.ajax({
				url: 'http://192.168.1.115:3000/pzz_users/'+params.id+".json?auth_token="+ params.token + "&login=" + params.login,
				type: 'GET',
				dataType: 'json',
				//data: ,
				success:success,
				error:error
			});
			
		},
		//findByPhone: 'GET /pzz_users/phone_registered',
		findByPhone: function(params,success,error){
			console.log("phone:"+params)
			return $.ajax({
				url: 'http://192.168.1.115:3000/pzz_users/phone_registered.json',
				type: 'GET',
				dataType: 'json',
				data: {user_phone: params},
				success:success,
				error:error
			});
			
		},
		login: function(params,success,error){
			console.log("username:"+params.login+",password:"+params.password);
			// var self = this;
			// return $.post('http://192.168.1.115:3000/pzz_users/sign_in.json', {
			// 	login: params.login, 
			// 	password:params.password
			// },function(data, textStatus, xhr) {
			// 	console.log(xhr.status);
			// 	console.log(data.email+"-"+textStatus+"-"+xhr.responseText+xhr.status);
			// },"json");

			return $.ajax({
				url: 'http://192.168.1.115:3000/pzz_users/sign_in.json',
				type: 'POST',
				dataType: 'json',
				data: 
				{
					login: params.login, 
					password:params.password
				},
				success:success,
				error:error
			});
		},
		register:function(params,success,error){
			console.log("password:"+params.password);
			return $.ajax({
				url: 'http://192.168.1.115:3000/pzz_users.json',
				type: 'POST',
				dataType: 'json',
				data: 
				{
					user_phone:params.user_phone,
					email:params.email,
					password:params.password,
					password_confirmation:params.password_confirmation,
					user_nickname:params.user_nickname
				},
				success:success,
				error:error
			});
			
		},
		updateAvatar:function(params,success,error){
			console.log("auth_token:"+params.auth_token);
			return $.ajax({
				url: 'http://192.168.1.115:3000/pzz_users/avatar.json',
				type: 'POST',
				dataType: 'json',
				processData:false,
				contentType:false,
				data: 
				{
					auth_token:params.auth_token,
					login:params.login,
					x:params.x,
					y:params.y,
					w:params.w,
					h:params.h,
					user_avatar:params.user_avatar
				},
				success:success,
				error:error
			});
		},
		create: 'POST http://192.168.1.115:3000/pzz_users.json',
		//update: 'PUT /pzz_users/{id}',
		destroy: 'DELETE /pzz_users/{id}',
		update: function(params,success,error){
			console.log("id:"+params.id+"-token:"+params.auth_token);
			return $.ajax({
				url: 'http://192.168.1.115:3000/pzz_users/'+params.id+'.json',
				type: 'PUT',
				dataType: 'json',
				data: {
					id:params.id,
					auth_token:params.auth_token,
					login:params.login,
					user_qq:params.user_qq,
					user_age:params.user_age,
					user_description:params.user_description
				},
				success:success,
				error:error
			});
		}
	},{});

	// Export our model to the namespace
	namespace.User = User;
})(window);