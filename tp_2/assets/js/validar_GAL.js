export function validar_gal(){
    $.ajax({
        type:"POST",
        url: "../views/actions/validar_gal.php",// Ruta al archivo JSON con datos.
        dataType: "json",
        data: {
            gal: $('#validationCustom01').val()
        },
        success: function(data){
            if(data['success'] === '0'){	
                $('.valid-feedback').css("display","none");
                confirm(data['texto']);
                $("#validationCustom01").css("border", "1px solid red");
                $("#gal_error").css("display", "block");
            }else{
                $("#gal_error").css("display", "none");
                $("#validationCustom01").css("border", "");
            }
            
        }
      });
}