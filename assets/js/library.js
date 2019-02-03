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


		var options = {
			strings: [
				"Web Designe",
				"Web Develope",
				"Front-end Framework Ninj",
				".NetCore Hacke",
				"Scrum Master",
				"Senior Full Stack .NET Web Developer"
			],
			typeSpeed: 80,
			backSpeed: 40,
			startDelay: 1000,
			smartBackspace: true,
			fadeOut: false,
			loop: false
		}

		var typed = new Typed(".typed-element", options);
	});

})();
