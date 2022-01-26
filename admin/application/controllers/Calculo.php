<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Calculo extends CI_Controller{

    private $recurso;

    public function __construct(){
        parent::__construct();
        $this->recurso = "calculo";
    }

    public function index(){
        redirect( base_url() . 'sistema' );
    }

    public function deletar(){
    
        //verifica se foi enviado post       
        if( !$this->input->post() ){
            redirect( base_url() . 'sistema' );
        }

        //carrega bibliotecas
        $this->load->library('factory/data_factory');
        $this->load->library('builder/urlapp_builder');
        $this->load->library('consulta_api');

        //prepara requisição
        $params = $this->data_factory->getDataMetodo(DATA_DELETE)->makeParams($_POST);

        $urlApp = $this->urlapp_builder
                ->setRecurso($this->recurso)
                ->setStringParams($params)
                ->setHeaders(array(
                    'Content-Type:application/json',
                    'x-access-token:' . $this->session->get_userdata(LOGADO)['logado']['token']
                ))
                ->builder();

        //faz requisição
        $this->consulta_api::prepareConsulta($urlApp,DATA_DELETE);
        $response = $this->consulta_api::consultar();

        //retorna quantidade registros afetados
        $registrosAfetados = json_decode($response['response'])->data->affectedRows;

        header('Content-Type','application/json');
        echo json_encode(['success'=>true,'deletados'=>$registrosAfetados]);
        
    }

}