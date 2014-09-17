(function(namespace) {
	LineDetail = can.Control({
		init:function(element,options){
			var el = this;
			Line.findOne({id:el.options.id},function(line){
				el.element.html(can.view(
					"js/app/views/detail/pincheLineDetail.ejs",{line:line}
				));
			});
			
		}
	});

	NeedDetail = can.Control({
		init:function(element,options){
			var el = this;
			Line.findOne({id:el.options.id},function(line){
				el.element.html(can.view(
					"js/app/views/detail/pincheNeedDetail.ejs",{line:line}
				));
			});
			
		}
	});

	//HeadTop
	HeadTop = can.Control({
		init:function(element,options){
			this.element.html(can.view(
				"js/app/views/head/headTop.ejs",{isLogin:'yes'}
			));
		},
		'#logout click':function() {
			/* Act on the event */
			$("#head-top-left").html(can.view(
				'js/app/views/head/logout.ejs'
			));
		}
	});
	//HeadBottom
	HeadBottom = can.Control({
		init:function(element,options){
			this.element.html(can.view(
				"js/app/views/head/headBottom.ejs"
			));
		}
	});
	//foot
	Footer = can.Control({
		init:function(element,options){
			this.element.html(can.view(
				"js/app/views/footer/footer.ejs"
			));
		}
	});

	can.extend(namespace,{
		LineDetail:LineDetail,
		NeedDetail:NeedDetail
	})
})(window);