var change = 0;
function animatie () {
	var imagini = [];
	for (let i = 0; i < 5; i++) {
		imagini[i] = document.createElement("img");
		imagini[i].className = "img_pisica";
	}
	
	imagini[0].src = "/images/cat_animatie1_static.jpg";
	imagini[1].src = "/images/cat_animatie1_sus.jpg";
	imagini[2].src = "/images/cat_animatie1_jos.jpg";
	imagini[3].src = "/images/cat_animatie1_stanga.jpg";
	imagini[4].src = "/images/cat_animatie1_dreapta.jpg";
	
	var x = event.clientX;
	var y = event.clientY;
	
	if (x >= 1075 && x <= 1520 && y >= 10 && y <= 50) {
		div_pisica.replaceChild(imagini[1], div_pisica.firstChild);
	}
	else 
		if (y >= 50 && y <= 150 && x >= 1075 && x <= 1250) {
			div_pisica.replaceChild(imagini[3], div_pisica.firstChild);
		}
		else 
			if (y >= 150 && y <= 200 && x >= 1075 && x <= 1520) {
				div_pisica.replaceChild(imagini[2], div_pisica.firstChild);
			}
			else
				if (y >= 50 && y <= 150 && x >= 1350 && x <= 1520) {
					div_pisica.replaceChild(imagini[4], div_pisica.firstChild);
				}
				else {
					div_pisica.replaceChild(imagini[0], div_pisica.firstChild);
				}
	
	//console.log("x = " + x);
	//console.log("y = " + y);
}

function sunet() {
	var sound = document.createElement("audio");
	sound.autoplay = "autoplay";
	var source = document.createElement("source");
	source.src = "/images/purr.wav";
	sound.appendChild(source);
	document.getElementsByTagName("body")[0].appendChild(sound);
	var optiune1;
	var optiune2;
	
	var interval = setInterval(
	function() {
		var optiune1  = prompt("Pisica toarce. Vrei sa se opreasca?", "da / nu");
		var optiune2 = prompt("Vrei sa mai primesti acest mesaj?", "da / nu");
		console.log(optiune1);
		if (optiune1 == "da") {
			sound.pause();
		}
		if (optiune2 == "nu") {
			clearInterval(interval);
		}
	console.log(optiune2);
	}, 
	5000);
	
}

function miaunat(e) {
	//console.log(tasta);
	var sunet = document.createElement("audio");
	var s = document.createElement("source");
	s.id = "stop_meow";
	s.src = "/images/meow.mp3";
	sunet.appendChild(s);
	sunet.autoplay = "autoplay";
	document.getElementsByTagName("body")[0].appendChild(sunet);
	
}

function messages() {
	var msg1 = document.createElement("p");
	var dv = document.getElementsByClassName("div_container")[0];
	msg1.innerHTML = "Double click me-ow to hear me meow!";
	dv.appendChild(msg1);
	console.log("??");
}


