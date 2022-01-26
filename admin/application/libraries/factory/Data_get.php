<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Data_Get{

    /**
     * Monta parametros que vão nas url get para api.
     * Por padrão da API que estamos consultando,
     * nos métodos GE, após o recurso os parametros são enviados separados por /
     * 
     * @example
     *  http://localhost:porta/recurso/param1/param2
     *  http://localhost:8080/autenticacao/usuario/senha
     */
    public function makeParams($params){
        return implode("/",$params);
    }

}