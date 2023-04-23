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
        $query="SELECT pais.id AS id_pais, pais.paisnombre, estado.estadonombre, estado.id AS id_estado
            FROM estado
            INNER JOIN pais ON pais.id = estado.ubicacionpaisid
            WHERE  (estado.estadonombre LIKE '%$termino%')";

        $base = new BaseDatos();
        $rta = false;
        if ($base->Iniciar()) {
            if ($base->Ejecutar($query)) {
                $array = array();
                while ($row2 = $base->Registro()) {
                    $array[] = array(
                        'value'=>$row2['id_estado'],
                        'label'=> $row2['paisnombre'],
                        'estado' => $row2['estadonombre']
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

    public function obtener_pais_por_estado($id_estado){
        $query="SELECT pais.id AS id_pais, pais.paisnombre, estado.estadonombre
        FROM estado
        INNER JOIN pais ON pais.id = estado.ubicacionpaisid
        WHERE  estado.id = $id_estado";

        $base = new BaseDatos();
        $rta = false;
        if ($base->Iniciar()) {
            if ($base->Ejecutar($query)) {
                $array = array();
                while ($row2 = $base->Registro()) {
                    $array[] = array(
                        'id_pais'=>$row2['id_pais'],
                        'paisnombre'=> $row2['paisnombre'],
                        'estadonombre'=> $row2['estadonombre']
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
