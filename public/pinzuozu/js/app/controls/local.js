(function(namespace) {
	//上下班拼车
	LocalList = can.Control({
		init:function(element,options){
			var el = this;
			Line.findAll({},function(results){
				var lines = results.filter("上下班拼车");
				el.element.html(can.view(
					"js/app/views/local/localList.ejs",{lines:lines}
				));
			});
		}
	});

	can.extend(namespace,{
		LocalList:LocalList
	})
})(window);