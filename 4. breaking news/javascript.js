// applying animations with js instead of css

//method 1: spin banner
var spin = [
  { transform: 'rotateY(0) translateZ(150px)'},
  { transform: 'rotateY(360deg) translateZ(150px)'}
];

var time = {
  duration: 4500,
  iterations: Infinity,
}

var banner = document.getElementById("banner");

banner.animate(spin, time);

//method 2: rotate big circle
var degrees = 0; 
var deg = 60; //incrementation


function rotate() 
{
var circle = document.getElementById("circle");
    
circle.style.transform = "rotate("+degrees+"deg)";
    
setTimeout("rotate()",200);    
degrees = degrees + deg;
}
rotate();

// rotate small circle
function rotate2() 
{
var circle2 = document.getElementById("circle2");
    
circle2.style.transform = "rotate("+degrees+"deg)";
    
setTimeout("rotate2()",250);    
degrees = degrees + deg;
}
rotate2();


