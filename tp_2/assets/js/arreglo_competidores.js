const competidor_1 = {
    GAL: "ABC1234567",
    apellido: "Ramirez",
    nombre: "Maximiliano",
    DU: "ap chagi du makki",
    fechaNac: "01/01/2000",
    paisOrigen: "Paraguay",
    graduacion: "1do GUP",
    clasificacionGen: 120,
    email: "maximiliano.ramirez@gmail.com",
    genero: "Masculino",
};


const competidor_2 = {
    GAL: "ABC1456723",
    apellido: "Fernandez",
    nombre: "Vicente",
    DU: "Ap kubi",
    fechaNac: "29/11/1975",
    paisOrigen: "Argentina",
    graduacion: "4do GUP",
    clasificacionGen: 456,
    email: "vicente.Fernandez@gmail.com",
    genero: "Masculino",
};


const competidor_3 = {
    GAL: "ABC1456342",
    apellido: "Monica",
    nombre: "Lobos",
    DU: "Momtong makki",
    fechaNac: "09/01/1997",
    paisOrigen: "Venezuela",
    graduacion: "1do GUP",
    clasificacionGen: 333,
    email: "monica.lobos@gmail.com",
    genero: "No Binario",
};

let objCompetidor_1 = new Competidor(competidor_1['GAL'], competidor_1['apellido'], competidor_1['nombre'], competidor_1['DU'], competidor_1['fechaNac'], competidor_1['paisOrigen'], competidor_1['graduacion'], competidor_1['clasificacionGen'], competidor_1['email'], competidor_1['genero'])
let objCompetidor_2 = new Competidor(competidor_2['GAL'], competidor_2['apellido'], competidor_2['nombre'], competidor_2['DU'], competidor_2['fechaNac'], competidor_2['paisOrigen'], competidor_2['graduacion'], competidor_2['clasificacionGen'], competidor_2['email'], competidor_2['genero'])
let objCompetidor_3 = new Competidor(competidor_3['GAL'], competidor_3['apellido'], competidor_3['nombre'], competidor_3['DU'], competidor_3['fechaNac'], competidor_3['paisOrigen'], competidor_3['graduacion'], competidor_3['clasificacionGen'], competidor_3['email'], competidor_3['genero'])

export let arreglo_competidores = [
    objCompetidor_1,
    objCompetidor_2,
    objCompetidor_3
];

for (let i = 0; i < arreglo_competidores.length; i++) {
    document.getElementById('competidores_' + i).innerHTML = arreglo_competidores[i].getPerfil();
}