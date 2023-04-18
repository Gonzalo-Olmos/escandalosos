import {Competidor} from './Competidor.js';

const COMPETIDORES = [
    {
        GAL: "ABC1234567",
        apellido: "Ramirez",
        nombre: "Maximiliano",
        DU: "ap chagi du makki",
        fechaNac: "1/1/2000",
        paisOrigen: "Paraguay",
        graduacion: "1do GUP",
        clasificacionGen: 120,
        email: "maximiliano.ramirez@gmail.com",
        genero: "Masculino",
    },
    {
        GAL: "ABC1456723",
        apellido: "Fernandez",
        nombre: "Vicente",
        DU: "Ap kubi",
        fechaNac: "11/10/1975",
        paisOrigen: "Argentina",
        graduacion: "4do GUP",
        clasificacionGen: 456,
        email: "vicente.Fernandez@gmail.com",
        genero: "Masculino",
    },
    {
        GAL: "ABC1456342",
        apellido: "Monica",
        nombre: "Lobos",
        DU: "Momtong makki",
        fechaNac: "9/1/1997",
        paisOrigen: "Venezuela",
        graduacion: "1do GUP",
        clasificacionGen: 333,
        email: "monica.lobos@gmail.com",
        genero: "No Binario",
    }
];

let objCompetidor;
let arregloCompetidores = new Array();

COMPETIDORES.forEach((competidor) => {
    objCompetidor = new Competidor
        (
            competidor.GAL, competidor.apellido, competidor.nombre,
            competidor.DU, competidor.fechaNac, competidor.paisOrigen,
            competidor.graduacion, competidor.clasificacionGen, competidor.email,
            competidor.genero
        );
    arregloCompetidores.push(objCompetidor);
})

export{ arregloCompetidores };

