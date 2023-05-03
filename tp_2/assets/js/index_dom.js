// Modulos
import {arregloCompetidores} from './arreglo_competidores.js';
import {PAISESACEPTADOS} from './paises_aceptados.js';
import {validarFormulario} from './validar_formulario.js';
import {cambio_de_tema} from './cambios_de_tema.js';
import { chequearValidez } from './validar_formulario.js';
import {competidores_tabla} from './datatables_competidores.js';

// Variables
let arreglo_paises = PAISESACEPTADOS['Paises'];
let tarjetas = "";

// Script
for (let i = 0; i < arregloCompetidores.length; i++) {
    tarjetas += arregloCompetidores[i].getPerfil();
}
if(document.getElementById('competidores') !==  null){
    document.getElementById('competidores').innerHTML = tarjetas;
}

if(document.getElementById('competidorForm') !==  null){
    validarFormulario();
}

//Temas
if(localStorage.getItem('background') == null){
  cambio_de_tema("dark");
}else{
  cambio_de_tema(localStorage.getItem('background'));
}

document.getElementById("cambiarVista_negro").addEventListener("click", () => {
  cambio_de_tema("dark")
});
document.getElementById("cambiarVista_blanco").addEventListener("click", () => {
  cambio_de_tema("light")
});

$(document).ready(function() {
    $(function() {

      $('#estado').prop('readonly', true);

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
                  if ($.inArray(pais.label, arreglo_paises) !== -1) {
                    return {	
                      value:pais.value,              
                      label:pais.label,
                      id_pais: pais.value,	
                      descripcion: pais.label,						           
                    };
                  }else{
                    return {	
                      value:pais.value,              
                      label:pais.label+" [No disponible]",
                      id_pais: pais.value,	
                      descripcion: pais.label,						           
                    };
                  }
                }));
            }
          });
        },
        select: function(event, ui) {
          // Asignar valor seleccionado al input.
         if ($.inArray(ui.item.descripcion, arreglo_paises) !== -1) {

            $( "#pais" ).val(ui.item.descripcion);
            $( "#id_pais" ).val(ui.item.id_pais);
            limpiar_datos_estado();
            $('#estado').prop('readonly', false);

            
          }else{
            $("#pais").val(null);
            $("#id_pais").val(null);
            limpiar_datos_estado();
            chequearValidez(document.getElementById("pais"));
          }

          return false;
        },
        change: function( event, ui ) {
            if(ui.item==null){
                limpiar_datos_paises();
                $('#estado').prop('readonly', true);
            }
        },
        minLength: 2 // Mínimo de caracteres a escribir para que aparezcan sugerencias.
      });

      $( "#estado" ).autocomplete({
        source: function( request, response ) {
          $.ajax({
            type:"POST",
            url: "../views/actions/autocomplet_estado.php",// Ruta al archivo JSON con datos.
            dataType: "json",
            data: {
              id_pais: $('#id_pais').val(),
              term: request.term
            },
            success: function( data ) {
                response($.map(data, function(estado) {
                    return {	
                            value:estado.value,              
                            label:estado.label,
                            id_estado: estado.value,	
                            descripcion: estado.label,						           
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
                limpiar_datos_estado();
            }
        },
        minLength: 2 // Mínimo de caracteres a escribir para que aparezcan sugerencias.
      });
    });

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      $($.fn.dataTable.tables(true)).css('width', '100%');
      $($.fn.dataTable.tables( true ) ).DataTable().columns.adjust().draw();
      }); 
  });

function limpiar_datos_paises(){
    $('#id_pais').val("");
    $('#pais').val("");
}

function limpiar_datos_estado(){
  $('#id_estado').val("");
  $('#estado').val("");
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






/**Despliegue del menu hamburguesa con teclas
 * Evento "Keydown" 
 */

let menuHamburguesa = document.getElementById("navbarNavAltMarkup");


document.addEventListener("keydown", function(evento) {

  if (evento.altKey && evento.key === "m") {
    // código para desplegar el menú hamburguesa
  
    //Al volver a teclar se oculta si se está mostrando o se muestra en caso contrario
    if(menuHamburguesa.classList.contains("show")){
      menuHamburguesa.classList.remove("show");
      //console.log(evento);
    }else{
      menuHamburguesa.classList.add("show");
      //console.log(evento);
    }

  }
});


/** 
 * Ocultar Menu Burger cuando se hace click en un enlace
 */
let enlaces = document.querySelectorAll(".nav-link"); 

// Agregar un evento "click" a cada enlace de navegación
enlaces.forEach(function(enlace) {
  
  enlace.addEventListener("click", function() {
    menuHamburguesa.classList.remove("show");

  });
}); 
