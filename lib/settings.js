//  ====================================================================
//	Theme Name: Lumen - Multi-purpose Bootstrap Template
//	Theme URI: http://themeforest.net/user/responsiveexperts
//	Description: This javascript file is using as a settings file. This file includes the sub scripts for the javascripts used in this template.
//	Version: 1.0
//	Author: Responsive Experts
//	Author URI: http://themeforest.net/user/responsiveexperts
//	Tags:
//  ====================================================================

//	TABLE OF CONTENTS
//	---------------------------
//	 01. Preloader
//	 02. Scroll To Top
//   03. Adding fixed position to header
//	 04. Menu Toggle
//	 05. Animations

//  ====================================================================


(function() {
	"use strict";

	// -------------------- 01. Preloader ---------------------
	// --------------------------------------------------------

	$(window).load(function() {
		$("#loader").fadeOut();
		$("#mask").delay(1000).fadeOut("slow");
	});

	// ------------------- 02. Scroll To Top ------------------
	// --------------------------------------------------------

	$(function() {
		$('a[href*=#]:not([href=#])').click(function() {
			$('.main-nav ul li a').parent().removeClass('active');
			$(this).parent().addClass('active');
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}

		});
	});
        /*
		function onScroll(event){
		var scrollPos = $(document).scrollTop();
		$('.main-nav ul li a[href*=#]:not([href=#])').each(function () {
			var currLink = $(this);
			var refElement = $(currLink.attr("href"));
			if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
				$('.main-nav ul li').removeClass("active");
				currLink.parent().addClass("active");
			}
			else{
				currLink.parent().removeClass("active");
			}
		});
	}*/


	// --------- 03. Adding fixed position to header ----------
	// --------------------------------------------------------

	$(document).scroll(function() {
		if ($(document).scrollTop() >= 1) {
		  //$('.header-area').addClass('navbar-fixed-top');
			
		} else {

//		  $('.header-area').removeClass('navbar-fixed-top');
		}
	});

	// -------------------- 04. Menu Toggle -------------------
	// --------------------------------------------------------

	$( ".toggle-btn" ).click(function() {
		$( ".nav-main" ).toggle();
	});

	// -------------------- 05. Animations --------------------
	// --------------------------------------------------------

	$('.animated').appear(function() {
		var elem = $(this);
		var animation = elem.data('animation');
		if ( !elem.hasClass('visible') ) {
			var animationDelay = elem.data('animation-delay');
			if ( animationDelay ) {
				setTimeout(function(){
					elem.addClass( animation + " visible" );
				}, animationDelay);
			} else {
				elem.addClass( animation + " visible" );
			}
		}
	});

	jQuery(document).ready(function(jQuery) {
		jQuery('.accordion-toggle').find('.acc-head').click(function(){

			if(jQuery(this).hasClass('active') == false)
			{
				jQuery('.acc-head').removeClass('active');
				jQuery(this).addClass('active');
			} else {
				jQuery('.acc-head').removeClass('active');
			}
			//Expand or collapse this panel
			jQuery(this).next().slideToggle('1000');

			//Hide the other panels
			jQuery(".acc-cont").not(jQuery(this).next()).slideUp('1000');

		});
	});

	$(window).load(function() {
	$('#testimonial-slider').flexslider({
			animation: "fade",
			controlNav: true,
			slideshowSpeed:3000,
			animationSpeed:2000,
			directionNav: true
		  });
		});
	// -------------------- 07. pop up --------------------
	// --------------------------------------------------------

	      $(document).ready(function() {
        $('.blue-solid').magnificPopup({
          delegate: '.srch',
          type: 'image',
          tLoading: 'Loading image',
          mainClass: 'mfp-img-mobile',
          gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
          },
          image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
             // return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
          }
        });
      });


	  	  // ------------------- 03. Scroll To Top ------------------
	// --------------------------------------------------------

	
        /*
	function onScroll(event){
		var scrollPos = $(document).scrollTop();
		$('.menu-main li a[href*=#]:not([href=#])').each(function () {
			var currLink = $(this);
			var refElement = $(currLink.attr("href"));
			if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
				$('.menu-main li').removeClass("active");
				currLink.parent().addClass("active");
			}
			else{
				currLink.parent().removeClass("active");
			}
		});
	}*/



	// -------------------- 06. Togg-nav --------------------
	// --------------------------------------------------------

 $( ".togg-navi" ).click(function() {
  $( ".main-nav" ).toggle();
 });



})(jQuery);
