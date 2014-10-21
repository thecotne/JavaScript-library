$('html').on('click','a[just-popup]',function(e){
	e.preventDefault();

	var height = parseFloat($(e.currentTarget).attr('just-popup-height')) || 300;
	var width = parseFloat($(e.currentTarget).attr('just-popup-width')) || 600;

	var left = (screen.width/2)-(width/2);
	var top = (screen.height/2)-(height/2);

	var params =
		 'toolbar=no, '
		+'location=no, '
		+'directories=no, '
		+'status=no, '
		+'menubar=no, '
		+'scrollbars=no, '
		+'resizable=no, '
		+'copyhistory=no, '
		+'width='+width+', '
		+'height='+height+', '
		+'top='+top+', '
		+'left='+left
	;

	var newwindow = window.open(e.currentTarget.href,'',params);

	if (window.focus) {
		newwindow.focus();
	}
});