window.onload = function() {
	var form1 = document.getElementById("form_container");
	var form2 = document.getElementById("signup_container");
	form1.style.display = "block";
	form2.style.display = "none";
	document.getElementById("signin").onclick = function() {
		form2.style.display = "none";
		form1.style.display = "block";
		
	}
	document.getElementById("signup").onclick = function() {
		form1.style.display = "none";
		form2.style.display = "block";
		
		
		form2.addEventListener("submit", (e) => {
			var ok = 1;
			var parola = document.getElementsByName("parola_signup")[0];
			var parola_rep = document.getElementsByName("parola_repeta")[0];
			if(parola.value.length < 6) {
				alert("Parola trebuie sa contina minimum 6 caractere!");
				ok = 0;
			}
			if (!ok) {
				e.preventDefault();
			}
		}
		)
	}
	
	var butoane = document.createElement("div")
	var b1 = document.createElement("button");
	var b2 = document.createElement("button");
	var b3 = document.createElement("button");
	
	var div_container = document.getElementById("animatie");
	div_container.className = "div_container";
	
	var div_butoane = document.createElement("div");
	div_butoane.id = "div_butoane";
	div_container.appendChild(div_butoane);
	
	div_butoane.appendChild(b1);
	div_butoane.appendChild(b2);
	div_butoane.appendChild(b3);
	
	b1.className = "buton_animatie";
	b2.className = "buton_animatie";
	b3.className = "buton_animatie";
	
	b1.innerHTML = "Hrana";
	b2.innerHTML = "Somn";
	b3.innerHTML = "Joaca";
	
	var div_pisica = document.createElement("div");
	div_pisica.id = "div_pisica";
	div_container.appendChild(div_pisica);
	
	var img_pisica = document.createElement("img");
	img_pisica.src = "/images/cat_animatie1_static.jpg";
	img_pisica.className = "img_pisica";
	div_pisica.appendChild(img_pisica);
	
	div_container.onmouseover = animatie;

	
	div_container.ondblclick = sunet;
	
	var info = document.createElement("button");
	info.innerHTML = "info";
	div_container.appendChild(info);
	info.style.width = "50px";
	
	var informatii = document.createElement("div");
	var pinfo = document.createElement("p");
	pinfo.innerHTML = "Press \"m\" button to hear me me-ow!";
	informatii.appendChild(pinfo);
	div_pisica.appendChild(informatii);
	informatii.id = "div_info";
	
	var pinfo1 = document.createElement("p");
	pinfo1.innerHTML = "Double click to hear me purr!";
	informatii.appendChild(pinfo1);
	
	informatii.style.display = "none";
	var infopressed = 0;
	info.onclick = function() {
		if (infopressed == 0) {
			informatii.style.display = "block";
			infopressed = 1;
		}
		else {
			informatii.style.display = "none";
			infopressed = 0;
		}
	}
	
	b2.onclick = function() {
		var somn  = document.createElement("img");
		somn.className = "img_pisica";
		somn.src = "/images/cat_animatie1somn.jpg";
		div_pisica.replaceChild(somn, div_pisica.firstChild);
		
		var txt = document.createElement("p");
		div_container.appendChild(txt);
		txt.innerHTML = "Pisica doarme. Orice miscare o poate trezi. Iti asumi riscul?";
		txt.style.position = "absolute";
		txt.style.float  = "right";
		txt.style.display = "inline";
		txt.style.marginLeft = "20px";
		txt.id = "text_somn";
		
		var snsound = document.createElement("audio");
		var snsource = document.createElement("source");
		snsound.appendChild(snsource);
		snsource.src = "/images/snoring.wav";
		snsound.autoplay = "autoplay";
		document.getElementsByTagName("body")[0].appendChild(snsound);
	
		b2.onmouseout = function() {
			txt.style.display = "none";
			snsound.remove();
		}
		
		
	}
	
	
	b1.onclick = function() {
		var hrana = document.createElement("img");
		hrana.src = "/images/catfood.png";
		div_container.insertBefore(hrana, div_butoane);
		hrana.id = "hrana";
		
		var cat = document.getElementById("div_pisica");
		var pos = 0;
		var id = setInterval(move, 5);
		function move() {
			if (pos == 100) {
				clearInterval(id);
			}
			else {
				pos++;
				cat.style.right = pos + "px";
			}
		}
		
		var poz = 0;
		var id1 = setInterval(food, 5);
		function food() {
			if (poz == 70) {
				var cat_hrana = document.createElement("img");
				cat_hrana.src = "/images/cat_animatie1hrana.jpg";
				cat_hrana.className = "img_pisica";
				div_pisica.replaceChild(cat_hrana, div_pisica.firstChild);
				clearInterval(id1);
			}
			else {
				poz++;
				hrana.style.top = poz + "px";
			}
		}
		
		b1.onmouseleave = function () {
			//hrana.style.display = "none";
			hrana.remove();
			cat.style.right = "0px";
		}
	}
	
	b3.onclick = function () {
		var jucarie = document.createElement("img");
		jucarie.src = "/images/toy.png";
		div_container.insertBefore(jucarie, div_butoane);
		jucarie.id = "jucarie";
		
		var cat = document.getElementById("div_pisica");
		var pos = 0;
		var id = setInterval(move, 5);
		function move() {
			if (pos == 120) {
				clearInterval(id);
			}
			else {
				pos++;
				cat.style.right = pos + "px";
			}
		}
		
		var id1 = setInterval(joaca, 5);
		var poz = 0;
		function joaca() {
			if (poz == 70) {
				var cat_joaca = document.createElement("img");
				cat_joaca.src = "/images/cat_animatie1joaca.jpg"
				cat_joaca.className = "img_pisica";
				div_pisica.replaceChild(cat_joaca, div_pisica.firstChild);
				clearInterval(id1);
			}
			else {
				poz++;
				jucarie.style.top = poz + "px";
			}
		}
		
		b3.onmouseleave = function () {
			jucarie.remove();
			cat.style.right = "0px";
		}
	}
	var timeout = this.setTimeout(function () {
		alert("Hai sa ne jucam! Muta cursorul deasupra mea, ca se ta pot urmari sau apasa unul dintre cele trei butoane. ");
	}, 30000);
	div_pisica.onmouseover = function() {
		clearTimeout(timeout);
	}
}

window.onkeypress = function(e) {
	var tasta = e.key;
	if (tasta == 'm') {
		miaunat(e);
	}
	
}

