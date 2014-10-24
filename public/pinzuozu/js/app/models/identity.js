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
					identity_card_no:params.identity_card_no,
					identity_image:params.identity_card_image
				},
				success:success,
				error:error
			});
		},
		//查询实名认证信息
		find_identity_realname:function(params,success,error){
			console.log("userid:"+params.pzz_user_id);
			return $.ajax({
				url: 'http://192.168.1.115:3000/pzz_users/'+params.pzz_user_id
					+'/pzz_identities.json?auth_token='+params.auth_token+'&login='+params.login,
				type: 'GET',
				dataType: 'json',
				success:success,
				error:error
			});
		},
		//重新提交实名认证
		update_identity_realname:function(params,success,error){
			console.log("identity_id:"+params.id);
			return $.ajax({
				url: 'http://192.168.1.115:3000/pzz_users/'+params.pzz_user_id
					+'/pzz_identities/'+params.id+'.json',
				type: 'PUT',
				dataType: 'json',
				data:{
					auth_token:params.auth_token,
					login:params.login,
					user_realname:params.identity_realname,
					user_gender:params.identity_gender,
					identity_card_no:params.identity_card_no,
					identity_image:params.identity_card_image
				},
				success:success,
				error:error
			});
		},
		//驾驶认证 
		identity_driver:function(params,success,error){
			console.log("userid:"+params.pzz_user_id+"-realname:"+params.identity_realname);
			return $.ajax({
				url: 'http://192.168.1.115:3000/pzz_users/'+params.pzz_user_id
					+'/pzz_driver_identities.json',
				type: 'POST',
				dataType: 'json',
				data:{
					auth_token:params.auth_token,
					login:params.login,
					user_realname:params.identity_realname,
					identity_dl_no:params.identity_dl_no,
					identity_dl_image:params.identity_dl_image,
					identity_dl_type:params.identity_dl_type,
					identity_dl_issued:params.identity_dl_issued
				},
				success:success,
				error:error
			});
		},
		//查询驾驶认证信息
		find_identity_driver:function(params,success,error){
			console.log("userid:"+params.pzz_user_id);
			return $.ajax({
				url: 'http://192.168.1.115:3000/pzz_users/'+params.pzz_user_id
					+'/pzz_driver_identities.json?auth_token='+params.auth_token+'&login='+params.login,
				type: 'GET',
				dataType: 'json',
				success:success,
				error:error
			});
		},
		//重新提交驾驶认证
		update_identity_driver:function(params,success,error){
			console.log("identity_id:"+params.id);
			return $.ajax({
				url: 'http://192.168.1.115:3000/pzz_users/'+params.pzz_user_id
					+'/pzz_driver_identities/'+params.id+'.json',
				type: 'PUT',
				dataType: 'json',
				data:{
					auth_token:params.auth_token,
					login:params.login,
					user_realname:params.identity_realname,
					identity_dl_no:params.identity_dl_no,
					identity_dl_image:params.identity_dl_image,
					identity_dl_type:params.identity_dl_type,
					identity_dl_issued:params.identity_dl_issued
				},
				success:success,
				error:error
			});
		},
		//车辆认证
		identity_car:function(params,success,error){
			console.log("userid:"+params.pzz_user_id);
			return $.ajax({
				url: 'http://192.168.1.115:3000/pzz_users/'+params.pzz_user_id
					+'/pzz_cars.json',
				type: 'POST',
				dataType: 'json',
				contentType:'application/x-www-form-urlencoded',
				data:{
					auth_token:params.auth_token,
					login:params.login,
					car_type:params.car_type,
					car_brand_name:params.car_brand_name,
					car_seats:params.car_seats,
					car_plate_no:params.car_plate_no,
					car_vin:params.car_vin,
					car_engine_no:params.car_engine_no,
					identity_vl_no:params.identity_vl_no,
					identity_vl_image:params.identity_vl_image,
					identity_vl_issued:params.identity_vl_issued,
					insurance_corporate:params.insurance_corporate,
					insurance_no:params.insurance_no,
					insurance_expired:params.insurance_expired,
					insurance_image:params.insurance_image,
					car_image:params.car_image
				},
				success:success,
				error:error
			});
		},
		//查询车辆认证信息
		find_identity_car:function(params,success,error){
			console.log("userid:"+params.pzz_user_id);
			return $.ajax({
				url: 'http://192.168.1.115:3000/pzz_users/'+params.pzz_user_id
					+'/pzz_cars.json?auth_token='+params.auth_token+'&login='+params.login,
				type: 'GET',
				dataType: 'json',
				success:success,
				error:error
			});
		},
		//重新提交车辆认证
		update_identity_car:function(params,success,error){
			console.log("identity_id:"+params.id);
			return $.ajax({
				url: 'http://192.168.1.115:3000/pzz_users/'+params.pzz_user_id
					+'/pzz_cars/'+params.id+'.json',
				type: 'PUT',
				dataType: 'json',
				data:{
					auth_token:params.auth_token,
					login:params.login,
					car_type:params.car_type,
					car_brand_name:params.car_brand_name,
					car_seats:params.car_seats,
					car_plate_no:params.car_plate_no,
					car_vin:params.car_vin,
					car_engine_no:params.car_engine_no,
					identity_vl_no:params.identity_vl_no,
					identity_vl_image:params.identity_vl_image,
					identity_vl_issued:params.identity_vl_issued,
					insurance_corporate:params.insurance_corporate,
					insurance_no:params.insurance_no,
					insurance_expired:params.insurance_expired,
					insurance_image:params.insurance_image,
					car_image:params.car_image
				},
				success:success,
				error:error
			});
		}
		
	},{});

	// Export our model to the namespace
	namespace.Identity = Identity;
})(window);