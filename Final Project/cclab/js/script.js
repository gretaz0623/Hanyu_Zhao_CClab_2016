(function(){
  var canvas = document.getElementById('canvas'),
  context = canvas.getContext('2d'),
  video = document.getElementById('video'),
  vendorUrl = window.URL || window.webkitURL;
  var button = document.getElementById('button');


  navigator.getMedia = navigator.getUserMedia || navigator.webKitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

  navigator.getMedia({
    video: true,
    audio: false
  },function(stream){
      video.src = vendorUrl.createObjectURL(stream);
      video.play();
    },function(error){

    });

button.onclick = to_image;


function to_image(){
    Canvas2Image.saveAsPNG(canvas, 1100, 900);
    console.log("hi");
 }

function draw() {
  context.drawImage(video, 0, 0, video.width, video.height);
  console.log("h0");
}


draw();

})();

var $flower01 = $('.flower01');
var $flower02 = $('.flower02');
var $flower03 = $('.flower03');
var $flower04 = $('.flower04');
var $leftEye = $('.leftEye');
var $cloud = $('#cloud');
var $win = $(window);

$win.on('scroll', function () {
  var top = $win.scrollTop() / 4;
  $flower01 .css('transform', 'rotate(' + top + 'deg)');
});

$win.on('scroll', function () {
  var top = $win.scrollTop() / 3;
  $flower02 .css('transform', 'rotate(' + top + 'deg)');
});


$win.on('scroll', function () {
  var top = $win.scrollTop() / 2;
  $flower03 .css('transform', 'rotate(' + top + 'deg)');
});

$win.on('scroll', function () {
  var top = $win.scrollTop() / 5;
  $flower04 .css('transform', 'rotate(' + top/2 + 'deg)');
});


$win.on('scroll', function () {
  var top = $win.scrollTop()/2.4;
  $leftEye .css('transform', 'rotate(' + top + 'deg)');
});


$( ".rightEye" ).click(function(){ 
$( ".butterfly" ).animate({
    right: 500,
    top: 1200,
  opacity: 1
}, 5000, "linear", function() {
});
});


var is_showing1 = true;

document.getElementById("rightEye1").addEventListener("click",toggle_display1);

function toggle_display1(){
  if (is_showing1 == false) {
        document.getElementById("arrow").style.display="none";
    is_showing1 = true;

  }
  else{

    document.getElementById("arrow").style.display="inherit";
    is_showing1 = false;


  }
}


$( "#cloud" ).click(function() {
  $( "#long" ).animate({
    opacity: 1,
  }, 1000, function() {
  });
});

var is_showing = true;

document.getElementById("cloud").addEventListener("click",toggle_display);

function toggle_display(){
  if (is_showing == false) {
        document.getElementById("arrow2").style.display="none";
    is_showing = true;

  }
  else{

    document.getElementById("arrow2").style.display="inherit";
    is_showing = false;


  }
}

$( "#cloud").click(function() {
  $( "#longLeftEye" ).animate({
    opacity: 1,
  }, 10000, function() {
  });
});





$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
  
      event.preventDefault();
      var hash = this.hash;

       $('body, html').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        window.location.hash = hash;
      });
    } 
  });
});









