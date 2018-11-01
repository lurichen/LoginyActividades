
$(document).ready(function(){
    $('.menu li:has('ul')').click(function(e){
     	  e.preventDefault();

          if ($(this).hasClass('activado')){
             
        } else {
 	    	$('.menu li ul').removeClass();
            $('.menu li ul').removeClass('activado');
            $('this').addClass('activado');
            $('this').children('ul').slideDown();
 	    }
 
    $('.btn-menu'.click(fuction(){
    	$('.contenedor .menu .menu').slidetoggle();
     $ ('.btn-menu') .menu .menu
    });

    $(window).resize(function){
    	  if($(document).width()>320){
    	     $('.contenedor-menu .menu').css({'display' : 'block'});
            }

            if ($(document).width()<320{
                $('contenedor-menu .menu').css('display' : 'none'});
                $('.menu li ul').slideUp();
                $('.menu li').removeclass('activado');
            }
    });  
});    
    
