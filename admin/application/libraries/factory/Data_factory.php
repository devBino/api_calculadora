<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require_once(__DIR__ . "/Data_get.php");
require_once(__DIR__ . "/Data_post.php");
require_once(__DIR__ . "/Data_delete.php");

class Data_Factory{

    public function getDataMetodo($metodo){

        if( $metodo == DATA_GET ){
            return new Data_Get();
        }else if( $metodo == DATA_POST ){
            return new Data_post();
        }else if( $metodo == DATA_DELETE ){
            return new Data_delete();
        }

    }

}