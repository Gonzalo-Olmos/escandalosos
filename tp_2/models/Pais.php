<?php
include_once 'conector/BaseDatos.php';
class Pais
{
    private $id_pais;
    private $nombre_pais;
    private $mensaje;

    public function __construct()
    {
        $this->id_pais = "";
        $this->nombre_pais = "";
    }

    public function cargar($id_pais, $nombre_pais)
    {
        $this->setIdPais($id_pais);
        $this->setNombrePais($nombre_pais);
    }

    //Metodos de acceso
    
    public function getIdPais(){
        return $this->id_pais;
    }

    public function getNombrePais(){
        return $this->nombre_pais;
    }

    public function setIdPais($id_pais){
        $this->id_pais = $id_pais;
    }

    public function setNombrePais($nombre_pais){
        $this->nombre_pais = $nombre_pais;
    }

    public function getMensaje()
    {
        return $this->mensaje;
    }

    public function setMensaje($mensaje)
    {
        $this->mensaje = $mensaje;
    }

    public function __toString()
    {
        return "id_pais: " . $this->getIdPais() .
            "\nnombre_pais: " . $this->getNombrePais();
    }

    //Funciones BD
    public function obtener_pais_por_termino_autocompletado($termino){
        $query="SELECT *
        FROM pais
        WHERE  (paisnombre LIKE '%$termino%')";

        $base = new BaseDatos();
        $rta = false;
        if ($base->Iniciar()) {
            if ($base->Ejecutar($query)) {
                $array = array();
                while ($row2 = $base->Registro()) {
                    $array[] = array(
                        'value'=>$row2['id'],
                        'label'=> $row2['paisnombre']
                    );
                }
                $rta = $array;

            } else {
                $this->setMensaje($base->getError());
            }
        } else {
            $this->setMensaje($base->getError());
        }
        return $rta;
    }

    
}
