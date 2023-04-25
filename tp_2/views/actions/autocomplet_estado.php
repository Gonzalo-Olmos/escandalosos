<?php
include("../../models/Pais.php");

if(!empty($_POST)){
    $objPais = new Pais();
    $estado = array();

    $estado = $objPais->obtener_estado_por_termino_autocompletado($_POST['term'],$_POST['id_pais']);  
    echo json_encode($estado);
    exit;  
}
