/*
 *	jQuery crossFader 0.3 - jQuery plugin
 *	Plugin developed by: Takayoshi Shiraishi
 *	http://lab.komadoya.com/
 *
 *	2012/07/04 - ver 0.3 (Add non-clickStep mode)
 *	2011/03/17 - ver 0.2 (Add non-loop mode)
 *	2011/02/14 - ver 0.1
 *	 
 *	Based from Simple jQuery Slideshow Script (http://jonraasch.com/blog/a-simple-jquery-slideshow)
 *	Released by Jon Raasch (jonraasch.com) under FreeBSD license: free to use or modify, not responsible for anything, etc.)
 * 
 *	Released under the MIT license:
 *	http://www.opensource.org/licenses/mit-license.php
/* -------------------------------------------------------------------- */

(function($){

	$.fn.crossFader = function(options){

		var options = $.extend({
			timer: 6000,
			speed: 1500,
			changeSpd: 800,
			clickStep: true,
			random: false,
			loop: true
		}, options);
		
		return this.each(function(){
		
			// prepare elements
			var $unit = $(this);
			var $slide = $('img', $unit);
			var timerID;
			var links = $('a', $unit).length;
			var clicked = false;
			var slides = $slide.length;
			var switches = 1;

			// init
			function init(){
				slideSet();
				timerID = setInterval(function(){
					slideSwitch(options.speed);
				}, options.timer);
				
				$slide.bind('click', slideClick);
			}

			// set first image
			function slideSet(){
				$slide.removeClass('active');
				// set first image in random order, if random is true
				var $start = (options.random) ? Math.floor(Math.random() * $slide.length) : 0;
				$($slide[$start]).addClass('active');
			}
			
			// slideSwitch
			function slideSwitch(sp){
				
				//prevent from continuous click
				$slide.unbind('click');
				
				var $active = $('img.active', $unit);
				
				//for loop
				if(options.loop || switches < slides || clicked) {
					if ($active.length == 0) $active = $('img:last-child', $unit);
					switches++;
					clicked = false;
				} else {
					clearInterval(timerID);
					$slide.bind('click', slideClick);
					return;
				}
				
				//pull the images in the order they appear in the markup
				//var $next = ($active.next().length) ? $active.next() : $('img:first-child', $unit);
				if(links){
					var $next = ($active.parent("a").next().length) ? $active.parent("a").next().find('img') : $('img:first', $unit);
				} else {
					var $next = ($active.next().length) ? $active.next() : $('img:first-child', $unit);
				}
				
				//set z-index lower than "class=active"
				$active.addClass('last-active');
			
				//transition
				$next
					.css({opacity: 0.0})
					.addClass('active')
					.animate({opacity: 1.0}, sp, function(){
						$active.removeClass('active last-active');
						$slide.bind('click', slideClick);
					});
			}
			
			// slideClick Action
			function slideClick(){
				if(options.clickStep){
					clearInterval(timerID);
					clicked = true;
					slideSwitch(options.changeSpd);
					timerID = setInterval(function(){
						slideSwitch(options.speed);
					}, options.timer);
				}
			}
			
			// execute
			init();

		});
	};
})(jQuery);

