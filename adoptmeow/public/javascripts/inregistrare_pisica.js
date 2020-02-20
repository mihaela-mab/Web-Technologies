window.onload = function() {
	var body = document.getElementsByTagName("body")[0];
	var h1 = document.createElement("h1");
	h1.innerHTML = "Inregistrare";
	h1.style.color = "white";
	h1.style.textAlign = "center";
	h1.style.marginTop = "2em";
	body.appendChild(h1);
	
	var dv_form = document.createElement("div");
	dv_form.classList.add("form_container");
	var formular = document.getElementsByTagName("form")[0];
	dv_form.appendChild(formular);
	body.appendChild(dv_form);
	/*var formular = document.createElement("form");
	formular.method = "post";
	formular.name = "inregistrare_pisica";
	formular.action = "/monitorizare";
	formular.enctype="multipart/form-data";
	*/
	//formular.action("")
	var label = [];
	var input = [];
	var textNode;
	for (let i = 0; i < 11; i++) {
		label[i] = document.createElement("label");
		input[i] = document.createElement("input");
		//label[i].appendChild(input[i]);
		formular.appendChild(label[i]);
		
		
	}
	label[0].appendChild(input[0]);
	textNode = document.createTextNode("Nume");
	label[0].insertBefore(textNode, input[0]);
	input[0].type = "text";
	input[0].name = "nume";
	input[0].placeholder = "Introdu numele pisicii...";
	input[0].required = "required";
	
	label[1].appendChild(input[1]);
	var spn = document.createElement("span");
	textNode = document.createTextNode("Ani");
	spn.appendChild(textNode);
	label[1].insertBefore(spn, input[1]);
	input[1].type = "range";
	input[1].min = "0";
	input[1].max = "20";
	input[1].value = "0";
	var val = document.createElement("textarea");
	val.innerHTML = "0";
	label[1].appendChild(val);
	input[1].onchange = function() {
		val.innerHTML = input[1].value;
	}
	val.name = "ani";
	
	var dvrange = document.createElement("div");
	
	label[2].appendChild(input[2]);
	var spn = document.createElement("span");
	textNode = document.createTextNode("Luni");
	spn.appendChild(textNode);
	label[2].insertBefore(spn, input[2]);
	input[2].type = "range";
	input[2].min = "0";
	input[2].max = "12";
	input[2].value = "0";
	var c = document.createElement("textarea");
	c.innerHTML = "0";
	label[2].appendChild(c);
	input[2].onchange = function() {
		c.innerHTML = input[2].value;
	}
	c.name = "luni";
	
	
	dvrange.appendChild(label[1]); 
	dvrange.appendChild(label[2]);
	
	formular.insertBefore(dvrange, label[3]);
	
	

	label[3].appendChild(input[3]);
	var sel = document.createElement("select");
	var opt = [];
	for (let i = 0; i < 5; i++) {
		opt[i] = document.createElement("option");
		sel.appendChild(opt[i]);
	}
	
	
	
	label[3].insertBefore(sel, input[3]);
	opt[0].innerHTML = "british shorthair";
	opt[0].value = "british shorthair"
	opt[1].innerHTML = "persana";
	opt[1].value = "persana";
	opt[2].innerHTML = "birmaneza";
	opt[2].value = "birmaneza";
	opt[3].innerHTML = "siameza"
	opt[3].value = "siameza"
	opt[4].innerHTML = "bengaleza";
	opt[4].value = "bengaleza";
	input[3].type = "text";
	sel.onchange = function() {
		input[3].value = sel.value;
		}
	input[3].placeholder = "Alta rasa...";
	input[3].name = "rasa";
	var textNode = document.createTextNode("Rasa");
	var sp = document.createElement("span");
	sp.appendChild(textNode);
	label[3].insertBefore(sp, sel);
	sel.style.border = "2px solid blue";
	
	var sp;
	for (sp of document.getElementsByTagName("span")) {
		sp.style.color = "white";
	}
	
	var dv = document.createElement("div");
	var p = document.createElement("p");
	p.style.color = "white";
	p.style.fontSize = "2em";
	p.style.marginTop = "10px";
	p.innerHTML = "Selecteaza cateva trasaturi ale pisicii tale";
	label[4].appendChild(p);
	label[4].appendChild(document.createElement("br"));
	
	input[4].type = "checkbox";
	var textNode = document.createTextNode("Jucausa");
	input[4].value = "Jucausa";
	var p = document.createElement("p");
	p.innerHTML = textNode.nodeValue;
	p.style.color = "white";
	label[4].appendChild(p);
	label[4].appendChild(input[4]);

	
	input[5].type = "checkbox";
	var textNode = document.createTextNode("Plina de viata");
	var p = document.createElement("p");
	input[5].value = "Plina de viata";
	p.innerHTML = textNode.nodeValue;
	p.style.color = "white";
	label[4].appendChild(p);
	label[4].appendChild(input[5]);
	
	input[6].type = "checkbox";
	var textNode = document.createTextNode("Iubareata");
	var p = document.createElement("p");
	input[6].value = "Iubareata";
	p.innerHTML = textNode.nodeValue;
	p.style.color = "white";
	label[4].appendChild(p);
	label[4].appendChild(input[6]);
	
	input[7].type = "checkbox";
	var textNode = document.createTextNode("Lenesa");
	var p = document.createElement("p");
	input[7].value = "Lenesa";
	p.innerHTML = textNode.nodeValue;
	p.style.color = "white";
	label[4].appendChild(p);
	label[4].appendChild(input[7]);

	
	input[8].type = "checkbox";
	var textNode = document.createTextNode("Somnoroasa");
	var p = document.createElement("p");
	input[8].value = "Somnoroasa";
	p.innerHTML = textNode.nodeValue;
	p.style.color = "white";
	label[4].appendChild(p);
	label[4].appendChild(input[8]);
	
	
	input[9].type = "checkbox";
	var textNode = document.createTextNode("Nazdravana");
	var p = document.createElement("p");
	p.innerHTML = textNode.nodeValue;
	p.style.color = "white";
	label[4].appendChild(p);
	label[4].appendChild(input[9]);

	

	formular.appendChild(dv);
	formular.style.marginBottom = "20px";
	
	var p = document.createElement("p");
	p.innerHTML = "Selecteaza o poza a pisicii tale";
	label[5].appendChild(p);
	p.style.marginTop = "20px";
	input[10].type = "file";
	input[10].id = "picture";
	input[10].name = "picture";
	label[5].appendChild(input[10]);
	
	p = document.createElement("p");
	p.innerHTML = "Scrie o scurta descriere a pisicii tale";
	
	var txtArea = document.createElement("textarea");
	txtArea.id = "txtar";
	txtArea.name = "descriere";
	formular.appendChild(p);
	formular.appendChild(txtArea);
	
	p = document.createElement("p");
	p.innerHTML = "Esti de acord ca profilul pisicii tale sa fie facut public?";
	label[6].appendChild(p);
	
	var inprad1 = document.createElement("input");
	var inprad2 = document.createElement("input");
	inprad1.type = "radio";
	inprad1.name = "aprobare";
	
	inprad2.type = "radio";
	inprad2.name = "aprobare";
	inprad1.value = "da";
	inprad2.value = "nu";
	label[6].appendChild(document.createTextNode("Da"));
	label[6].appendChild(inprad1);
	label[7].appendChild(document.createTextNode("Nu"));
	label[7].appendChild(inprad2);

	var hidden = document.createElement("input");
	hidden.type = "hidden";
	hidden.name = "radio_value";

	formular.appendChild(hidden);
	if(inprad1.checked == "true") {
		hidden.value = "da";
	}
	else {
		hidden.value = "nu";
	}

	label[6].style.display = "block";
	label[6].style.marginLeft = "10px";
	label[7].style.marginLeft = "10px";
	
	
	p = document.createElement("p");
	p.innerHTML = "Cat de des iti duci pisica la veterinar?"
	formular.appendChild(p);
	var sele = document.createElement("select");
	var opti = [];
	for (let i = 0; i < 6; i++) {
		opti[i] = document.createElement("option");
		sele.appendChild(opti[i]);
	}
	opti[0].innerHTML = "De doua ori pe luna";
	opti[1].innerHTML = "O data pe luna";
	opti[2].innerHTML = "O data la doua luni";
	opti[3].innerHTML = "O data pe an";
	opti[4].innerHTML = "Doar cand este necesar";
	opti[5].innerHTML = "Niciodata";
	formular.appendChild(sele);
	
	var subm = document.createElement("input");
	subm.type = "submit";
	formular.appendChild(subm);

	var reset = document.createElement('input');
	reset.type = "reset";
	formular.appendChild(reset);
	
	subm.onmouseover = function() {
		subm.style.backgroundColor = "rgba(0, 0, 150, 0.3)"
	}
	subm.onmouseout = function() {
		subm.style.backgroundColor = "white";
	}

	reset.onmouseover = function() {
		this.style.backgroundColor = "rgba(0, 0, 150, 0.3)"
	}
	reset.onmouseout = function() {
		this.style.backgroundColor = "white";
	}

}