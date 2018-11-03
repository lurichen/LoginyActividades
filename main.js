$(document).ready(function(){

  var actividadSelecionada = JSON.parse(localStorage.getItem('actividad')) || null;
  $('#actividad').val(actividadSelecionada).trigger('change');

  if( actividadSelecionada !== null ) {
    //la Activadad ya esta seleccionada - no se necessario enseñar la seleccion
      //Hide Seleccion Container
    $('#actividadesSeleccion').hide();
      //Show Contacto Formulario
  } else {
    $('#actividad').select2({
      width: '100%',
      placeholder: "Seleciona una Actividad",
      allowClear: true
    });

    $('#actividad').on('select2:select', function (e) {
      var data = e.params.data;
      console.log(data);
      actividadSelecionada = data.id;
      $('#actividades-guardar').show().removeAttr("disabled").removeClass("disabled");
    });

    $("#actividades-guardar").click(function(e) {
      e.preventDefault();
      //se guardar la option localmente
      localStorage.setItem('actividad', JSON.stringify(actividadSelecionada));
        //localStorage.clear();
      //se esconde el Container Select de Actividades
      //se ensigna el Container Formulario de Contactos
    });
  }

  $(".menu li:has('ul')").click(function(e) {
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
      //$('.btn-menu').menu.menu; // Que pasa aqui ???
    });

    $(window).resize(function() {
      if($(document).width() > 320) {
        $('.contenedor-menu .menu').css({'display' : 'block'});
      }

      if($(document).width() < 320) {
        $('contenedor-menu .menu').css({'display' : 'none'});
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
