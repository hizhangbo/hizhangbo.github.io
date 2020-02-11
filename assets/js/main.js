(function($) {
	var $body = $('body');

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {
		var mode = $.cookie('mode');
		if("dark" === mode) {
			darkMode();
		}

		var	$window = $(window),
			$menu = $('#menu'),
			$sidebar = $('#sidebar'),
			$main = $('#main');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// IE<=9: Reverse order of main and sidebar.
			if (skel.vars.IEVersion <= 9)
				$main.insertAfter($sidebar);

		// Menu.
			$menu
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right',
					target: $body,
					visibleClass: 'is-menu-visible'
				});

		// Search (header).
			var $search = $('#search'),
				$search_input = $search.find('input');

			$body
				.on('click', '[href="#search"]', function(event) {

					event.preventDefault();

					// Not visible?
						if (!$search.hasClass('visible')) {

							// Reset form.
								$search[0].reset();

							// Show.
								$search.addClass('visible');

							// Focus input.
								$search_input.focus();

						}

				});

			$search_input
				.on('keydown', function(event) {

					if (event.keyCode == 27)
						$search_input.blur();

				})
				.on('blur', function() {
					window.setTimeout(function() {
						$search.removeClass('visible');
					}, 100);
				});

		// Intro.
			var $intro = $('#intro');

			// Move to main on <=large, back to sidebar on >large.
			skel.on('+large', function() {
					$intro.prependTo($main);
				})
				.on('-large', function() {
					$intro.prependTo($sidebar);
				});

			// category
			var $category = $('.category');
			$category
		    		.on('click', function(event) {
						window.location.href = $(this).attr('data-category');
					})
					.on('mouseover', function(event) {
						$(this).addClass("pitch_on");
					})
					.on('mouseout', function(event) {
						$(this).removeClass("pitch_on");
					});
			
		    // search
			var sjs = SimpleJekyllSearch({
				searchInput: document.getElementById('search-input'),
				resultsContainer: document.getElementById('results-container'),
				json: '/search.json'
				});

			// 
			$(".top").click( //定义返回顶部点击向上滚动的动画
				function() {
					$('html,body').animate({
						scrollTop: 0
					}, 700);
				});
			$(".bottom").click( //定义返回底部点击向下滚动的动画
				function() {
					$('html,body').animate({
						scrollTop: document.body.clientHeight
					}, 700);
	
				});

			$(".checke").change(function(){
				if($(".checke").is(':checked')){
					// 暗色主題
					darkMode();
				}else{
					// 亮色主題
					lightMode();
				}
			});
	});

	function lightMode() {
		$body.css('background', '#f4f4f4');
		$('.post').css('background','#ffffff');
		$('#header').css('background-color','#ffffff');
		$('.button').css('background-color','transparent');
		$(".button").css("cssText","color: #3c3b3b !important");
		$("a").css("cssText","color: #3c3b3b !important");
		$(".button.disabled").css("cssText","rgba(160, 160, 160, 0.3) !important");
		// $('.button').css('box-shadow','0 0 0 1px rgba(137, 123, 123, 0.3)');
		$('.logo').append("<style>#intro .logo:before{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100' preserveAspectRatio='none' zoomAndPan='disable'%3E%3Cpolygon points='0,0 100,0 100,25 50,0 0,25' style='fill:%23f4f4f4' /%3E%3Cpolygon points='0,100 100,100 100,75 50,100 0,75' style='fill:%23f4f4f4' /%3E%3C/svg%3E\")</style>");
		
		$('.button').hover(function(){
			$(this).css("cssText", "color: #2ebaae !important;box-shadow: inset 0 0 0 1px #2ebaae !important");
		},function(){
			$(this).css("cssText", "color: #3c3b3b !important;box-shadow:inset 0 0 0 1px #3c3b3b !important;");
		});
	
		$('a').hover(function(){
			$(this).css("cssText", "color: #2ebaae !important;");
		},function(){
			$(this).css("cssText", "color: #3c3b3b !important;");
		});

		$('header h2').css('color', '#3c3b3b');
		$('.post > header .meta .published, ol li, .post > header .title').css('color', '#3c3b3b');
		$('#menu').css('background', '#ffffff');
		$(".checke").attr("checked",false);

		$.cookie('mode', 'light', { path: '/' });
	}
	
	function darkMode() {
		$body.css('background', '#2f2f2f');
		$('.post').css('background','#584546');
		$('#header').css('background-color','rgba(48, 48, 48, 0.8)');
		$('.button').css('background-color','rgba(129, 100, 100, 0.46)');
		$('.button').css('cssText','color:rgba(169, 117, 117, 0.76) !important');
		$('a').css('cssText','color:rgba(169, 117, 117, 0.76) !important');
		$('.button.disabled').css('cssText','color:rgba(114, 114, 114, 0.45) !important;');
		// $('.button').css('box-shadow','0 0 0 1px rgba(137, 123, 123, 0.3)');
		$('.logo').append("<style>#intro .logo:before{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100px' height='100px' viewBox='0 0 100 100' preserveAspectRatio='none' zoomAndPan='disable'%3E%3Cpolygon points='0,0 100,0 100,25 50,0 0,25' style='fill:%232f2f2f' /%3E%3Cpolygon points='0,100 100,100 100,75 50,100 0,75' style='fill:%232f2f2f' /%3E%3C/svg%3E\")</style>");
	
	
		$('a').hover(function(){
			$(this).css("cssText", "color:rgb(250, 166, 166) !important;");
		},function(){
			$(this).css("cssText", "color:rgba(169, 117, 117, 0.76) !important;");
		});
	
		$('.button').hover(function(){
			$(this).css("cssText", "color:rgb(250, 166, 166) !important;box-shadow:inset 0 0 0 1px rgb(250, 166, 166) !important;");
		},function(){
			$(this).css("cssText", "color:rgba(169, 117, 117, 0.76) !important;box-shadow:inset 0 0 0 1px rgba(169, 117, 117, 0.76) !important;");
		});

		$('header h2').css('color', 'unset');
		$('.post > header .meta .published, ol li, .post > header .title').css('color', '#2b0e0ed4');
		$('#menu').css('background', '#3a2929a8');
		$(".checke").attr("checked",true);

		$.cookie('mode', 'dark', { path: '/' });
	}

})(jQuery);