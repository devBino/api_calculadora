<?php
defined('BASEPATH') OR exit('No direct script access allowed');

require_once(__DIR__ . "/Urlapp.php");

class UrlApp_Builder{

    private $urlBuilder;
    private $http;
    private $ssl;
    private $hostName;
    private $porta;
    private $recurso;
    private $stringParams;
    private $dataParams;
    private $headers;

    public function __construct(){
        $this->urlBuilder = new Urlapp();
    }

    public function setSsl($ssl){
        $this->urlBuilder->setSsl($ssl);
        return $this;
    }
    
    public function setHostName($hostName){
        $this->urlBuilder->setHostName($hostName);
        return $this;
    }

    public function setPorta($porta){
        $this->urlBuilder->setPorta($porta);
        return $this;
    }

    public function setRecurso($recurso){
        $this->urlBuilder->setRecurso($recurso);
        return $this;
    }

    public function setStringParams($stringParams){
        $this->urlBuilder->setStringParams($stringParams);
        return $this;
    }

    public function setDataParams($dataParams){
        $this->urlBuilder->setDataParams($dataParams);
        return $this;
    }
    
    public function setHeaders($headers){
        $this->urlBuilder->setHeaders($headers);
        return $this;
    }

    public function builder(){
        $this->urlBuilder->makeUrl();
        return $this->urlBuilder;
    }


}