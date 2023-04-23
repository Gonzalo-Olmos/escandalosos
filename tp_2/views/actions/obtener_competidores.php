<?php
include_once("../../models/Competidor.php");
include("../../models/Pais.php");
$objCompetidor = new Competidor();

$competidores = array();

$arreglo_competidores = $objCompetidor->listar(true);

$acciones = array();

foreach ($arreglo_competidores as $value) {
    $competidores[] = [
        $value['gal'],
        $value['apellido'],
        $value['nombre'],
        $value['du'],
        date('d/m/Y', strtotime($value['fechaNacimiento'])),
        $value['idpais'],
        $value['graduacion'],
        $value['clasificacionGeneral'],
        $value['email'],
        $value['genero'],
        implode('|',$acciones),
    ];
}
echo json_encode($competidores);
exit;  