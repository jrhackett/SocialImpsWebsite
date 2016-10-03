(function($) {
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top - 55
	    }, 900, 'swing', function () {});
	});

	$(document).on('scroll', function() {
	    if($('body').scrollTop() >= 300){
	        $('body').addClass('scrolled');
	    }
	    else {
	    	$('body').removeClass('scrolled');
	    }
	});

	$(document).ready(function() {
		if($("#navbar-collapse-1").hasClass("collapse")) {
			$("nav").addClass("collapsed");
		}
		else {
			$("nav").removeClass("collapsed");
		}
	});

})(jQuery);