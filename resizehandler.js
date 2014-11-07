function resizeHandler(){
	$('[data-innerHeight]').each(function(){
		$(this).css('height',eval(window.innerHeight+$(this).attr('data-innerHeight')));
	});
	$('[data-innerWidth]').each(function(){
		$(this).css('width',eval(window.innerWidth+$(this).attr('data-innerWidth')));
	});

	$('[data-min-innerHeight]').each(function(){
		$(this).css('min-height',eval(window.innerHeight+$(this).attr('data-innerHeight')));
	});
	$('[data-min-innerWidth]').each(function(){
		$(this).css('min-width',eval(window.innerWidth+$(this).attr('data-innerWidth')));
	});
	$('[data-max-innerHeight]').each(function(){
		$(this).css('max-height',eval(window.innerHeight+$(this).attr('data-innerHeight')));
	});
	$('[data-max-innerWidth]').each(function(){
		$(this).css('max-width',eval(window.innerWidth+$(this).attr('data-innerWidth')));
	});
};
$(window).resize(resizeHandler);
$(resizeHandler);
