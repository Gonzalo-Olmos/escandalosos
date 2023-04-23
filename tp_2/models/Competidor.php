<?php
include_once 'conector/BaseDatos.php';
class Competidor
{
    private $id; //hace referencia al autoincrement de la tabla
    private $gal;
    private $apellido;
    private $nombre;
    private $du;
    private $fechaNacimiento;
    private $idpais;
    private $graduacion;
    private $clasificacionGeneral;
    private $email;
    private $genero;
    private $mensaje;

    public function __construct()
    {
        $this->gal = "";
        $this->apellido = "";
        $this->nombre = "";
        $this->du = "";
        $this->fechaNacimiento = "";
        $this->idpais = "";
        $this->graduacion = "";
        $this->clasificacionGeneral = "";
        $this->email = "";
        $this->genero = "";
    }

    public function cargar($gal, $apellido, $nombre, $du, $fechaNacimiento, $idpais, $graduacion, $clasificacionGeneral, $email, $genero,)
    {
        $this->setGal($gal);
        $this->setApellido($apellido);
        $this->setNombre($nombre);
        $this->setDu($du);
        $this->setFechaNac($fechaNacimiento);
        $this->setGraduacion($graduacion);
        $this->setClasificacionGral($clasificacionGeneral);
        $this->setEmail($email);
        $this->setGenero($genero);
        $this->setIdpais($idpais);
    

    }

    //Metodos de acceso
    
    public function getGal(){
        return $this->gal;
    }

    public function setGal($gal){
        $this->gal = $gal;
    }

    public function getApellido(){
        return $this->apellido;
    }

    public function setApellido($apellido){
        $this->apellido = $apellido;
    }

    public function getNombre(){
        return $this->nombre;
    }

    public function setNombre($nombre){
        $this->nombre = $nombre;
    }

    public function getDu(){
        return $this->du;
    }

    public function setDu($du){
        $this->du = $du;
    }


    public function getFechaNac(){
        return $this->fechaNacimiento;
    }

    public function setFechaNac($fechaNacimiento){
        $this->fechaNacimiento = $fechaNacimiento;
    }

    public function getIdpais(){
        return $this->idpais;
    }

    public function setIdpais($idpais){
        $this->idpais = $idpais;
    }

    public function getGraduacion(){
        return $this->graduacion;
    }

    public function setGraduacion($graduacion){
        $this->graduacion = $graduacion;
    }

    public function getClasificacionGral(){
        return $this->clasificacionGeneral;
    }

    public function setClasificacionGral($clasificacionGeneral){
        $this->clasificacionGeneral = $clasificacionGeneral;
    }

    public function getEmail(){
        return $this->email;
    }

    public function setEmail($email){
        $this->email = $email;
    }

    public function getGenero(){
        return $this->genero;
    }

    public function setGenero($genero){
        $this->genero = $genero;
    }

    public function getId(){
        return $this->id;
    }

    public function setId($id){
        $this->id = $id;
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

        return "id: " . $this->getid() .
            "\n gal: " . $this->getGal() .
            "\n apellido: " . $this->getApellido() .
            "\n nombre: " . $this->getNombre() .
            "\n du: " . $this->getDu() .
            "\n fechaNacimiento: " . $this->getFechaNac() .
            "\n idpais: " . $this->getIdpais() .
            "\n graduacion: " . $this->getGraduacion() .
            "\n clasificacionGeneral: " . $this->getClasificacionGral() .
            "\n email: " . $this->getEmail() .
            "\n genero: " . $this->getGenero() ;
    }

    //Funciones BD

    //BUSCAR
    public function buscar($id)
    {
        $base = new BaseDatos();
        $resp = false;
        $sql = "SELECT * FROM competidor WHERE id = '" . $id . "'";
        if ($base->Iniciar()) {
            if ($base->Ejecutar($sql)) {
                if ($row2 = $base->Registro()) {
                    $this->setId($row2['id']);

                    //Creo un objeto para buscar al id y setear el objeto
                    $competidor = new Competidor();
                    $competidor->buscar($row2['id']);
                    $this->setId($competidor);
                    
                    $resp = true;
                }
            } else {
                $this->setMensaje($base->getError());
            }
        } else {
            $this->setMensaje($base->getError());
        }
        return $resp;
    }

    //LISTAR
    public function listar($condicion = '')
    {
        $array = null;
        $base = new BaseDatos();
        $sql =  "select * from competidor";
        if ($condicion != '') {
            $sql = $sql . ' where ' . $condicion;
        }
        if ($base->Iniciar()) {
            if ($base->Ejecutar($sql)) {
                $array = array();
                while ($row2 = $base->Registro()) {
                  
                    $dato = array (
                        'id' => $row2['id'],
                        'gal'=> $row2['gal'],
                        'apellido'=> $row2['apellido'],
                        'nombre' => $row2['nombre'],
                        'du' =>  $row2['du'],
                        'fechaNacimiento' => $row2['fechaNacimiento'],
                        'idpais' => $row2['idpais'],
                        'graduacion' => $row2['graduacion'],
                        'clasificacionGeneral' => $row2['clasificacionGeneral'],
                        'email' =>$row2['email'],
                        'genero' => $row2['genero']
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

    //INSERTAR
    public function insertar()
    {

        $base = new BaseDatos();
        $resp = false;
        //Asigno los datos a variables
        $gal = $this->getGal();
        $apellido = $this->getApellido();
        $nombre = $this->getNombre();
        $du = $this->getDu();
        $fechaNacimiento = $this->getFechaNac();
        $idpais = $this->getIdpais();
        $graduacion = $this->getGraduacion();
        $clasificacionGeneral = $this->getClasificacionGral();
        $email = $this->getEmail();
        $genero = $this->getGenero();

        //Creo la consulta 
        $sql = "INSERT INTO competidor (gal, apellido, nombre, du, fechaNacimiento, idpais, graduacion, clasificacionGeneral, email, genero) VALUES ('{$gal}', '{$apellido}', '{$nombre}', '{$du}', '{$fechaNacimiento}', '{$idpais}', '{$graduacion}', '{$clasificacionGeneral}', '{$email}', '{$genero}')";
        if ($base->Iniciar()) {
            if ($base->Ejecutar($sql)) {
                $resp = true;
            } else {
                $this->setMensaje($base->getError());
            }
        } else {
            $this->setMensaje($base->getError());
        }
        return $resp;
    }
    
    //MODIFICAR
    public function modificar()
    {
        $base = new BaseDatos();
        $resp = false;
        $id = $this->getid();
       
        
        $sql = "UPDATE competidor SET id = '{$id}' WHERE id = '{$id}'";
        if ($base->Iniciar()) {
            if ($base->Ejecutar($sql)) {
                $resp = true;
            } else {
                $this->setMensaje($base->getError());
            }
        } else {
            $this->setMensaje($base->getError());
        }
        return $resp;
    }

    //ELIMINAR
    public function eliminar()
    {
        $base = new BaseDatos();
        $rta = false;
        $consulta = "DELETE FROM competidor WHERE id = " . $this->getId();
        if ($base->Iniciar()) {
            if ($base->Ejecutar($consulta)) {
                $rta = true;
            } else {
                $this->setMensaje($base->getError());
            }
        } else {
            $this->setMensaje($base->getError());
        }
        return $rta;
    }

    
}
