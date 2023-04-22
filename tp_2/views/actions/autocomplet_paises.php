<?php
include_once("../../controllers/pais.php");

if(!empty($_POST)){
    $objPais = new pais_controller();

    $objPais->autocomplete_pais($_POST['data']);    
}
