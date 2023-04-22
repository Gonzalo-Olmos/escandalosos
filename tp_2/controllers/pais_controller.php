<?php
include_once("../models/Pais.php");

class pais_controller{

    public function autocomplete_pais($term){

		$objPais = new Pais();
		
	    $pais = $objPais->obtener_pais_por_termino_autocompletado($term);
	    
	    echo json_encode($pais);
	    exit;
	}
}