
function sumabin(){
var x = document.getElementById("deci1").value;
	
document.getElementById("deci1").value = "";
document.getElementById("deci1").focus();

x = parseInt(x);
var digitx = parseInt(x, 2);

var y = document.getElementById("deci2").value;
	
document.getElementById("deci2").value = "";
document.getElementById("deci2").focus();

y = parseInt(y);
var digity = parseInt(y, 2);


var resultadodec= digitx + digity;
var resultado = resultadodec.toString(2);

var figs = "The result is: " + resultado + "<br>";


document.getElementById("result").innerHTML = figs;
	
}