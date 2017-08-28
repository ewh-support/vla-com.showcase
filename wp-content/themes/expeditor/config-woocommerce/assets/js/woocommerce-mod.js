(function ($) {

	/*	LOAD READY
	/* --------------------------------------------- */

	$(window).load(function () {

	});

	/*	DOM READY
	/* --------------------------------------------- */

	$(function () {
		
	$('body').on('added_to_cart', function (e, fragments, cart_hash) {

		var sum = 0;
		$("div.widget_shopping_cart_content").find(".mini_cart_item").each(function(){
			sum += 1;
		});
		
		$('.sc-cart-btn .licon-cart-empty').attr('data-amount', sum);

	});
	
		 /* ---------------------------------------------------- */
		/*	Elevate zoom					*/
		/* ---------------------------------------------------- */

		if($('#zoom-image').length){
			
			var zoomWindowPosition = 1;
				if ($('body').hasClass('rtl')) {
					zoomWindowPosition = 10;
				}

			var button = $('.qv-preview');

			$("#zoom-image").elevateZoom({
				gallery:'thumbnails',
				galleryActiveClass: 'active',
				zoomType: "inner",
				cursor: "crosshair",
				responsive:true,
			    zoomWindowFadeIn: 500,
				zoomWindowFadeOut: 500,
				easing:true,
				lensFadeIn: 500,
				lensFadeOut: 500
			});

			button.on("click", function(e){
			  var ez = $('#zoom-image').data('elevateZoom');
				$.fancybox(ez.getGalleryList());
			  	e.preventDefault();
			});

		}

		/* ---------------------------------------------------- */
        /*	Quantity											*/
        /* ---------------------------------------------------- */

		var q = $('.quantity');

		q.each(function(){
			var $this = $(this),
				button = $this.children('button'),
				input = $this.children('input[type="number"]'),
				val = +input.val();

			button.on('click',function(){
				if($(this).hasClass('qty-minus')){
					if(val === 1) return false;
					input.val(--val);
				}
				else{
					input.val(++val);
				}
			});
		});

	});

})(jQuery);

