(function(namespace) {

	//司机发布路线
	CreateDriverRoute = can.Control({
		init:function(element,options){
			this.element.html(can.view(
				"js/app/views/create_driver_route.ejs"
			));
		},

		'#submit click':function(el){
			this.createLine(el);
		},
		createLine:function(){
			var form = this.element.find("form");
			var line = new Line();
			var values = can.deparam(form.serialize());

			if($.trim(values.line_depart_city).length<=0 ||
				$.trim(values.line_depart_address).length<=0){
				$("#depart-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
				$("#depart-msg").text("请输入出发地");		
				return;
			}
			if($.trim(values.line_dest_city).length<=0 || 
				$.trim(values.line_dest_address).length<=0){
				$("#dest-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
				$("#dest-msg").text("请输目的地");		
				return;
			}
			var line = new Line();
			line.attr(values).save();
			alert("发布成功");
			window.location.href="index.html";
		},
		'#isBack click':function(){ //是否返程
			if($("#isBack").prop("checked")==true){
				$("#backtime").show();
			}else{
				$("#backtime").hide();
			}
		},
		'#line_depart_city blur':function(){//出发城市
			var line_depart_city = $("#line_depart_city").val();
			if($.trim(line_depart_city).length<=0){
				$("#depart-msg").addClass('crred fa fa-times-circle');
				$("#depart-msg").text("请输入出发地");	
			}else{
				$("#depart-msg").removeClass('crred fa fa-times-circle');
				$("#depart-msg").text("");
			}
		},
		'#line_depart_address blur':function(){
			var line_depart_address = $("#line_depart_address").val();
			if($.trim(line_depart_address).length<=0){
				$("#depart-msg").addClass('crred fa fa-times-circle');
				$("#depart-msg").text("请输入出发地");	
			}else{
				$("#depart-msg").removeClass('crred fa fa-times-circle');
				$("#depart-msg").text("");
			}
		},
		'#line_dest_city blur':function(){//目的城市
			var line_dest_city = $("#line_dest_city").val();
			if($.trim(line_dest_city).length<=0){
				$("#dest-msg").addClass('crred fa fa-times-circle');
				$("#dest-msg").text("请输入目的地");	
			}else{
				$("#dest-msg").removeClass('crred fa fa-times-circle');
				$("#dest-msg").text("");
			}
		},
		'#line_dest_address blur':function(){
			var line_dest_address = $("#line_dest_address").val();
			if($.trim(line_dest_address).length<=0){
				$("#dest-msg").addClass('crred fa fa-times-circle');
				$("#dest-msg").text("请输入目的地");	
			}else{
				$("#dest-msg").removeClass('crred fa fa-times-circle');
				$("#dest-msg").text("");
			}
		}

	});
	//乘客发布路线
	CreatePassengerRoute = can.Control({
		init:function(element,options){
			this.element.html(can.view(
				"js/app/views/create_passenger_route.ejs"
			));
		},
		'#submit click':function(el){
			this.createLine(el);
		},
		createLine:function(){
			var form = this.element.find("form");
			var line = new Line();
			var values = can.deparam(form.serialize());

			if($.trim(values.line_depart_city).length<=0 ||
				$.trim(values.line_depart_address).length<=0){
				$("#depart-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
				$("#depart-msg").text("请输入出发地");		
				return;
			}
			if($.trim(values.line_dest_city).length<=0 || 
				$.trim(values.line_dest_address).length<=0){
				$("#dest-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
				$("#dest-msg").text("请输目的地");		
				return;
			}
			var line = new Line();
			line.attr(values).save();
			alert("发布成功");
			window.location.href="index.html";
		},
		'#isBack click':function(){ //是否返程
			if($("#isBack").prop("checked")==true){
				$("#backtime").show();
			}else{
				$("#backtime").hide();
			}
		},
		'#line_depart_city blur':function(){//出发城市
			var line_depart_city = $("#line_depart_city").val();
			if($.trim(line_depart_city).length<=0){
				$("#depart-msg").addClass('crred fa fa-times-circle');
				$("#depart-msg").text("请输入出发地");	
			}else{
				$("#depart-msg").removeClass('crred fa fa-times-circle');
				$("#depart-msg").text("");
			}
		},
		'#line_depart_address blur':function(){
			var line_depart_address = $("#line_depart_address").val();
			if($.trim(line_depart_address).length<=0){
				$("#depart-msg").addClass('crred fa fa-times-circle');
				$("#depart-msg").text("请输入出发地");	
			}else{
				$("#depart-msg").removeClass('crred fa fa-times-circle');
				$("#depart-msg").text("");
			}
		},
		'#line_dest_city blur':function(){//目的城市
			var line_dest_city = $("#line_dest_city").val();
			if($.trim(line_dest_city).length<=0){
				$("#dest-msg").addClass('crred fa fa-times-circle');
				$("#dest-msg").text("请输入目的地");	
			}else{
				$("#dest-msg").removeClass('crred fa fa-times-circle');
				$("#dest-msg").text("");
			}
		},
		'#line_dest_address blur':function(){
			var line_dest_address = $("#line_dest_address").val();
			if($.trim(line_dest_address).length<=0){
				$("#dest-msg").addClass('crred fa fa-times-circle');
				$("#dest-msg").text("请输入目的地");	
			}else{
				$("#dest-msg").removeClass('crred fa fa-times-circle');
				$("#dest-msg").text("");
			}
		}
	});

	can.extend(namespace,{
		CreateDriverRoute:CreateDriverRoute,
		CreatePassengerRoute:CreatePassengerRoute
	})
})(window);