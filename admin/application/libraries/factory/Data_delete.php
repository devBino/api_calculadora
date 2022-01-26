<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Data_delete{

    /**
     * Valida que apenas o parametro id está indo para rotas delete da api
     * Por padrão no atual projeto, para enviar requisições que
     * irão deletar um registro, passamos apenas um único parâmetro 
     * a saber, o id do registro a ser deletado
     */
    public function makeParams($params){
        
        $strParams = implode("/",$params);
        $arrParams = explode("/", $strParams);
        
        return $arrParams[0];
        
    }

}