<?php
include_once("../../configuracion.php");

if(!empty($_POST)){
    $objEstado = new Estado();
    $estado = array();

    $estado = $objEstado->obtener_estado_por_termino_autocompletado($_POST['term'],$_POST['id_pais']);  
    echo json_encode($estado);
    exit;  
}
