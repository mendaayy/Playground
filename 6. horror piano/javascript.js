// with mouse
function play(file) {
  new Audio(file).play();
}

// with keyboard
var btnA = document.getElementById("btnA");
var btnS = document.getElementById("btnS");
var btnD = document.getElementById("btnD");
var btnF = document.getElementById("btnF");
var btnG = document.getElementById("btnG");
var btnH = document.getElementById("btnH");       
var btnJ = document.getElementById("btnJ");
var btnW = document.getElementById("btnW");
var btnE = document.getElementById("btnE");
var btnT = document.getElementById("btnT");
var btnY=  document.getElementById("btnY");
var btnU = document.getElementById("btnU");

document.onkeyup = function (event) {
  	switch (event.keyCode) {
        case 65: btnA.click();
        	break;
        case 83: btnS.click(); 
        	break;
        case 68: btnD.click(); 
        	break;
        case 70: btnF.click(); 
        	break;
        case 71: btnG.click(); 
        	break;
        case 72: btnH.click(); 
        	break;
        case 74: btnJ.click(); 
        	break;
        case 87: btnW.click(); 
        	break;
        case 69: btnE.click(); 
        	break;
        case 84: btnT.click(); 
        	break;
        case 89: btnY.click(); 
        	break;
        case 85: btnU.click(); 
        	break;
  	}
}