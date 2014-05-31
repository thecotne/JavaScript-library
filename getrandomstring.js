function getRandomString (length) {
	if (length<1) return "";
	var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	return chars.charAt( Math.floor(Math.random() * (chars.length-1) ) ) + getRandomString(--length);
}
