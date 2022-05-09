const disp = document.getElementById("display");

function display(value) {
	disp.innerHTML+=value;
}

function result() {
	let value = disp.innerHTML;
	let result = eval(value);
	disp.innerHTML = result;
}
