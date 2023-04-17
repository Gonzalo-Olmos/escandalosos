// Referencia al select
const SELECTPAISES = document.getElementById('paisOrigen'); //agregar id
// Paises aceptados según el JSON dado por un método de la clase
const PAISESACEPTADOS = Competidor.paisesAceptados();
// Recorrido del JSON/arreglo
PAISESACEPTADOS.Paises.forEach((pais) => {
    // Colocar las opciones
    SELECTPAISES.innerHTML += `<option value="${pais}">${pais}</option>`;
})