//your JS code here. If required.
let screensize=document.getElementById("sizeInfo");
document.body.append(screensize);
 // window.onresize = function(){
	//  sizeElement.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
 // }
window.onresize =function () {
  screensize.innerText=`Width:${window.innerWidth} and Height:${window.innerHeight}`;
}
