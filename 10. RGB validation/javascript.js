function validation(){
	var button = document.getElementById("button");
	var color = document.getElementById("color").value;
	var colorRegex = /^rgb\((0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)\)$/;
	var colorValidation = colorRegex.test(color);

	if (color == "") {
		alert('Please fill in a format');
		return false;
	} else if (colorValidation == false){
		alert('Please enter a valid rgb color');
		return false;
	} 

	return true;
	}
	button.addEventListener("click", validation);

	// keyboard key pressed
	color.addEventListener('keypress', function(event) {
	if (event.keyCode === 13) {
	    button.click();
	}
});