
/*Copyright Jorge Pacora 2013 (jpacora.com) - Licensiado a InnoDesign*/

$('#contactoForm').submit(function(event) {
  if(validarContacto()){  // Primero validará el formulario.
    ///////////Inicio AJAX
    $.ajax({
            type: 'POST',
            url: '/3dparty/contacto.php',
            data: $('#contactoForm').serialize(),
            success: function(data) {
      switch(data.charAt(0)){
      case '0':
        alert(data.substring(3));
      break;

      case '1':
        //location.href = '/';
        mensajeOK();
        //window.setTimeout(cerrarModal(), 50000);
         setTimeout('cerrarModal()',3000)
      break;

            } ;
      
      }
        })
    ///////////Fin AJAX
  return false;
  } else { return false; };
});


function validarContacto() {
  console.log('Validando...');
  
  if(!validarEmail($("#email").val())) {
    alert('Debe de ingresar un email valido');
    $('#email').focus();
    return false;
  } else if($('#nombre').val() == '') {
    alert('Debes ingresar tu nombre');
    $('#nombre').focus();
    return false;
  } else if($('#mensaje').val() == '') {
    alert('Debes ingresar tu mensaje');
    $('#mensaje').focus();
    return false;
  };
  return true;  // Si todo está correcto
};

function validarEmail( email ) {
    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if ( !expr.test(email) ) { return false; } else { return true; };
};

function mensajeOK() {
  $('.modal-body').html('<div align="center"><h1>Gracias por ponerte en contacto!</h1></div>');
  $('.modal-footer').fadeOut();
};

function cerrarModal() {
  $('.modal-scrollable').fadeOut();
  $('#backdrop').fadeOut();
};

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
};