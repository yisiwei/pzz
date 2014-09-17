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
		create: 'POST /pzz_users',
		update: 'PUT /pzz_users/{id}',
		destroy: 'DELETE /pzz_users/{id}' 
	},{});

	// Export our model to the namespace
	namespace.User = User;
})(window);