var flag = 1;
  var pos = 0;

document.addEventListener("DOMContentLoaded",function(){
	console.log(13);
	var startDegree =0;
	var startScale =10;
	var imageDiv = document.getElementsByClassName("imagesPicture");
	var box = document.getElementById("squareColor");
	var crystal = document.getElementById("crystal");

var rotateDiv = function(){
		box.style.transform = "translate(0," + startDegree +"px)";
		console.log(box.style.transform);
		if(flag == 1){
			startDegree+=1;
		}else{
			startDegree-=1;
		}
		if(startDegree>15) flag = 0;
		if(startDegree<-15) flag = 1;

  var planet = document.getElementById("planet");
  var id = setInterval(frame, 1000);

  function frame() {
      pos++;
      planet.style.transform = "rotate("+pos+"deg)";
    
  }
	}
	rotateDiv();



	window.setInterval(rotateDiv,100);
	});



window.onload = lineChange;

var pinkRiver = document.getElementsByClassName("pinkRiver");

function lineChange(){
	pinkRiver[0].style.backgroundColor = "rgb(" +
	Math.floor(Math.random() *256) + "," +
	Math.floor(Math.random() *256) + "," +
	Math.floor(Math.random() *256) + ")";

	setTimeout("lineChange()",1000);
}





























