var range = document.getElementById("sliderRange"); 
var outputs = document.getElementById("demo1"); 
outputs.innerHTML = range.value; 
  
range.oninput = function() { 
  outputs.innerHTML = this.value;
}