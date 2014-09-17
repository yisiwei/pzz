(function(namespace) {
	//长途拼车
	LongList = can.Control({
		init:function(element,options){
			var el = this;
			Line.findAll({},function(results){
				var lines = results.filter("长途拼车");
				el.element.html(can.view(
					"js/app/views/long/longList.ejs",{lines:lines}
				));
			});
		}
	});

	can.extend(namespace,{
		LongList:LongList
	})
})(window);