/*
	Dopetrope by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

var slideIndex = 1;
var timeout;

// Next/previous controls
function plusSlides(n) {
  clearTimeout(timeout);
  slideIndex += n;
  carousel(slideIndex);
}

// Thumbnail image controls
function currentSlide(n) {
	clearTimeout(timeout);
	slideIndex = n;
  carousel(slideIndex);
}

function carousel(n) {
  var i;
  var x = document.getElementsByClassName("slideshow");
  var dots = document.getElementsByClassName("dot");
  if (x.length === 0) {
  	return;
  }

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slideIndex = n;
  if (slideIndex > x.length) { slideIndex = 1; }
  if (slideIndex < 1) { slideIndex = x.length; }

  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

  timeout = setTimeout(function(){ carousel(slideIndex + 1) }, 5000); // Change image every 5 seconds
}


(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			alignment: 'center'
		});

	// Nav.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

	carousel(slideIndex);

})(jQuery);
