window.onload = function() {
	//var login = document.createElement("div");
	var login = document.getElementById("log_div");
	var hnav = document.getElementsByClassName("hnav")[0];
	var hd = document.getElementsByTagName("header")[0];
	//hd.appendChild(login);
	//var p = document.createElement("p");
	//p.innerHTML = "Aici login";
	//login.appendChild(p);
	
	login.style.marginLeft = "10px";
	
	var a = document.createElement("a");
	a.href = "/login"
	a.alt = "Logare";
	login.appendChild(a);
	a.innerHTML = "Logare";
	a.style.textDecoration = "none";
	a.style.color = "white";
	login.style.border = "2px solid blue";
	login.style.width = "10%";
	login.style.textAlign = "center";
	a.padding = "10px";
	a.style.fontSize = "1.5em";
	login.style.margin = "0";

	login.onmouseover = function() {
		login.style.backgroundColor = "rgba(0, 0, 150, 0.4)";
		p.style.color = "white";
	}
	login.onmouseout = function() {
		login.style.backgroundColor = "rgba(0, 0, 150, 0)";
		p.style.color = "black";
	}
}