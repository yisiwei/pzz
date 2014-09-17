var LINES = [
{
	id:1,
	line_type:'上下班拼车',
	line_depart_city:'北京市',
	line_depart_address:'大兴区野生动物园',
	line_dest_city:'廊坊市',
	line_dest_address:'孔雀英国宫',
	line_depart_datetime:'2014-09-09 08:00:00',
	line_participants:3,
	line_price:10
},{
	id:2,
	line_type:'长途拼车',
	line_depart_city:'长沙市',
	line_depart_address:'五一广场',
	line_dest_city:'岳阳市',
	line_dest_address:'湘阴县家家福',
	line_depart_datetime:'2014-09-10 09:00:00',
	line_participants:2,
	line_price:20
},{
	id:3,
	line_type:'乘客需求',
	line_depart_city:'四川市',
	line_depart_address:'成都野生动物园',
	line_dest_city:'上海市',
	line_dest_address:'火车站',
	line_depart_datetime:'2014-09-11 08:30:00',
	line_participants:4,
	line_price:28
},{
	id:4,
	line_type:'上下班拼车',
	line_depart_city:'重庆市',
	line_depart_address:'重庆野生动物园',
	line_dest_city:'上海市',
	line_dest_address:'上海虹桥',
	line_depart_datetime:'2014-09-11 08:30:00',
	line_participants:4,
	line_price:28
}
];
//findAll
can.fixture("GET /pzz_lines",function(){
	return LINES;
	
});
//findOne
can.fixture("GET /pzz_lines/{id}",function(request){
	return LINES[(+request.data.id)-1];
	// return {
	// 	id:2,
	// 	start:'长沙',
	// 	end:'岳阳',
	// 	startTime:'2014-09-10',
	// 	seat:2,
	// 	price:20
	// }
});
//create
can.fixture("POST /pzz_lines",function(request){
	var id = LINES.length + 1;
	LINES.push($.extend({id:id},request.data));
	return {id:id};
});
//update
can.fixture("PUT /pzz_lines/{id}",function(){
	$.extend(LINES[(+request.data.id)-1],request.data);	
	return {};
});
//delete
can.fixture("DELETE /pzz_lines/{id}",function(){
	return {};
});