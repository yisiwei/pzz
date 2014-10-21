(function(namespace) {
	var Order = can.Model({
		//申请/邀请加入拼车
		joinLine:function(params,success,error){
			console.log("token:"+params.auth_token+"-pzz_user_id:"+params.pzz_user_id);
			return $.ajax({
				url: 'http://192.168.1.115:3000/pzz_users/'+params.pzz_user_id+'/pzz_orders.json',
				type: 'POST',
				dataType: 'json',
				data: {
					auth_token:params.auth_token,
					login:params.login,
					pzz_line_id:params.pzz_line_id,
					line_participants:params.line_participants
				},
				success:success,
				error:error
			});
		},
		//查询指定用户order
		findOrdersByUser:function(params,success,error){
			console.log("order_type:"+params.order_type);
			return $.ajax({
				url: 'http://192.168.1.115:3000/pzz_users/'+params.pzz_user_id+
					'/pzz_orders.json?auth_token='+params.auth_token+'&login='+
					 params.login+'&order_type='+params.order_type+'&order_status='+
					 params.order_status,
				type: 'GET',
				dataType: 'json',
				success:success,
				error:error
			});
		},
		//同意加入拼车
		confirmOrder:function(params,success,error){
			console.log("login:"+params.login);
			return $.ajax({
				url: 'http://192.168.1.115:3000/pzz_users/'+params.pzz_user_id+
					'/pzz_orders/'+params.id+'/confirm.json',
				type: 'PUT',
				dataType: 'json',
				data: {
					auth_token:params.auth_token,
					login:params.login
				},
				success:success,
				error:error
			});
		}
		//取消订单
		// cancelOrder:function(params,success,error){
		// 	console.log("login:"+params.login);
		// 	return $.ajax({
		// 		url: 'http://192.168.1.115:3000/pzz_users/'+params.pzz_user_id+
		// 			'/pzz_orders/'+params.id+'.json',
		// 		type: 'DELETE',
		// 		dataType: 'json',
		// 		data: {
		// 			auth_token:params.auth_token,
		// 			login:params.login
		// 		}
		// 		success:success,
		// 		error:error
		// 	});
		// }
		
	},{});

	// Export our model to the namespace
	namespace.Order = Order;
})(window);