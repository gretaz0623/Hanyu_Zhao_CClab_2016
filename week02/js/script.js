$(document).ready(function(){
	

	$( '.facebook' ).on( "mouseover", function() {
    $( this ).css('opacity','0.5');});
  
    $( '.facebook' ).on( "mouseleave", function() {
    $( this ).css('opacity','1');});

    $( '.ins' ).on( "mouseover", function() {
    $( this ).css('opacity','0.5');});
  
    $( '.ins' ).on( "mouseleave", function() {
    $( this ).css('opacity','1');});

    $( '.vimeo' ).on( "mouseover", function() {
    $( this ).css('opacity','0.5');});
  
    $( '.vimeo' ).on( "mouseleave", function() {
    $( this ).css('opacity','1');});

    $('.nav_item').click(function(){

		var nav = $(this).attr('id');

		if(nav == 'all'){
			$('.videoFolio').addClass('close');
			setTimeout(function(){
				$('.videoFolio').removeClass('close');
			},100);
		}else{
			$('.videoFolio').addClass('close');
			setTimeout(function(){
				$('.' + nav).removeClass('close');
			},100);
		}
	});


    $('.folioName').click(function(){
        $('.folioName').animate({top: '-=5px'});
        $( this ).toggleClass( "yellow", 1000, "easeOutSine" );
    });


 
});

