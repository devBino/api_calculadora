<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require_once( __DIR__ . "/../models/Calculo_model.php" );

class Calculo_library{

    public function dataToArray($data){
        
        $returnData = [];
        
        foreach( $data->data as $dt ){
            
            $resultado = 0;

            if($dt->tipo == 'adi'){
                $resultado = $dt->valor1 + $dt->valor2;
    
            }else if($dt->tipo == "sub"){
                $resultado = $dt->valor1 - $dt->valor2;
                
            }else if($dt->tipo == "mul"){
                $resultado = $dt->valor1 * $dt->valor2;
    
            }else if($dt->tipo == "div"){
                $resultado = ($dt->valor1 > 0 && $dt->valor2 > 0) ? $dt->valor1 / $dt->valor2 : 0;

            }

            $returnData[] = new Calculo_model(array(
                'id' => $dt->idCalculo,
                'nomeCalculo' => $dt->nomeCalculo,
                'dataCalculo' => $dt->dataCalculo,
                'tipo' => $dt->tipo,
                'parametro1' => $dt->valor1,
                'parametro2' => $dt->valor2,
                'resultado' => $resultado,
                'idUsuario' => $dt->idUsuario,
                'nomeUsuario' => $dt->nomeUsuario
            ));

        }
        
        return $returnData;

    }

}