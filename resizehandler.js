function resizeHandler(){
	$('[data-innerHeight]').each(function(){
		$(this).css('height',eval(window.innerHeight+$(this).attr('data-innerHeight')));
	});
	$('[data-innerWidth]').each(function(){
		$(this).css('width',eval(window.innerWidth+$(this).attr('data-innerWidth')));
	});
};
$(window).resize(resizeHandler);
$(resizeHandler);
