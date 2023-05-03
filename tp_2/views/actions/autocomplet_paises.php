<?php
include_once("../../configuracion.php");

if(!empty($_POST)){
    $objPais = new Pais();
    $pais = array();

    $pais = $objPais->obtener_pais_por_termino_autocompletado($_POST['term']);  
    echo json_encode($pais);
    exit;  
}
