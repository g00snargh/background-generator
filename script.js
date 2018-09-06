var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var button = document.getElementById('rand');

function pickColor() {
	body.style.background 
	= 'linear-gradient(to right, ' 
	+ color1.value + ', ' + color2.value + ')';
	css.textContent = body.style.background;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function randomColors() {
	var n = [];
	var i = 0;
	while (i < 6) {
		n[i] = getRndInteger(0, 256);
		i++;
	}
	body.style.background 
	= 'linear-gradient(to right, rgb('
	+ n[0] + ', ' + n[1] + ', ' + n[2] + '), rgb('
	+ n[3] + ', ' + n[4] + ', ' + n[5] + '))';
	css.textContent = body.style.background;
	color1.value = rgbToHex(n[0], n[1], n[2]);
	color2.value = rgbToHex(n[3], n[4], n[5]);


}

button.addEventListener('click', randomColors);

color1.addEventListener('input', pickColor);

color2.addEventListener('input', pickColor);

