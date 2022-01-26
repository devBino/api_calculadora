const httpResponse      = require('../repositories/httpResponse');
const mdCalculo         = require('../models/calculo');
const paramsSql          = require('../repositories/parametrosSql');

class Calculo{

    async listar(req,res){
        try{
            let lista = await mdCalculo.listar();
            httpResponse.response(lista,200,res);
        }catch(e){
            httpResponse.response(res);
        }
    }

    async salvar(req,res){
        try{
            let params      = await paramsSql.limpar(req.body)
            
            let resultAcao  = await mdCalculo.salvar(params.params)

            httpResponse.response(resultAcao,200,res)
        }catch(e){
            httpResponse.responseErro(res)
        }
    }

    async deletar(req,res){
        try{
            let params      = await paramsSql.limpar(req.params)
            let resultAcao  = await mdCalculo.deletar(params.params.id)

            httpResponse.response(resultAcao,200,res)
        }catch(e){
            httpResponse.responseErro(res)
        }
    }

    async alterar(req,res){
        try{
            let params      = await paramsSql.limpar(req.body)
            let resultAcao  = await mdCalculo.prepareUpdate(params.params)

            httpResponse.response(resultAcao,200,res)
        }catch(e){
            httpResponse.responseErro(res)
        }
    }


}

module.exports = new Calculo();