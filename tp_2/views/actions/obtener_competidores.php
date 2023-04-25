<?php
include_once("../../models/Competidor.php");
include("../../models/Pais.php");

$objCompetidor = new Competidor();
$objPais = new Pais();

$competidores = array();

$arreglo_competidores = $objCompetidor->listar(true);

$acciones = array();

foreach ($arreglo_competidores as $value) {

    $pais = $objPais->buscar($value['idpais']);
    $estado = $objPais->buscar_estado($value['idestado']);

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
        $value['genero'],
        implode('|',$acciones),
    ];
}
echo json_encode($competidores);
exit;  