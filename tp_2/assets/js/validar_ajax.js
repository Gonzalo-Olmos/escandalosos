export const enviar = () => {
    let esValido = false;
    $.ajax({
        type:"POST",
        url: "actions/validar_ajax.php",// Ruta al archivo JSON con datos.
        dataType: "json",
        data: {
            gal: $('#validationCustom01').val(),
            email: $('#validationCustom07').val(),
            du: $('#validationCustom10').val()
        },
        success: (response) => {
            if(response['success'] === 1){	
                $.ajax({
                    url: "actions/registrar_competidor.php",
                    type: "POST",
                    data: $("#competidorForm").serialize(),
                    success: function(result) {
                        location.reload();
                    },
                });
            }else{
                response['errors'].forEach((el) => {
                    let $campo = $('#'+el['campo']);
                    $campo.removeClass('is-valid');
                    $campo.addClass('is-invalid');
                    $campo.siblings('.invalid-feedback')[0].innerHTML = el['mensaje'];
                })
            }
            
        }
      });

    return esValido;
}