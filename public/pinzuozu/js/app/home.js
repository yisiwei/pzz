$(function() {
	//alert("拼车");
	new PincheLocalList("#work");

	new PincheLongList("#long-distance");

	new PincheNeedList("#passenger-need");

	//head
	new HeadTop("#head-top");
	new HeadBottom("#head-bottom");

	new Banner("#banner");

	new DiaryList("#diary-share");
	new RoadList("#road-share");

	//footer
	new Footer("#footer");

	$("#menu-home").parent().addClass('current');
});