// JavaScript Document
var wasabove;
var threshold = $(window).height()*.7;
var MAXSTARS = 100
var numstars = 0;

$(document).ready(function () {
	//randomshootingstars();
    $("#projects").css("margin-top", $(window).height()+"px");
    //each section has height of window
	$("section").css("min-height", $(window).height()+"px");
    $("#screen").css("height", $(window).height()+"px");
    $("#screen").css("width", $(window).width()+"px");
    //$("#starholder").css("height", 2*$(window).height()+"px");
	//$("#starholder").width(2*$("#hero").width())
});

//make jump to smooth 
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

$(window).resize(function () {
	$("section").css("min-height", $(window).height()+"px");
    $("section").css("min-width", $(window).width()+"px");
    $("#screen").css("height", $(window).height()+"px");
    $("#screen").css("width", $(window).width()+"px");
});

$("#logo a").click(function() {
    $('html,body').animate({
          scrollTop: 0
    }, 1000);
});

$(window).scroll(function() {
    var maxh = $(window).height();
    var maxw = $(window).width();
    var h = $(document).scrollTop();
    /*if (maxh - h < 0) {
        $("#logo a").css("color", "#333");  
        $("#logo a:hover").css("color", "#666"); 
    } else {
        $("#logo a").css("color", "#fff"); 
        $("#logo a:hover").css("color", "#eee"); 
    }*/
    if ((maxh - h)/maxh > 0.85) {
        $("#screen").css("transform", "scale("+String(((maxh - h)/maxh))+")");
        $("#screen").css("opacity", 1-h/maxh);
    } else {
        $("#screen").css("transform", "scale("+0.85+")");
        $("#screen").css("opacity", 0.85);
    }
});

function randomshootingstars() {
	$("#starholder").css("height", $("#hero").height());
	while(numstars < 300) {
			var diam = Math.random()*10;
			var speed = (Math.random()*20+3);
			var styles = {
				height: diam,
				width: diam,
				top: Math.random()*100+"%",
    			animation: "lefttoright "+speed+"s linear infinite",
				animationDelay: "-30s",
				zIndex: 1
			};
			var star = $("<div></div>").css(styles).addClass("star");
			$("#starholder").append(star);
			numstars++;
	}

}
