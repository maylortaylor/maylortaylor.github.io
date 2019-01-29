(function () {
	$(document).ready(function () {
		$('pre').addClass('prettyprint');


		jQuery.fn.extend({
			scrollToMe: function () {
				var x = jQuery(this).offset().top - 100;
				jQuery('html,body').animate({ scrollTop: x }, 400);
			}
		});
		$("#about-me").scrollToMe();
	});

})();
