//Iniciamos wow 
new WOW().init();

//inicializa  smooth scroll
//
var scroll = new SmoothScroll('a[href*="#"]', {
	
	// Speed & Easing
	speed: 1000, // Integer. How fast to complete the scroll in milliseconds
	offset: 80, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
	easing: 'easeInOutCubic', // Easing pattern to use
	customEasing: function (time) {}, // Function. Custom easing pattern
});

$(function () {
	$(window).scroll(function () {
		var scrolltop = $(this).scrollTop();
		if(scrolltop >= 50){
			$(".id-arriba").fadeIn();
		}
		else{
			$(".id-arriba").fadeOut();
		}
	});
});


