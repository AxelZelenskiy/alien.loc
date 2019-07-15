let swapi  = 'https://swapi.co/api/',
	sw_req = 'people/1/';
let xhr_version = ('onload' in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
let xhr = new xhr_version();
xhr.open('GET',swapi + sw_req, true);
xhr.send();
xhr.onreadystatechange = function () {
	if (xhr.readyState != 4) return;
	let new_h2 = document.createElement('h2');
	new_h2.innerHTML = 'Ajax Request Done!!!';
	document.getElementById('msg-txt').appendChild(new_h2);
	if (xhr.status !=200 ) {
		console.log( xhr.status , ':',xhr.statusText);
	} else {
		document.getElementById('pack').innerHTML = xhr.responseText;
	}
};

fetch(swapi+sw_req)
		.then(res => {return res.json();})
		.then(json_result => {console.log(json_result)});