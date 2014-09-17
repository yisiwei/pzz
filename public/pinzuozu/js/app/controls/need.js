(function(namespace) {
	//乘客需求
	NeedList = can.Control({
		init:function(element,options){
			var el = this;
			Line.findAll({},function(results){
				var lines = results.filter("乘客需求");
				el.element.html(can.view(
					"js/app/views/need/needList.ejs",{lines:lines}
				));
			});
		}
	});

	can.extend(namespace,{
		NeedList:NeedList
	})
})(window);