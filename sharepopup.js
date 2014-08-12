$('html').on('click','a[share-popup]',function(e){
	e.preventDefault();
	var newwindow = window.open(e.target.href,'','height=300,width=600');
	if (window.focus) {
		newwindow.focus();
	}
});
