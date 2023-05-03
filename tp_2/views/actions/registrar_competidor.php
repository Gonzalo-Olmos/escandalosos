<?php
include_once("../../configuracion.php");

$datos = data_submitted();


if(!empty($datos)){
    $objCompetidor = new Competidor();


    $objCompetidor->cargar($datos['gal'], $datos['apellido'], $datos['nombre'],
     $datos['du'], $datos['fechaNac'], $datos['id_pais'],$datos['id_estado'], $datos['graduacion'], 
     $datos['clasificacionGral'], $datos['email'], $datos['genero']);


    $objCompetidor->insertar();

   
}

