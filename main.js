$(document).ready(function(){

  $('.menu li:has('ul')').click(function(e){
    e.preventDefault();

    if ($(this).hasClass('activado')) {
      // no hacer nada
    } else {
      $('.menu li ul').removeClass();
      $('.menu li ul').removeClass('activado');
      $('this').addClass('activado');
      $('this').children('ul').slideDown();
    }

    $('.btn-menu').click(function() {
      $('.contenedor .menu .menu').slidetoggle();
      $('.btn-menu').menu.menu; // Que pasa aqui ???
    });

    $(window).resize(function() {
      if($(document).width() > 320) {
        $('.contenedor-menu .menu').css({'display' : 'block'});
      }

      if ($(document).width() < 320) {
        $('contenedor-menu .menu').css('display' : 'none'});
        $('.menu li ul').slideUp();
        $('.menu li').removeclass('activado');
      }
    });
  });

  /*function validate (input) {
    if($(input).attr('type') == 'correoElectronico' || $(input).attr('contrasena') == 'correoElectronico') {
      if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
        return false;
      }
    } else {
      if($(input).val().trim() == ''){
        return false;
      }
    }
  }*/

});
