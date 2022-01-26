<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Calculo_model{
    
    public $id;
    public $nomeCalculo;
    public $dataCalculo;
    public $tipo;
    public $parametro1;
    public $parametro2;
    public $resultado;
    public $idUsuario;
    public $nomeUsuario;

    public function __construct($params){
        $this->setId($params['id']);
        $this->setNomeCalculo($params['nomeCalculo']);
        $this->setDataCalculo($params['dataCalculo']);
        $this->setTipo($params['tipo']);
        $this->setParametro1($params['parametro1']);
        $this->setParametro2($params['parametro2']);
        $this->setResultado($params['resultado']);
        $this->setIdUsuario($params['idUsuario']);
        $this->setNomeUsuario($params['nomeUsuario']);
    }

    public function setId($id){
        $this->id = $id;
    }

    public function setNomeCalculo($nomeCalculo){
        $this->nomeCalculo = $nomeCalculo;
    }
    
    public function setDataCalculo($dataCalculo){        
        $dt = preg_replace('/[^0-9:.-]/',"",substr($dataCalculo,0,19));
        $this->dataCalculo = date('Y-m-d H:i:s', strtotime($dt));
    }

    public function setTipo($tipo){
        
        if($tipo == 'adi'){
            $this->tipo = "Adição";

        }else if($tipo == "sub"){
            $this->tipo = "Subtração";
            
        }else if($tipo == "mul"){
            $this->tipo = "Multiplicação";

        }else if($tipo == "div"){
            $this->tipo = "Divisão";
        }
    }

    public function setParametro1($parametro1){
        $this->parametro1 = $parametro1;
    }

    public function setParametro2($parametro2){
        $this->parametro2 = $parametro2;
    }

    public function setResultado($resultado){
        $this->resultado = $resultado;
    }

    public function setIdUsuario($idUsuario){
        $this->idUsuario = $idUsuario;
    }

    public function setNomeUsuario($nomeUsuario){
        $this->nomeUsuario = $nomeUsuario;
    }


}