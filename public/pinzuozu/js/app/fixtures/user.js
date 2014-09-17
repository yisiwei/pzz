var USERS = [
{
	id:1,
	user_phone:'18310204743',
	user_nickname:'yisiwei',
	user_email:'yisiwei@mointe.cn',
	user_password:'yisiwei'
},{
	id:2,
	user_phone:'10000',
	user_nickname:'admin',
	user_email:'admin@mointe.cn',
	user_password:'admin'
}
];
//findAll
can.fixture("GET /pzz_users",function(){
	return USERS;
});
//findOne 
can.fixture("GET /pzz_users/{id}",function(request){
	return USERS[(+request.data.id)-1];
});
//findByPhone 
// can.fixture("GET /pzz_users/phone_registered",function(request){
// 	return USERS[0];
// });
//create
can.fixture("POST /pzz_users",function(request){
	var id = LINES.length + 1;
	LINES.push($.extend({id:id},request.data));
	return {id:id};
});
//update
can.fixture("PUT /pzz_users/{id}",function(request){
	$.extend(USERS[(+request.data.id)-1],request.data);	
	return {};
});
//delete
can.fixture("DELETE /pzz_users/{id}",function(){
	return {};
});