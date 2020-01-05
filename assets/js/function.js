$(document).ready(function () {
	var currurl = window.location.pathname;
	var index = currurl.lastIndexOf("/") + 1;
	var filename = currurl.substr(index);
	var windowWidth = $(window).width();
	FlowTypeInit();
});
$(window).on("load", function () {
	FlowTypeInit();
});


/** Flow Type Init */
function FlowTypeInit() {
	$('body').flowtype({
		minimum: 640,
		maximum: 5000,
		minFont: 18,
		maxFont: 1000,
		fontRatio: 50
	});
}
/** Flow Type Init */