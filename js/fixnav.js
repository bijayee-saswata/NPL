	$(document).ready(function () {
	    var navpos = $('#mainnav').offset();
	    console.log(navpos.top);
	    $(window).bind('scroll', function () {
	        if ($(window).scrollTop() > navpos.top) {
	            $('#mainnav').addClass('navbar-fixed-top');
	            $('#topnav').removeClass('navbar-fixed-top');
	        } else {
	            $('#topnav').addClass('navbar-fixed-top');
	            $('#mainnav').removeClass('navbar-fixed-top');
	        }
	    });
	});