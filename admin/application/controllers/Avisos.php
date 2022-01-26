<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Avisos extends CI_Controller{

    public function index($idAviso = 4){
        $this->load->view('avisos', ['idAviso'=>$idAviso]);
    }

    public function mensagem($idAviso){
        $this->load->view('avisos', ['idAviso'=>$idAviso]);
    }

}