function stilizare() {
	var body = document.getElementsByTagName("body")[0];
	var h1 = document.getElementsByTagName("h1");
	for (let i = 0; i < h1.length; i++) {
		h1[i].style.color = "white";
		h1[i].style.textAlign = "center";
		h1[i].style.marginTop = "100px";
		h1[i].style.fontSize = "2.5em";
	}
}

window.onload = function() {
	stilizare();
}