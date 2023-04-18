import {Competidor} from './competidor.js';
import {arregloCompetidores} from './arreglo_competidores.js';
import {PAISESACEPTADOS} from './paises_aceptados.js';
import {validarFormulario} from './cargar_competidor.js';

// Index

for (let i = 0; i < arregloCompetidores.length; i++) {
    if (document.getElementById('competidores_' + i) !== null) {
        document.getElementById('competidores_' + i).innerHTML = arregloCompetidores[i].getPerfil();
    }
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