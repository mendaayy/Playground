function translation(string) {
	var words= string.split(/(?=[!?.,])|[_-\s]/);
	var result = [];

	for (var i = 0; i < words.length; i++) {
	    var word = words[i].split('');
	    word.push(word.shift());
	    word.push('ay');
	    result.push(word.join(''));
	}
	return result.join(" ");
}

var button = document.getElementById('button');
var input = document.getElementById('input');
var output = document.getElementById('output');

// button clicked
function clicked() {
  output.value = translation(input.value);
};

// keyboard key pressed
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
        button.click();
    }
});