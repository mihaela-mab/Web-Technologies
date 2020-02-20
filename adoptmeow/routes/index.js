var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

window.onload = function() {
	var login = document.createElement("div");
	var hnav = document.getElementsByClassName("hnav")[0];
	var hd = document.getElementsByTagName("header")[0];
	//hd.insertBefore(login, hnav);
	hd.appendChild(login);
	var p = document.createElement("p");
	p.innerHTML = "Aici login";
	login.appendChild(p);
	
	login.style.marginLeft = "10px";
	
	var a = document.createElement("a");
	a.href = "/login.html"
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