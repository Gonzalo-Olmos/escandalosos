import { validarAjax } from "./validar_ajax.js";

export const chequearValidez = (input) => {
    if(input.checkValidity()){
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
    }else{
        input.classList.remove('is-valid');
        input.classList.add('is-invalid');
    }
}

export const validarFormulario = () => {
    const $form = document.getElementById('competidorForm');
    const $inputs = document.querySelectorAll('.form-competidor');

    $inputs.forEach((el) => {
        el.addEventListener('input', (e) => {
            let target = e.target;

            chequearValidez(target);
        })
    })
    

    $form.addEventListener('submit', (event) => {
        // Prevenimos que se envie el formulario
        event.preventDefault()
        event.stopPropagation()

        $inputs.forEach((el) => {
            chequearValidez(el);
        })

        // Si está validado, creamos objeto y mostramos
        if($form.checkValidity() && validarAjax()){
            $.ajax({
                url: "actions/registrar_competidor.php",
                type: "POST",
                data: $("#competidorForm").serialize(),
                success: function(result) {
                    location.reload();
                },
            });
        }
    });
}

