<?php
include_once("../../models/Competidor.php");

$objCompetidor = new Competidor();

$arreglo_competidores = $objCompetidor->listar(true);

foreach ($arreglo_competidores as $value) {
    if($value['gal'] == $_POST['gal']){
        $result = ['success' => '0','texto'=>  'Este Gal ya se encuentra registrado.'];
		echo json_encode($result);
		exit;
    }
}

$result = ['success' => '1'];
echo json_encode($result);
exit;