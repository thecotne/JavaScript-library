$('html').on('DOMMouseScroll mousewheel','[isolate-scrolling]', function(e) {
	var $this = $(this),
		scrollTop = this.scrollTop,
		scrollHeight = this.scrollHeight,
		height = $this.height(),
		delta = (e.type == 'DOMMouseScroll' ?
			e.originalEvent.detail * -40 :
			e.originalEvent.wheelDelta),
		up = delta > 0;

	var prevent = function() {
		e.stopPropagation();
		e.preventDefault();
		e.returnValue = false;
		return false;
	}

	if (!up && -delta > scrollHeight - height - scrollTop) {
		// Scrolling down, but this will take us past the bottom.
		$this.scrollTop(scrollHeight);
		return prevent();
	} else if (up && delta > scrollTop) {
		// Scrolling up, but this will take us past the top.
		$this.scrollTop(0);
		return prevent();
	}
});
