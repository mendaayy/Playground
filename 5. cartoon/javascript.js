// different methods for js animations compared to the breaking news challenge

var button = document.getElementById("watch");
var audio = document.getElementById("audio");
var page1 = document.getElementById("page1");
var page2 = document.getElementById("page2");

button.addEventListener("click", clickedFunction);

function clickedFunction() {
	audio.play();
	page1.style.display = "none";
	page2.style.display = "block";
}

const car1 = document.getElementById("car1");
var bool = true;
var height = [330, 360, 400, 430];
var i = 0;

function moveCar1() {
	car1.style.marginTop = height[i] + "px";

	if(i === height.length - 1 ){
	    bool = false;
	}else if(i === 0){
	    bool = true;
	}
	bool ? i++ : i-- 
}
moveCar1();
setInterval(moveCar1, 425);

const car2 = document.getElementById("car2");
var width = 0;

function moveCar2() {
   document.getElementById("car2").style.right= width +"px";
   width++;
   setTimeout(moveCar2,2);
}
moveCar2();