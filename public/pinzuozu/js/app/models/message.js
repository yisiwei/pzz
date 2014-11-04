(function(namespace) {
	var Message = can.Model({
		//获取指定用户消息
		findMessageByUser:function(params,success,error){
			console.log("userid:"+params.userid);
			return $.ajax({
				url: 'http://192.168.1.115:3000/pzz_users/'+params.userid
					+'/pzz_messages.json?auth_token='+params.token+'&login='+params.login,
				type: 'GET',
				dataType: 'json',
				success:success,
				error:error
			});
		},
		findMessageById:function(params,success,error){
			console.log("messageId:"+params.messageId);
			return $.ajax({
				url: 'http://192.168.1.115:3000/pzz_users/'+params.userid
					+'/pzz_messages/'+params.messageId+'.json?auth_token='+params.token
					+'&login='+params.login,
				type: 'GET',
				dataType: 'json',
				success:success,
				error:error
			});
		},
		deleteMessageById:function(params,success,error){
			console.log("messageId:"+params.messageId);
			return $.ajax({
				url: 'http://192.168.1.115:3000/pzz_users/'+params.userid
					+'/pzz_messages/'+params.messageId+'.json?auth_token='+params.token
					+'&login='+params.login,
				type: 'DELETE',
				dataType: 'json',
				success:success,
				error:error
			});
		}
		
	},{});

	// Message.bind('updated', function(event,updatedTask) {
	// 	/* Act on the event */
	// 	console.log("updated", updatedTask);
	// }).bind("destroyed", function(ev, destroyedTask){ 
	// 	console.log("destroyed", destroyedTask);
	// });

	// Export our model to the namespace
	namespace.Message = Message;
})(window);