(function ($) {
	$(document).ready(function () {

		/* enable/disable  */
		var fontsizeDisplay = 1;

		/* use for next elements: */
		var fontsizeElement = "p, a, span, li, h1, h2, h3, h4, h5, h6";
		var fontsizeElementClass = "";

		/* Set Cookies Params */
		var fontsizeCookieExpires = 365;
		var fontsizeCookieDomain = "/";

		/* default params */
		var fontsizeIncrement = 10;
		var fontsizeMinimum = 50;
		var fontsizeMaximum = 190;
				
				
		function fs_change( ratio ) {				
			var cookie_value = 100;
			if($.cookie("fontsize_ratio")) {						
					cookie_value = parseInt($.cookie("fontsize_ratio"));
			}
			if ( ((ratio < 0) && cookie_value > fontsizeMinimum) ||  ((ratio > 0) && cookie_value < fontsizeMaximum ) ) {
				var new_ratio = cookie_value + ratio;
				if (new_ratio == 100) {
					fs_default();
				} else {
					$.cookie('fontsize_ratio', new_ratio, {
						expires: fontsizeCookieExpires,
						path: fontsizeCookieDomain
					});
					var $fs_elements = $(fontsizeElement + fontsizeElementClass);
					$fs_elements.each(function() {
						if ( $(this).css("font-size") ) {
							if ( !$(this).data('default-font-size')) {
								$(this).attr( 'data-default-font-size', parseInt($(this).css("font-size")) );
							}
							var newsize = parseInt( parseInt( $(this).data('default-font-size')) * new_ratio / 100);
							$(this).css("font-size", newsize + 'px' );	
						}
					});

				}
			}
		}
		
		function fs_default() {
			$.cookie('fontsize_ratio', 100, {
					expires: fontsizeCookieExpires,
					path: fontsizeCookieDomain
			});
			var $fs_elements = $(fontsizeElement + fontsizeElementClass);			
			$fs_elements.each(function(){
				if ( $(this).data('default-font-size')) {
					$(this).css("font-size", $(this).data('default-font-size') + 'px');
				}
			});
			return false;
		}

		$("button.inc-font").click(
			function () {
				fs_change(fontsizeIncrement);
			}
		);

		$("button.dec-font").click(
			function () {
				fs_change( (-1) * fontsizeIncrement);
			}
		);

		$("button.default-font").click(
			function () {
				fs_default();
			}
		);

	});

})(jQuery);


(function ($) {
	jQuery.cookie = function (name, value, options) {
		if (typeof value != 'undefined') { // name and value given, set cookie
			options = options || {};
			if (value === null) {
				value = '';
				options.expires = -1;
			}
			var expires = '';
			if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
				var date;
				if (typeof options.expires == 'number') {
					date = new Date();
					date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
				} else {
					date = options.expires;
				}
				expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
			}
			// CAUTION: Needed to parenthesize options.path and options.domain
			// in the following expressions, otherwise they evaluate to undefined
			// in the packed version for some reason...
			var path = options.path ? '; path=' + (options.path) : '';
			var domain = options.domain ? '; domain=' + (options.domain) : '';
			var secure = options.secure ? '; secure' : '';
			document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
		} else { // only name given, get cookie
			var cookieValue = null;
			if (document.cookie && document.cookie != '') {
				var cookies = document.cookie.split(';');
				for (var i = 0; i < cookies.length; i++) {
					var cookie = jQuery.trim(cookies[i]);
					// Does this cookie string begin with the name we want?
					if (cookie.substring(0, name.length + 1) == (name + '=')) {
						cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
						break;
					}
				}
			}
			return cookieValue;
		}
	};
})(jQuery);