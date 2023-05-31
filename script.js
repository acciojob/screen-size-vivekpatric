//your JS code here. If required.
//your JS code here. If required.
const sizeElement = document.getElementById("sizeInfo");


document.body.append(sizeElement);
 window.onresize = function(){
	 sizeElement.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
 }
