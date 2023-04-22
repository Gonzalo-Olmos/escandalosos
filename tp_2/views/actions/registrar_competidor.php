<?php
include_once("../../models/Competidor.php");


if(!empty($_POST)){
    $objCompetidor = new Competidor();


    $objCompetidor->cargar($_POST['gal'], $_POST['apellido'], $_POST['nombre'],
     $_POST['du'], $_POST['fechaNac'], $_POST['id_pais'], $_POST['graduacion'], 
     $_POST['clasificacionGral'], $_POST['email'], $_POST['genero']);


     

   
}

echo json_encode($_POST);
