import {Competidor} from './Competidor.js';
import {arreglo_competidores} from './arreglo_competidores.js';
import {PAISESACEPTADOS} from './paisesAceptados.js';
import {validar_formulario} from './cargarCompetidor.js';

const SELECTPAISES = document.getElementById('paisOrigen');

for (let i = 0; i < arreglo_competidores.length; i++) {

    if (document.getElementById('competidores_' + i) !== null) {
    document.getElementById('competidores_' + i).innerHTML = arreglo_competidores[i].getPerfil();

    }
}

// Recorrido del JSON/arreglo
PAISESACEPTADOS.Paises.forEach((pais) => {
    // Colocar las opciones
    SELECTPAISES.innerHTML += `<option value="${pais}">${pais}</option>`;
});

validar_formulario();
