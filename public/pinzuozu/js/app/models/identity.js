(function(namespace) {
	var Identity = can.Model({
		//实名认证
		identity_realname:function(params,success,error){
			console.log("userid:"+params.pzz_user_id+"-realname:"+params.identity_realname);
			return $.ajax({
				url: 'http://192.168.1.115:3000/pzz_users/'+params.pzz_user_id
					+'/pzz_identities.json',
				type: 'POST',
				dataType: 'json',
				data:{
					auth_token:params.auth_token,
					login:params.login,
					user_realname:params.identity_realname,
					user_gender:params.identity_gender,
					identity_car_no:params.identity_card_no,
					identity_image:params.identity_card_image
				},
				success:success,
				error:error
			});
		},
		//驾驶认证
		identity_driver:function(params,success,error){
			console.log("userid:"+params.userid+"-realname:"+params.identity);
			return $.ajax({
				url: 'http://192.168.1.115:3000/pzz_users/'+params.userid
					+'/pzz_driver_identities.json',
				type: 'POST',
				dataType: 'json',
				data:{
					auth_token:params.auth_token,
					login:params.login,
					identity_realname:params.identity_realname,
					identity_gender:params.identity_gender,
					identity_card_no:params.identity_card_no,
					identity_card_image:params.identity_card_image
				},
				success:success,
				error:error
			});
		},
		//车辆认证
		identity_car:function(params,success,error){
			console.log("userid:"+params.userid+"-realname:"+params.identity);
			return $.ajax({
				url: 'http://192.168.1.115:3000/pzz_users/'+params.userid
					+'/pzz_driver_identities.json',
				type: 'POST',
				dataType: 'json',
				data:{
					auth_token:params.auth_token,
					login:params.login,
					identity_realname:params.identity_realname,
					identity_gender:params.identity_gender,
					identity_card_no:params.identity_card_no,
					identity_card_image:params.identity_card_image
				},
				success:success,
				error:error
			});
		}
		
	},{});

	// Export our model to the namespace
	namespace.Identity = Identity;
})(window);