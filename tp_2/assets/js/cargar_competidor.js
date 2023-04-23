import {Competidor} from './competidor.js';

export const validarFormulario = () => {
    const form = document.getElementById('competidorForm');

    form.addEventListener('submit', (event) => {
        let datos = new Array();
        let objCompetidor;

        // Prevenimos que se envie el formulario
        event.preventDefault()
        event.stopPropagation()
        form.classList.add('was-validated')

        // Si está validado, creamos objeto y mostramos
        if(form.checkValidity()){
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