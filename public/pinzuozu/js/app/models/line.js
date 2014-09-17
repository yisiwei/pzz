(function(namespace) {
	var Line = can.Model({
		findAll:'GET /pzz_lines',
		findOne:'GET /pzz_lines/{id}',
		create: 'POST /pzz_lines',
		update: 'PUT /pzz_lines/{id}',
		destroy: 'DELETE /pzz_lines/{id}' 
	},{});

	Line.List = can.Model.List({
		filter:function(line_type){
			var lines = new Line.List([]);
			this.each(function(line){
				if(line.attr("line_type") == line_type){
					lines.push(line);
				}
			});
			return lines;
		}
	});

	// Export our model to the namespace
	namespace.Line = Line;
})(window);