<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Sistema extends CI_Controller{

    private $recurso;

    public function __construct(){
        parent::__construct();
        $this->recurso = "calculo";
    }

    public function index(){
        
        if( $this->session->has_userdata(LOGADO) ){
            
            //carrega bibliotecas
            $this->load->library('factory/data_factory');
            $this->load->library('builder/urlapp_builder');
            $this->load->library('consulta_api');
            $this->load->library('calculo_library');

            $urlApp = $this->urlapp_builder
                ->setRecurso($this->recurso)
                ->setHeaders(array(
                    'Content-Type:application/json',
                    'x-access-token:' . $this->session->get_userdata(LOGADO)['logado']['token']
                ))
                ->builder();
            
            //faz requisição
            $this->consulta_api::prepareConsulta($urlApp,DATA_GET);
            $response = $this->consulta_api::consultar();
            
            //trata os dados
            $calculos = $this->calculo_library->dataToArray(json_decode($response['response']));

            $this->load->view('sistema', ['calculos'=>$calculos]);
                
        }else{
            redirect( base_url() . 'inicio');
        }

    }

}