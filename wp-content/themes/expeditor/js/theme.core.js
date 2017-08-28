;(function($){

	'use strict';

	$(function(){

	$('.current-menu-item').addClass('current');
	$('.current_page_parent').addClass('current');
	$('.menu-item-has-children').addClass('dropdown');
	$("#main-navigation ul.sub-menu").wrap("<div class='sub-menu-wrap'></div>");
	$('.sub-menu-wrap .sub-menu-wrap').addClass('sub-menu-inner');
	$('.sub-menu-wrap .menu-item-has-children').addClass('sub');
	$('.widget_recent_comments ul').addClass('custom-list');
	$('.widget_recent_comments ul li').addClass('comment-item');
	$('.widget_meta ul').addClass('info-links');
	$('.widget_archive ul').addClass('info-links');
	$('.widget_categories ul').addClass('info-links');
	$('.widget_nav_menu ul').addClass('info-links');
	$('.widget_pages ul').addClass('info-links');
	$('.widget_recent_entries ul').addClass('info-links');
	$('.widget_product_categories ul').addClass('info-links');
	$('.widget_calendar .calendar_wrap').addClass('calendar-wrap');
	$('.widget_calendar').addClass('widget-calendar');
	$('#wp-calendar tbody a').parent('td').addClass('link');
	$('.vc_wp_page_title ul').addClass('custom-list type-2 style-2');
	$('header.header-3.style-2 .btn.animated').addClass('btn-style-5');

	$(document).ready(function(){
	
	"use strict";
	
		if($('.audioplayer1 audio').length){
		$( '.audioplayer1 audio' ).audioPlayer(); 
		}
	
	});

		/* ---------------------------------------------------- */
        /*	Gallery carousel									*/
        /* ---------------------------------------------------- */

	  	$.mad_global.mad_init_carousel();

		/* ---------------------------------------------------- */
        /*	Tabs												*/
        /* ---------------------------------------------------- */

        $(window).on("load",function(){			
			
			$('#fbuilder input[type="checkbox"]').parent('label').addClass('switch');
			$('#fbuilder input[type="checkbox"]').after('<span class="slider checkbox_slider"></span>');

        	var tabs = $('.tabs-section');
			if(tabs.length){
				tabs.tabs({
					beforeActivate: function(event, ui) {
				        var hash = ui.newTab.children("li a").attr("href");
				   	},
					hide : {
						effect : "fadeOut",
						duration : 450
					},
					show : {
						effect : "fadeIn",
						duration : 450
					},
					updateHash : false
				});
			}

			if($('ul.smooth_tabs').length){
				$('ul.smooth_tabs li:first').addClass('ui-tabs-active');

				$('ul.smooth_tabs li a').on("click", function(){
				   $('ul.smooth_tabs').find('li').removeClass('ui-tabs-active');
				   $(this).parent('li').addClass("ui-tabs-active");
				  
				   var x = $(this).attr('href');
				   $(".smooth_item").removeClass('current_catalog_item');
				   $(".tabs_content ").children('h3').removeClass('current_catalog_item');
				   $(x).addClass('current_catalog_item');
				});
			}

        });

		/* ---------------------------------------------------- */
        /*	Loader												*/
        /* ---------------------------------------------------- */
		if($('.mad__queryloader').length){
		$("body").queryLoader2({
	        backgroundColor: '#fff',
	        barColor : expeditor_global.primary_color,
	        barHeight: 4,
	        deepSearch:true,
	        minimumTime:3000,
	        onComplete: function(){
	        	$(".loader").fadeOut('300');
	        }
      	});
		}

		/* ---------------------------------------------------- */
        /*	Sticky menu											*/
        /* ---------------------------------------------------- */

		if($('body').hasClass('sticky_menu')) {
			$('body').Temp({
				sticky: true
			});
		} else {
			$('body').Temp({
				sticky: false
			});
		}

		/* ---------------------------------------------------- */
        /*	SmoothScroll										*/
        /* ---------------------------------------------------- */

		try {
			$.browserSelector();
			var $html = $('html');
			if ( ( $html.hasClass('chrome') || $html.hasClass('ie11') || $html.hasClass('ie10') ) && $('body').hasClass('mad__smooth_scroll') ) {
				$.smoothScroll();
			}
		} catch(err) {}

		/* ---------------------------------------------------- */
        /*	Fancybox											*/
        /* ---------------------------------------------------- */
		window.twttr = (function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0],
		t = window.twttr || {};
		if (d.getElementById(id)) return t;
		js = d.createElement(s);
		js.id = id;
		js.src = "https://platform.twitter.com/widgets.js";
		fjs.parentNode.insertBefore(js, fjs);

		t._e = [];
		t.ready = function(f) {
		t._e.push(f);
		};

		return t;
		}(document, "script", "twitter-wjs"));

		if ($('a.fancy-gallery').length) {

			$("a.fancy-gallery")
			.attr('rel', 'gallery')
			.fancybox({
				beforeShow: function () {
					if (this.title) {
						// New line
						this.title += '<br />';
						
						// Add tweet button
						this.title += '<a href="https://twitter.com/share" class="twitter-share-button" data-count="none" data-url="' + this.href + '">Tweet</a> ';
						
						// Add FaceBook like button
						this.title += '<iframe src="//www.facebook.com/plugins/like.php?href=' + this.href + '&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:110px; height:23px;" allowTransparency="true"></iframe>';
					}
				},
				afterShow: function() {
					// Render tweet button
					twttr.widgets.load();
				},
				helpers : {
					title : {
						type: 'inside'
					}
				}  
			});
	
		}

		if ($('a.fancy-video').length) {
			$("a.fancy-video").on("click", function(){
		        $.fancybox({
		          href: this.href,
		          type: $(this).data("type")
		        }); // fancybox
		        return false;
		    }); // on
		}

	    /* ---------------------------------------------------- */
        /*	Custom Select										*/
        /* ---------------------------------------------------- */

		if ($('.custom-select').length) {
			$('.custom-select').mad_custom_select();
		}

		/* ---------------------------------------------------- */
        /*	Price Scale										    */
        /* ---------------------------------------------------- */

		var slider;
		if($('#price').length){
			slider = $('#price').slider({ 
		 		animate: true,
				range: true,
				values: [ 20, 400 ],
				min: 0,
				max: 500,
				slide : function(event ,ui){
					$('.range-values').find('.first-limit').val('$' + ui.values[0]);
					$('.range-values').find('.last-limit').val('$' + ui.values[1]);
				}
			});
		}
		if($('#distance').length){
			slider = $( "#distance" ).slider({
				animate: true,
			    value: 0,
			    min: 0,
			    max: 1000,
			    step: 1,
			    slide: function( event, ui ) {
			       $( "#amount" ).val(  ui.value + " km" );
			       $( "#total" ).val(  "Total: $ " + ui.value );
			    }
		    });
		    $( "#amount" ).val( $( "#distance" ).slider( "value" ) + " km" );
		    $( "#total" ).val( "Total: $ " +  $( "#distance" ).slider( "value" ) );
		}
		

		/* ---------------------------------------------------- */
        /*	Accordion & Toggle									*/
        /* ---------------------------------------------------- */

		var aItem = $('.accordion:not(.toggle) .accordion-item'),
			link = aItem.find('.a-title'),
			$label = aItem.find('label'),
			aToggleItem = $('.accordion.toggle .accordion-item'),
			tLink = aToggleItem.find('.a-title');

			aItem.add(aToggleItem).children('.a-title').not('.active').next().hide();

		function triggerAccordeon($item) {
			$item
			.addClass('active')
			.next().stop().slideDown()
			.parent().siblings()
			.children('.a-title')
			.removeClass('active')
			.next().stop().slideUp();
		}

		if ($label.length) {
			$label.on('click',function(){
				triggerAccordeon($(this).closest('.a-title'))
			});
		} else {
			link.on('click',function(){
				triggerAccordeon($(this))
			});
		}

		tLink.on('click',function(){
			$(this).toggleClass('active')
			.next().stop().slideToggle();

		});

		/* ---------------------------------------------------- */
		/*	Main elements run									*/
		/* ---------------------------------------------------- */

		$.mad_core.run();

		/* ---------------------------------------------------- */
		/*	Animate a regular anchor navigation					*/
		/* ---------------------------------------------------- */

	    if ($('a.animated').length) {

	    	$('body').localScroll({
	           hash: true,
	           filter: '.animated',
	           onBefore: function(){
                 this.offset = -200;
               }
	        });

	    }

	});

})(jQuery);