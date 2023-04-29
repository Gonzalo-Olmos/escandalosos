<?php
include_once "./conector/BaseDatos.php";
class Estado extends BaseDatos
{
    private $id;
    private $ubicacionpaisid; // objPais
    private $estadonombre;
    private $mensaje;

    /**
     * Usar cargar() para llenar de datos
     */
    public function __construct()
    {
        $this->id = "";
        $this->ubicacionpaisid = "";
        $this->estadonombre;
    }

    /**
     * Carga el obj de datos
     * @param int $id
     * @param Pais $ubicacionpaisid 
     * @param string $estadonombre
     */
    public function cargar($id, $ubicacionpaisid, $estadonombre){
        $this->setId($id);
        $this->setUbicacionpaisid($ubicacionpaisid);
        $this->setEstadonombre($estadonombre);
    }

    //Metodos de acceso
    public function getId(){
        return $this->id;
    }

    public function setId($id){
        $this->id = $id;
    }

    public function getUbicacionpaisid(){
        return $this->ubicacionpaisid;
    }

    public function setUbicacionpaisid($ubicacionpaisid){
        $this->ubicacionpaisid = $ubicacionpaisid;
    }

    public function getEstadonombre(){
        return $this->estadonombre;
    }

    public function setEstadonombre($estadonombre){
        $this->estadonombre = $estadonombre;
    }

    public function getMensaje(){
        return $this->mensaje;
    }

    public function setMensaje($mensaje){
        $this->mensaje = $mensaje;
    }

    //Funciones BD

    /**
     * Busca estado por id
     * @param int $id
     * @return boolean
    public function buscar($id)
    {
        $resultado = false;
        $sql =  "SELECT * FROM estado WHERE id = ".$id;

        if ($this->Iniciar()) {
            if ($this->Ejecutar($sql)) {
                if ($row = $this->Registro()) {
                    $pais = new Pais();
                    $pais->buscar($row['ubicacionidpais']);

                    $this->setId($row['id']);
                    $this->setUbicacionpaisid($pais);
                    $this->setEstadonombre($row['estadonombre']);

                    $resultado = true;
                }
            } else {
                $this->setMensaje($this->getError());
            }
        } else {
            $this->setMensaje($this->getError());
        }

        return $resultado;
    }
    **/
    
    public function buscar($id)
    {
        $base = new BaseDatos();
        $resp = false;
        $sql = "SELECT * FROM estado WHERE id = '" . $id . "'";
        if ($base->Iniciar()) {
            if ($base->Ejecutar($sql)) {
                if ($row2 = $base->Registro()) {

                    $dato = array (
                        'id' =>$row2['id'],
                        'estadonombre' => $row2['estadonombre']
                    );

                    $array[] = $dato;                
                }
            } else {
                $this->setMensaje($base->getError());
            }
        } else {
            $this->setMensaje($base->getError());
        }
        return $array;
    }

    /**
     * Lista todos los estados que cumplan cierta condición
     * @param string $condicion (opcional)
     * @return null|array
     */
    public function listar($condicion = '')
    {
        $resultado = null;
        $sql =  "SELECT * FROM estado";
        if ($condicion != '') {
            $sql = $sql . ' WHERE ' . $condicion;
        }

        if ($this->Iniciar()) {
            if ($this->Ejecutar($sql)) {
                $resultado = array();
                while ($row = $this->Registro()) {
                    $objEstado = new Estado;

                    $pais = new Pais();
                    $pais->buscar($row['ubicacionidpais']);

                    $objEstado->setId($row['id']);
                    $objEstado->setUbicacionpaisid($pais);
                    $objEstado->setEstadonombre($row['estadonombre']);

                    array_push($resultado,$objEstado);
                }
            } else {
                $this->setMensaje($this->getError());
            }
        } else {
            $this->setMensaje($this->getError());
        }

        return $resultado;
    }

    public function obtener_estado_por_termino_autocompletado($termino,$id_pais){
        $query="SELECT *
            FROM estado
            WHERE  ( estadonombre LIKE '%$termino%') && ubicacionpaisid = $id_pais";

        $base = new BaseDatos();
        $rta = false;
        if ($base->Iniciar()) {
            if ($base->Ejecutar($query)) {
                $array = array();
                while ($row2 = $base->Registro()) {
                    $array[] = array(
                        'value'=>$row2['id'],
                        'label'=> $row2['estadonombre']
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
