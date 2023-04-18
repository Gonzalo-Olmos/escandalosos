
import {Competidor} from './Competidor.js';

export function validar_formulario(){
    
const form = document.getElementById('competidorForm')

form.addEventListener('submit', (event) => {
let inputs;
let datos = new Array();

event.preventDefault()
event.stopPropagation()
form.classList.add('was-validated')

// Si está validado, creamos objeto y mostramos
if(form.checkValidity()){
    // Asumimos que tenemos todo.
    // Obtenemos los inputs
    inputs = document.getElementsByClassName('form-competidor');
    console.log(inputs)
    Array.from(inputs).forEach((input) => {
    console.log(input.value)
    // Recorremos los inputs y pusheamos los datos en un arreglo
    datos.push(input.value);
    })

    console.log(datos);
    // Creamos el obj. Los datos son recuperados en orden

    // Cambiamos formato de fecha
    let fecha = datos[4].split('-');
    datos[4] = fecha[2]+"/"+fecha[1]+"/"+fecha[0];

    let objCompetidor = new Competidor(datos[0], datos[1], datos[2], datos[3], datos[4], datos[5], datos[6], datos[7], datos[8], datos[9])
    // Mostramos sus datos en un div
    document.getElementById('resultado').innerHTML = objCompetidor.getPerfil();
}
});
}
