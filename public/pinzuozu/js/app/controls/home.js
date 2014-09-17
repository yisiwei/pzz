(function(namespace) {
	//上下班拼车
	PincheLocalList = can.Control({
		init:function(element,options){
			var el = this;
			Line.findAll({},function(results){
				var lines = results.filter("上下班拼车");
				el.element.html(can.view(
					"js/app/views/home/pincheLocalList.ejs",{lines:lines}
				));
			});
		}
	});

	//长途拼车
	PincheLongList = can.Control({
		init:function(element,options){
			var el = this;
			Line.findAll({},function(results){
				var lines = results.filter("长途拼车");
				el.element.html(can.view(
					"js/app/views/home/pincheLongList.ejs",{lines:lines}
				));
			});
			
		}
	});
	//乘客需求
	PincheNeedList = can.Control({
		init:function(element,options){
			var el = this;
			Line.findAll({},function(results){
				var needs = results.filter("乘客需求");
				el.element.html(can.view(
					"js/app/views/home/pincheNeedList.ejs",{lines:needs}
				));
			});
			
		}
	});

	can.extend(namespace,{
		PincheLocalList:PincheLocalList,
		PincheLongList:PincheLongList,
		PincheNeedList:PincheNeedList
	})
})(window);