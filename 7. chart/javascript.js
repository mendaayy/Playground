function drawChart(){ 
  
  var context = document.getElementById( "canvas" ).getContext( "2d" ); 

  var data = ["pepperoni", "pepper", "sauce", "mushroom", "tomato"];
  var colors = ["rgb(226, 78, 66)", "rgb(46, 172, 66)", "rgb(222, 207, 115)", "rgb(242, 235, 205 )", "rgb(227, 140, 69)"];  
  // angle = 72 degrees 
  var angles = [Math.PI * 0.4, Math.PI * 0.4, Math.PI * 0.4, Math.PI * 0.4, Math.PI * 0.4];
  var startAngle = 0;
  var endAngle = 0;

  // for each data
  for(var i = 0; i < angles.length; i++) {
    startAngle = endAngle;
    endAngle = endAngle + angles[i];
     
    // draw pie chart
    context.beginPath();    
    context.fillStyle = colors[i]; 
    context.moveTo(100, 100); 
    // x && y && radius = 100
    context.arc(100, 100, 100, startAngle, endAngle);
    context.fill(); 

    // draw label
    context.rect(220, 25 * i, 30, 12); 
    context.fill(); 
    context.fillStyle = "black"; 
    context.stroke();
    context.font = "bold 12px Helvetica";
    context.fillText(data[i], 260, 25 * i + 10 ); 
  }    
}
   
window.onload = drawChart;