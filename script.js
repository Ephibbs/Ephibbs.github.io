// JavaScript Document
var wasabove;
var threshold = $(window).height()*.7;
var numstars = 0;
$(document).ready(function () {
	
	if ($(window).scrollTop() > threshold) {
		$("header").fadeIn();
		wasabove = false;
	}
	
	if ($(window).scrollTop() < threshold) {
		wasabove = true;
	}
	
	$("#hero").css("height", $(window).height()+"px");
	$("section").css("min-height", $(window).height()+"px");
	$("#starholder").css("top", $(window).height());
	$("#starholder").width($("#resume").width())
	if ($(window).scrollTop() + $(window).height() > $("#resume .content").offset().top && $(window).scrollTop() < $("#resume .content").offset().top+$("#resume .content").height()) {
		$("#resume .content").fadeIn();
	}
});

$(window).scroll(function() {
	randomshootingstars();
	if ($(window).scrollTop() > threshold && wasabove) {
		$("header").fadeIn();
		wasabove = false
	}
	if ($(window).scrollTop() < threshold && !wasabove) {
		$("header").fadeOut();
		wasabove = true
	}
	if ($(window).scrollTop() + $(window).height() > $("#hero").height() + 200 && $(window).scrollTop() < $("#hero").height() + $("#resume").height()) {
		$("#resume .content").fadeIn();
		randomshootingstars();
	}
});
$(window).resize(function () {
	$("section").css("min-height", $(window).height()+"px");
	$("#hero").css("height", $(window).height()+"px");
	$("#starholder").css("top", $("#hero").height());
	$("#starholder").css("height", $("#resume").height());
	threshold = $(window).height()*.7;
});
function randomshootingstars() {
	$("#starholder").css("height", $("#resume").height());
	while(numstars < 100) {
			var diam = Math.random()*20;
			var speed = Math.random()*10+3;
			var styles = {
				backgroundColor: "#EEE",
				borderRadius: "100%",
				height: diam,
				width: diam,
				position: "absolute",
				top: Math.random()*93+5+"%",
    			animation: "lefttoright "+speed+"s linear infinite",
				zIndex: 1
			};
			var star = $("<div></div>").css(styles).addClass("star");
			$("#starholder").append(star);
			numstars++;
	}
		
}