<?php
include("../../models/Pais.php");

if(!empty($_POST)){
    $objPais = new Pais();

    $pais = $objPais->obtener_pais_por_termino_autocompletado($_POST['data']);  
    echo json_encode($pais);
    exit;  
}
