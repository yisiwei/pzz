(function(namespace) {
	var Line = can.Model({
		//findAll:'GET /pzz_lines',
		findAll:function(params,success,error){
			//var auth_token = params.auth_token;
			//var login = params.login;
			console.log("line_type:"+params.line_type);
			return $.ajax({
				url: 'http://192.168.1.115:3000/pzz_lines/search.json',
				type: 'POST',
				dataType: 'json',
				data:{
					line_type:params.line_type,
					user_type:params.user_type,
					page:params.page,
					per_page:params.per_page
				},
				success:success,
				error:error
			});
		},
		findLinesByUser:function(params,success,error){
			console.log("userid:"+params.userid);
			return $.ajax({
				url: 'http://192.168.1.115:3000/pzz_users/'+params.userid
					+'/pzz_lines.json?auth_token='+params.token+'&login='+params.login,
				type: 'GET',
				dataType: 'json',
				success:success,
				error:error
			});
		},
		updateLineParticipants:function(params,success,error){//修改剩余座位
			console.log("line_participants_available:"+params.line_participants_available);
			return $.ajax({
				url: 'http://192.168.1.115:3000/pzz_users/'+params.userid+'/pzz_lines/'+params.id+'.json',
				type: 'PUT',
				dataType: 'json',
				data:{
					auth_token:params.token,
					login:params.login,
					line_participants_available:params.line_participants_available
				},
				success:success,
				error:error
			});
		},
		cancelLine:function(params,success,error){//取消路线
			console.log("line_id:"+params.id);
			return $.ajax({
				url: 'http://192.168.1.115:3000/pzz_users/'+params.userid+'/pzz_lines/'+params.id+'.json',
				type: 'DELETE',
				dataType: 'json',
				data:{
					auth_token:params.token,
					login:params.login,
					line_participants_available:params.line_participants_available
				},
				success:success,
				error:error
			});
		},
		findOne:function(params,success,error){
			console.log("line_id:"+params.id);
			return $.ajax({
				url: 'http://192.168.1.115:3000/pzz_lines/'+params.id+'.json?auth_token=&login=',
				type: 'GET',
				dataType: 'json',
				// data:{
				// 	line_type:params.line_type,
				// 	user_type:params.user_type
				// },
				success:success,
				error:error
			});
		},
		//create: 'POST /pzz_lines',
		create:function(params,success,error){
			console.log("token:"+params.auth_token+"-id:"+params.line_return_datetime);
			return $.ajax({
				url: 'http://192.168.1.115:3000/pzz_users/'+params.pzz_user_id+'/pzz_lines.json',
				type: 'POST',
				dataType: 'json',
				data: {
					pzz_user_id:params.pzz_user_id,
					auth_token:params.auth_token,
					login:params.login,
					user_nickname:params.user_nickname,
					user_phone:params.user_phone,
					line_type:params.line_type,
					user_type:params.user_type,
					line_depart_city:params.line_depart_city,
					line_depart_address:params.line_depart_address,
					line_depart_gps:params.line_depart_gps,
					line_dest_city:params.line_dest_city,
					line_dest_address:params.line_dest_address,
					line_depart_city:params.line_depart_city,
					line_dest_gps:params.line_dest_gps,
					line_depart_datetime:params.line_depart_datetime,
					line_return:params.line_return,
					line_return_datetime:params.line_return_datetime,
					line_price:params.line_price,
					line_midway:params.line_midway,
					line_milleage:params.line_milleage,
					line_participants:params.line_participants,
					line_elapse:params.line_elapse,
					line_remark:params.line_remark
				},
				success:success,
				error:error
			});
		},
		//update: 'PUT /pzz_lines/{id}',
		//destroy: 'DELETE /pzz_lines/{id}',
		findById:function(params,success,error){
			console.log("token:"+params.token+"-login:"+params.login);
			return $.ajax({
				url: 'http://192.168.1.115:3000/pzz_lines/'+params.id+".json?auth_token="+ params.token + "&login=" + params.login,
				type: 'GET',
				dataType: 'json',
				//data: ,
				success:success,
				error:error
			});
		} 
	},{});

	Line.List = can.Model.List({
		filter:function(line_type){
			var lines = new Line.List([]);
			this.each(function(line){
				if(line.attr("line_type") == line_type){
					lines.push(line);
				}
			});
			return lines;
		}
	});

	// Export our model to the namespace
	namespace.Line = Line;
})(window);