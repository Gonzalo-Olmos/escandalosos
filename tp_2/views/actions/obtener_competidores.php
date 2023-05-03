<?php
include_once("../../models/Competidor.php");
include("../../models/Pais.php");
include("../../models/Estado.php");

$objCompetidor = new Competidor();
$objPais = new Pais();
$objEstado = new Estado();
$competidores = array();

$arreglo_competidores = $objCompetidor->listar(true);

foreach ($arreglo_competidores as $value) {
    $pais = $objPais->buscar($value['idpais']);
    $estado = $objEstado->buscar($value['idestado']);

    $competidores[] = [
        $value['gal'],
        $value['apellido'],
        $value['nombre'],
        $value['du'],
        date('d/m/Y', strtotime($value['fechaNacimiento'])),
        $pais[0]['paisnombre'].' | '.$estado[0]['estadonombre'],
        $value['graduacion'],
        $value['clasificacionGeneral'],
        $value['email'],
        $value['genero']
    ];
}
echo json_encode($competidores);
exit;  