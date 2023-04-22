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
    $('#pais').autocomplete({					    
        source: function(request, response){
            var url = "../views/actions/autocomplet_paises.php";
            $.post(url, {data:request.term}, function(data){
                response($.map(data, function(paises) {
                    return {	
                        value:paises.id,              
                        label:paises.nombrepais,
                        id_pais: paises.id,	
                        descripcion: paises.nombrepais,							           
                    };
                }));
            }, "json");  
        },
        minLength: 2,
        autofocus: true,
        delay: 500,		        
        select: function (event, ui) {	
            $('#id_pais').val(ui.item.id_pais);
            $('#pais').val(ui.item.descripcion);
        },
        change: function( event, ui ) {
            if(ui.item==null){
                limpiar_datos_paises();
            }
        }		       
    });
});

function limpiar_datos_paises(){
    $('#id_pais').val("");
    $('#nombre_pais').val("");
}