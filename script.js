// JavaScript Document
var wasabove;
var threshold = $(window).height()*.7;
var MAXSTARS = 100
var numstars = 0;

$(document).ready(function () {
	randomshootingstars();
	if ($(window).scrollTop() > threshold) {
		$("header").fadeIn();
		wasabove = false;
	}
	
	if ($(window).scrollTop() < threshold) {
		wasabove = true;
	}
	
	$("section, #starholder").css("min-height", $(window).height()+"px");
	$("header").css("top", $("#resume").offset().top+"px")
	$("#starholder").css("top", $(window).height());
	$("#starholder").width($("#resume").width())
  	var $window = $(window);
    $('*[data-type="parallax"]').each(function(){
        var $bgobj = $(this); // assigning the object
     
        $window.scroll(function() {
            var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
             
            // Put together our final background position
            var coords = yPos + 'px';
 
            // Move the background
            $bgobj.css({ "margin-top": coords});
        }); 
    });  
$("section").each(function() {
	var This = $(this);
	$(window).scroll(function() { 
		if ($(window).scrollTop() + $(window).height() > This.offset().top + This.height()/2 && $(window).scrollTop() < This.offset().top + This.height()) {
			This.find(".content").fadeTo("slow", 1);
			
			var color = This.css("background-color");
			var r = color.match(RegExp("[0-9]+"));
			var g = color.replace(r, "").match(RegExp("[0-9]+"));
			var b = color.replace(r, "").replace(g, "").match(RegExp("[0-9]+"));
			var color1 = "rgba("+r+","+g+","+b+",1)";
			/*
			r = Math.floor(parseInt(r ,16)/2).toString(16);
			g = Math.floor(parseInt(g, 16)/2).toString(16);
			b = Math.floor(parseInt(b, 16)/2).toString(16);
			var color2 = "rgba("+r+","+g+","+b+",1)";
			*/
			$("header #logo a").css("color", color1);
			/*
			$("header #logo a:hover").css("color", color2);
			*/
		}
	});
});       
});
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
$(window).scroll(function() {
	var top = 3*$(window).scrollTop();
	var height = $("#hero").height();
	if (top > height) {top = height;}
	if (top < 0) {top = 0;}
	console.log($("header").offset().top);
	if ($("header").offset().top <= $(window).scrollTop()) {
		$("header").css("position", "fixed").css("top", "0");
	}
	if ($("#resume").offset().top > $(window).scrollTop()) {
		$("header").css("position", "absolute").css("top", $("#resume").offset().top+"px");
	}
	$("#hero h1, #hero nav").css("opacity", 1-(top/height));
	
	if ($(window).scrollTop() > threshold && wasabove) {
		$("header").fadeIn();
		wasabove = false
	}
	if ($(window).scrollTop() < threshold && !wasabove) {
		$("header").fadeOut();
		wasabove = true
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
	while(numstars < 100) {//var i = 0; i <= numstars; i++) {
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