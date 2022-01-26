<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Data_Post{

    /**
     * Prepara os parametros para enviar e requisições post para api
     */
    public function makeParams($params, $json = false){
    
        if( $json === true ){
            return json_encode($params);
        }else{
            return $params;
        }

    }

}