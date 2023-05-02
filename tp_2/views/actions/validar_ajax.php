<?php
include_once("../../configuracion.php");

$result = array();
$datos = data_submitted(); // Llega solo gal, email y du

$objCompetidor = new Competidor();
$galDuplicado = $objCompetidor->listar("gal = '" . $datos['gal'] . "'");
$emailDuplicado = $objCompetidor->listar("email = '" . $datos['email'] . "'");
$duDuplicado = $objCompetidor->listar("du = '" . $datos['du'] . "'");

if(!is_null($galDuplicado)){
    $result["success"] = 0;
    $result["errors"][] = ["mensaje" => "Este GAL ya se encuentra registrado.", "campo" => "validationCustom01"];
}
if(!is_null($emailDuplicado)){
    $result["success"] = 0;
    $result["errors"][] = ["mensaje" => "Este e-mail ya se encuentra registrado.", "campo" => "validationCustom07"];
}
if(!is_null($duDuplicado)){
    $result["success"] = 0;
    $result["errors"][] = ["mensaje" => "Este número de documento ya se encuentra registrado.", "campo" => "validationCustom10"];
}
if(count($result) == 0){
    $result['success'] = 1;
}

echo json_encode($result);
exit;