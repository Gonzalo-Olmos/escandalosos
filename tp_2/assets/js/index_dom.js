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
      $( "#estado" ).autocomplete({
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
                            label:pais.label+" | "+pais.estado,	
                            id_estado: pais.value,	
                            descripcion: pais.label+" | "+pais.estado,							           
                    };
                }));
            }
          });
        },
        select: function(event, ui) {
          // Asignar valor seleccionado al input.
          $( "#estado" ).val(ui.item.descripcion);
          $( "#id_estado" ).val(ui.item.id_estado);
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