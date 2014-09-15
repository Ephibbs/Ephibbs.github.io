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
	$("#starholder").height($("#resume").height())
	if ($(window).scrollTop() + $(window).height() > $("#hero").height() && $(window).scrollTop() < $("#hero").height() + $("#resume").height()) {
		randomshootingstars();
		$("#resume .content").fadeIn();
	}
  
 /*var $window = $(window);
    $('*[data-type="parallax"]').each(function(){
        var $bgobj = $(this); // assigning the object
     
        $(window).scroll(function() {
            var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
             
            // Put together our final background position
            var coords = yPos + 'px';
 
            // Move the background
            $bgobj.css({ "margin-top": coords});
        }); 
    }); */           
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
		randomshootingstars();
		$("#resume .content").fadeIn();
	}
	if ($(window).scrollTop() + $(window).height() > $("#hero").height() + $("#resume").height()+ 600 && $(window).scrollTop() < $("#hero").height() + $("#resume").height()+$("#projects").height()) {
		$("#projects .content").fadeIn();
	}
	if ($(window).scrollTop() + $(window).height() > $("#projects svg").offset().top && $(window).scrollTop() < $("#projects svg").offset().top) {
		$("#projects svg").css("fill", "#FFF034");
	} else {
		$("#projects svg").css("fill", "#347");
	}
});
$(window).resize(function () {
	$("section").css("min-height", $(window).height()+"px");
	$("#hero").css("height", $(window).height()+"px");
	$("#starholder").css("top", $("#hero").height());
	$("#starholder").css("height", $("#resume").height());
	$("#starholder").css("width", $("#resume").width());
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