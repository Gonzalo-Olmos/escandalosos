import {Competidor} from './competidor.js';
import {arregloCompetidores} from './arreglo_competidores.js';
import {PAISESACEPTADOS} from './paises_aceptados.js';
import {validarFormulario} from './cargar_competidor.js';

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

$(document).ready(function() {
    $(function() {
      $( "#pais" ).autocomplete({
        source: function( request, response ) {
          $.ajax({
            type:"POST",
            url: "../views/actions/autocomplet_paises.php",// Ruta al archivo JSON con datos.
            dataType: "json",
            data: {
              term: request.term
            },
            success: function( data ) {
                response($.map(data, function(pais) {
                    return {	
                            value:pais.value,              
                            label:pais.label,
                            id_pais: pais.value,	
                            descripcion: pais.label,							           
                    };
                }));
            }
          });
        },
        select: function(event, ui) {
          // Asignar valor seleccionado al input.
          $( "#pais" ).val(ui.item.descripcion);
          $( "#id_pais" ).val(ui.item.id_pais);
          return false;
        },
        change: function( event, ui ) {
            if(ui.item==null){
                limpiar_datos_paises();
            }
        },
        minLength: 2 // Mínimo de caracteres a escribir para que aparezcan sugerencias.
      });
    });
  });

function limpiar_datos_paises(){
    $('#id_pais').val("");
    $('#nombre_pais').val("");
}