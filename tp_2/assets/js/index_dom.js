import {Competidor} from './competidor.js';
import {arregloCompetidores} from './arreglo_competidores.js';
import {PAISESACEPTADOS} from './paises_aceptados.js';
import {validarFormulario} from './cargar_competidor.js';
import {competidores_tabla} from './datatables_competidores.js';

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


// listo pero falta pulir y modularizar
// Referencias y variable global
const $contador = document.getElementById('contador');
const $btnInicia = document.getElementById('inicio-contador')
const $btnFin = document.getElementById('fin-contador')
const $tiempoTotal = document.getElementById('tiempo-total')
let estaActivo = false;

// Cuando se hace click al botón de inicio
$btnInicia.addEventListener('click', () => {
  // Contadores
  let tiempo = 90;
  let transcurrido = 0;
  let overtime = 0;

  // Reinicio de los estilos del contador
  $contador.classList.remove('text-danger');
  $contador.innerHTML = tiempo+ " seg.";
  $tiempoTotal.innerHTML = "";
  $tiempoTotal.classList.remove('text-danger');

  // Botón de inicio desactivado, botón de fin activado
  $btnFin.classList.remove('disabled');
  $btnInicia.classList.add('disabled');

  // Indicación de que ahora está activo
  estaActivo = true;

  // Intervalo que ejecuta el timer
  const intervalo = setInterval(() => {
    // Si está activo
    if(estaActivo){
      // Sumo al contador total
      transcurrido++;
      // Si está en tiempo reglamentario
      if(tiempo > 0){
        // Resto uno al tiempo y lo muestro
        tiempo--;
        $contador.innerHTML = tiempo+ " seg.";
      }else{
        // Si no, entró en overtime. Sumo uno a overtime y lo muestro.
        // Cambio color del timer a rojo
        overtime++;
        $contador.classList.add('text-danger');
        $contador.innerHTML = overtime+ " seg. OVERTIME";
      }
    }else{
      // Si no está activo (fue presionado el botón de fin)
      // Corto del intervalo y muestro tiempo total
      clearInterval(intervalo);
      $tiempoTotal.innerHTML = "Tiempo total: " + transcurrido + " seg.";
      // Si hay overtime, lo muestro en rojo
      if(overtime > 0){
        $tiempoTotal.classList.add('text-danger');
      }
    }
  }, 1000)
})

// Cuando se clickea el botón de fin
$btnFin.addEventListener('click', () => {
  // Se coloca en false la variable que mantiene el intervalo
  estaActivo = false;

  // Se deshabilita el botón de fin y se activa el de inicio
  $btnFin.classList.add('disabled');
  $btnInicia.classList.remove('disabled');
})