(function(namespace) {
	//发布线路
	RouteDriver = can.Control({
		init:function(element,options){
			//if(this.options.route === 'route_driver'){
				this.showRouteDriver();
			//}
		},
		showRouteDriver:function(){
			var isLogin = false;

			var userid = this.options.secret.attr("userid");
			var nickname = this.options.secret.attr("nickname");
			var token = this.options.secret.attr("token");
			var login = this.options.secret.attr("login");

			if(nickname != null && nickname != ""){
				isLogin = true;
			}

			this.element.html(can.view(
				"js/app/views/route/route_driver.ejs",{}
			));

			$("#header-top").html(can.view(
				"js/app/views/head/headTop.ejs",{isLogin:isLogin,username:nickname,token:token,login:login}
			));
			$("#header-bottom").html(can.view(
				"js/app/views/head/headBottom.ejs"
			));
			$("#footer").html(can.view(
				"js/app/views/footer/footer.ejs"
			));
			$("#menu-route").parent().addClass('current');
		},
		// 'route_driver route':function(){
		// 	this.showRouteDriver();
		// },
        '#driver-submit click':function(){//司机发布路线
        	var userid = this.options.secret.attr("userid");
        	var token = this.options.secret.attr("token");
			var login = this.options.secret.attr("login");

        	$("input[name='line_depart_datetime']").val($("#d").val()+" "+$("#t").val()+":00");
			
        	if($("#isBack").prop("checked")==true){
				$("input[name='line_return_datetime']").val($("#db").val()+" "+$("#tb").val()+":00");
			}else{
				$("input[name='line_return_datetime']").val("0000-01-01 00:00:00");
			}
			
			var form = this.element.find("form");
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
				$("#dest-msg").text("请输入目的地");		
				return;
			}
			if($.trim($("#d").val()).length<=0 || $.trim($("#t").val()).length<=0){
				$("#departtime-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
				$("#departtime-msg").text("请输入出发时间");		
				return;
			}
			if($("#isBack").prop("checked")==true){//返程
				if($.trim($("#db").val()).length<=0 || $.trim($("#tb").val()).length<=0){
					$("#backtime-msg").removeClass('cr5a fa fa-check-circle').addClass('crred fa fa-times-circle');
					$("#backtime-msg").text("请输入返程时间");		
					return;
				}
			}

			var linePlace="";
			$("input[name='placeValue']").each(function(){
				linePlace = linePlace + $(this).val()+",";
			});

			var line = new Line();
			line.attr(values);

			line.attr("line_price",linePlace);
			line.attr("pzz_user_id",userid);
			line.attr("auth_token",token);
			line.attr("login",login);

			Line.create(line,function(line){
				console.log(line);
			},function(error){
				console.log(error);
			});
			//alert("发布成功"+line.line_depart_datetime);
        },
        '#isBack click':function(){ //是否返程
			if($("#isBack").prop("checked")==true){
				$("#backtime").show();
				$("input[name='line_return']").val(1);
			}else{
				$("#backtime").hide();
				$("input[name='line_return']").val(0);
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
		},
		'#d blur':function(el,event){//出发时间
			if($.trim(el.val()).length<=0){
				$("#departtime-msg").addClass('crred fa fa-times-circle');
				$("#departtime-msg").text("请输入出发日期");	
			}else{
				$("#departtime-msg").removeClass('crred fa fa-times-circle');
				$("#departtime-msg").text("");
			}
		},
		'#t blur':function(el,event){
			if($.trim(el.val()).length<=0){
				$("#departtime-msg").addClass('crred fa fa-times-circle');
				$("#departtime-msg").text("请输入出发时间");	
			}else{
				$("#departtime-msg").removeClass('crred fa fa-times-circle');
				$("#departtime-msg").text("");
			}
		},
		'#db blur':function(el,event){//返程时间
			if ($("#isBack").prop("checked")==true) {
				if($.trim(el.val()).length<=0){
					$("#backtime-msg").addClass('crred fa fa-times-circle');
					$("#backtime-msg").text("请输入返程日期");	
				}else{
					$("#backtime-msg").removeClass('crred fa fa-times-circle');
					$("#backtime-msg").text("");
				}
			}
		},
		'#tb blur':function(el,event){
			if ($("#isBack").prop("checked")==true) {
				if($.trim(el.val()).length<=0){
					$("#backtime-msg").addClass('crred fa fa-times-circle');
					$("#backtime-msg").text("请输入返程时间");	
				}else{
					$("#backtime-msg").removeClass('crred fa fa-times-circle');
					$("#backtime-msg").text("");
				}
			}
		},
		'#driver-minseat click':function(el,event){
			var seatCount = $("#driver-seatCount");
			seatCount.val(parseInt(seatCount.val()) - 1);
			if(parseInt(seatCount.val()) < 2){
				seatCount.val(1);
			}
		},
		'#driver-addseat click':function(el,event){
			var seatCount = $("#driver-seatCount");
			seatCount.val(parseInt(seatCount.val()) + 1);
		},
		"#btn-back click":function(){//返回
			window.location.href="route.html";
		}
		// '#getValue click':function(el,event){
		// 	var linePlace="";
		// 	$("input[name='placeValue']").each(function(){
		// 		linePlace = linePlace + $(this).val()+",";

		// 	});
		// 	//alert(linePlace.substr(0,linePlace.length-1));
		// }
	});

	can.extend(namespace,{
		RouteDriver:RouteDriver
	})
})(window);