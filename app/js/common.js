$( document ).ready(function() {

	$('.header__burger').on('click', function(e) {
		console.log('hello');
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

});