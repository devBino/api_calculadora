<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Inicio extends CI_Controller{

    private $recurso;

    public function __construct(){
        parent::__construct();
        $this->recurso = "autenticacao";
    }

    public function index(){

        $this->load->library('session');

        $this->session->sess_destroy();
        $this->session->unset_userdata(LOGADO);
        
        $this->load->view('inicio');
    }

    public function acessar(){

        //verifica se foi enviado post       
        if( !count($this->input->post())){
            redirect( base_url() . 'inicio');
        }

        //carrega bibliotecas
        $this->load->library('factory/data_factory');
        $this->load->library('builder/urlapp_builder');
        $this->load->library('consulta_api');

        //prepara requisição
        $params = $this->data_factory->getDataMetodo(DATA_GET)->makeParams($_POST);

        $urlApp = $this->urlapp_builder->setRecurso($this->recurso)->setStringParams($params)->builder();

        //faz requisição
        $this->consulta_api::prepareConsulta($urlApp,DATA_GET);
        $response = $this->consulta_api::consultar();
        
        //trata resposta da api, autorizando ou negando acesso
        if( boolval($response['success']) === true ){
            
            $dataResponse = json_decode($response['response']);
            $this->session->auth = $dataResponse->auth;
            
            if( isset($dataResponse->token) ){
                
                if( intval($dataResponse->permissao) !== intval(PERMISSAO_ADMIN) ){
                    redirect( base_url() . 'nao_autorizado' );
                }

                $this->session->set_userdata(LOGADO,array(
                    'idUsuario'=>$dataResponse->idUsuario,
                    'usuario'=>$_POST['usuario'],
                    'token'=>$dataResponse->token
                ));
                
                redirect( base_url() . 'sistema' );

            }else{
                redirect( base_url() . 'nao_autorizado' );
            }
            
        }else{
            redirect( base_url() . 'falha_conexao_api' );
        }


    }

    public function nao_autorizado(){
        redirect( base_url() . 'avisos/mensagem/1' );
    }

    public function falha_conexao_api(){
        redirect( base_url() . 'avisos/mensagem/2' );
    }


}