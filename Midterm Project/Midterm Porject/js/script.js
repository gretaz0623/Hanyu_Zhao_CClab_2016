var flag = 1;
var pos = 0;

 // $( function() {
 //    $( ".draggable" ).draggable();
 //  } );

document.addEventListener("DOMContentLoaded",function(){
	var startPoint =0;
	var box = document.getElementById("smoking");
	var box1 = document.getElementById("smoking1");

var moveDiv = function(){
		box.style.transform = "translate(0," + startPoint +"px)";
		if(flag == 1){
			startPoint+=1;
		}else{
			startPoint-=1;
		}
		if(startPoint>15) flag = 0;
		if(startPoint<-15) flag = 1;


	}

var moveDiv1 = function(){
		box1.style.transform = "translate(0," + startPoint +"px)";
		if(flag == 1){
			startPoint+=1;
		}else{
			startPoint-=1;
		}
		if(startPoint>15) flag = 0;
		if(startPoint<-15) flag = 1;


	}
	moveDiv();
	moveDiv1();

window.setInterval(moveDiv,100);
window.setInterval(moveDiv1,100);
	});

   $(document).ready(function() {
        $('.enter').addClass('.intro-loaded');
      });


$(function() {
     $( "#pumkin" ).draggable();
     $( "#lotus" ).draggable();
     $( "#leftHand" ).draggable();
     $( "#fire01" ).draggable();
     $( "#fire02" ).draggable();
     $( "#rightHand" ).draggable();
     $( "#fire03" ).draggable();
     $( "#smoke" ).draggable();
     $( "#horn" ).draggable();
     $( "#hat" ).draggable();
     $( "#click" ).draggable();
});

$(document).click(function() {
     $( "#horse" ).toggle( "blind");
     $( "#smoking" ).toggle( "blind");
     $( "#circle" ).toggle( "blind");
});


//   {
// 	$('#pumkin').on('mousedown',function(e){
// 		var initialx = e.pageX - $(this).offset().left;
// 		var initialy = e.pageY - $(this).offset().top;

// 		$(window).on('mousemove',function(e){
// 			var posx = e.pageX - initialx;
// 			var posy = e.pageY - initialy;
// 			$('#pumkin').css({'left':posx,'top':posy});

// 		});

// 		$(window).on('mouseup',function(){
// 			$(this).off('mousemove');

// 		});

// 	});
// });

// $(document).ready(function(){
// 	$('#lotus').on('mousedown',function(e){
// 		var initialx = e.pageX - $(this).offset().left;
// 		var initialy = e.pageY - $(this).offset().top;

// 		$(window).on('mousemove',function(e){
// 			var posx = e.pageX - initialx;
// 			var posy = e.pageY - initialy;
// 			$('#lotus').css({'left':posx,'top':posy});

// 		});

// 		$(window).on('mouseup',function(){
// 			$(this).off('mousemove');

// 		});

// 	});
// });

// $(document).ready(function()
//   {
// 	$('#leftHand').on('mousedown',function(e){
// 		var initialx = e.pageX - $(this).offset().left;
// 		var initialy = e.pageY - $(this).offset().top;

// 		$(window).on('mousemove',function(e){
// 			var posx = e.pageX - initialx;
// 			var posy = e.pageY - initialy;
// 			$('#leftHand').css({'left':posx,'top':posy});

// 		});

// 		$(window).on('mouseup',function(){
// 			$(this).off('mousemove');

// 		});

// 	});
// });

// $(document).ready(function()
//   {
// 	$('#fire01').mousedown(function(e){
// 		var initialx = e.pageX - $(this).offset().left;
// 		var initialy = e.pageY - $(this).offset().top;

// 		$(window).mousemove(function(e){
// 			var posx = e.pageX - initialx;
// 			var posy = e.pageY - initialy;
// 			$('#fire01').css({'left':posx,'top':posy});

// 		});

// 		$(window).on('mouseup',function(){
// 			$(this).off('mousemove');

// 		});

// 	});
// });

// $(document).ready(function()
//    {
// 	$('#fire02').mousedown(function(e){
// 	   	e = e || event;
// 	   var initialx = e.pageX - $(this).offset().left;
// 		var initialy = e.pageY - $(this).offset().top;

// 		$(window).mousemove(function(e){
// 		    var posx = e.pageX - initialx;
// 			var posy = e.pageY- initialy;
// 			$('#fire02').css({'left':posx,'top':posy});

// 		});

// 		$(window).on('mouseup',function(){
// 			$(this).off('mousemove');

// 		});

// 	});

// });

// $(document).ready(function()
//    {
//    	var initialx = 0;
//    	var initialy = 0;

//    	var rightHandSelected = false;

//    	var isDragging = false;

//     $("#rightHand")
//     .mousedown(function() {
//         isDragging = true;
//     })

//     $("#rightHand").mousemove(function(e) {
//         isDragging = true;

//         if (isDragging) {
//         	 $('#rightHand').css({'left':e.pageX - 70,'top':e.pageY - 70});
//         }
       

//      })
//     $("#rightHand").mouseup(function() {
//         var wasDragging = isDragging;
//         isDragging = false;
    
//     });


	// $('#rightHand').mousedown(function(e){
	//    	e = e || event;
	//    	initialx = e.pageX - $(this).offset().left;
	// 	initialy = e.pageY - $(this).offset().top;
	// 	rightHandSelected  = true;

	// 	console.log("mouse is clicking on this thing: " + rightHandSelected);
	// 	console.log("starting pos x: " + e.pageX);
	// 	console.log("starting pos y: " + initialy);


	// 	$(window).mousemove(function(e){
	// 		var posx = e.pageX - initialx;
	// 		var posy = e.pageY - initialy;

	// 		console.log("mouse is moving: " + rightHandSelected);
	// 		console.log("mouse pos x: " + e.pageX);

	// 		$('#rightHand').css({'left':e.pageX - 70,'top':e.pageY - 70});
	
	// 	});



		
	// });

	// $(window).on('mouseup',function(){

	// 		$(this).off('mousemove');
	// 		rightHandSelected  = false;
	// 		console.log("mouse is clicking on this thing: " + rightHandSelected);
	// 	});
	

	

// });

 // $( function() {
 //    $( ".draggable" ).draggable();
 //  } );






