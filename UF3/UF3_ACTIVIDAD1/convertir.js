document.getElementById("euros").onkeyup=function(){
	document.getElementById("pessetes").value=parseInt(this.value*166.386)}
document.getElementById("pessetes").onkeyup=function(){
	document.getElementById("euros").value=parseFloat(this.value/166.386).toFixed(2)}
document.getElementById("utilitat").onclick=function(){
	document.getElementById("euros").value=""
	document.getElementById("pessetes").value=""
}