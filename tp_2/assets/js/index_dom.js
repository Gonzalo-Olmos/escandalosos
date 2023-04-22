import {Competidor} from './competidor.js';
import {arregloCompetidores} from './arreglo_competidores.js';
import {PAISESACEPTADOS} from './paises_aceptados.js';
import {validarFormulario} from './cargar_competidor.js';

var base_url = "http://localhost/PWA/PUBLICO/escandalosos/tp_2";
// Variables
let tarjetas = "";

// Index

for (let i = 0; i < arregloCompetidores.length; i++) {
    tarjetas += arregloCompetidores[i].getPerfil();
}
if(document.getElementById('competidores') !==  null){
    document.getElementById('competidores').innerHTML = tarjetas;
}


// Cargar

// Recorrido del JSON/arreglo
PAISESACEPTADOS.Paises.forEach((pais) => {
    if(document.getElementById('paisOrigen') !==  null){
        // Colocar las opciones
        document.getElementById('paisOrigen').innerHTML += `<option value="${pais}">${pais}</option>`;
    }
});

if(document.getElementById('competidorForm') !==  null){
    validarFormulario();
}



$(document).on("click", ".open-AddBookDialog_seccion_imagenes", function () {
    var id_imagen = $(this).val();
    
    $( "#modal_informacion_imagen .informacion_de_imagen").children().remove();
 
    $.ajax({
        type: "POST",
        url:  base_url +"/controllers/competidor/obtener_informacion_de_imagen/"+id_imagen,
        data: {	          		           
               },
        dataType: "json",
        async:true,
        success: function(data){		
                $( "#modal_informacion_imagen .informacion_de_imagen").append( data );     
        }
    });
  
});