<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Urlapp{

    private $url;
    private $http;
    private $ssl;
    private $hostName;
    private $porta;
    private $recurso;
    private $stringParams;
    private $dataParams;
    private $headers;

    public function __construct(){
        
        $this->http = "http";
        $this->ssl = false;
        $this->hostName = HOSTNAME_API;
        $this->porta = PORTA_API;

        $this->makeUrl();

    }

    public function setSsl($ssl){
        $this->ssl = $ssl;
    }
    
    public function setHostName($hostName){
        $this->hostName = $hostName;
    }

    public function setPorta($porta){
        $this->porta = $porta;
    }

    public function setRecurso($recurso){
        $this->recurso = $recurso;
    }

    public function setStringParams($stringParams){
        $this->stringParams = $stringParams;
    }

    public function getStringParams(){
        return $this->stringParams;
    }

    public function setDataParams($dataParams){
        $this->dataParams = $dataParams;
    }

    public function getDataParams(){
        return $this->dataParams;
    }

    public function setHeaders($headers){
        $this->headers = $headers;
    }

    public function getHeaders(){
        return $this->headers;
    }

    public function makeUrl(){
        
        $arrUrl = [];

        $arrUrl[] = $this->http;
        $arrUrl[] = "://";

        if( !is_null($this->ssl) && !empty($this->ssl) && $this->ssl === true ){
            $arrUrl[] = "s";
        }
        
        $arrUrl[] = $this->hostName;
        $arrUrl[] = ":";
        $arrUrl[] = $this->porta;
        $arrUrl[] = "/";

        if( !is_null($this->recurso) && !empty($this->recurso) ){
            $arrUrl[] = $this->recurso;
            $arrUrl[] = "/";
        }

        if( !is_null($this->stringParams) && !empty($this->stringParams) ){
            $arrUrl[] = $this->stringParams;
        }

        $this->url = implode("", $arrUrl);

    }

    public function getUrl(){
        return $this->url;
    }


}