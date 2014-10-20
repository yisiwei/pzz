$(function() {
	//alert("上下班拼车");
	new LocalList("#work-local");

	//head
	new HeadTop("#head-top");
	new HeadBottom("#head-bottom");

	new Banner("#banner");

	new DiaryList("#diary-share");
	new RoadList("#road-share");

	//footer
	new Footer("#footer");

	$("#menu-local").parent().addClass('current');
});