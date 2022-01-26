const token     = require('../repositories/token');
const paramsSql = require('../repositories/parametrosSql');
const mdUsuario = require('../models/usuario');
const md5       = require('md5');

class Autenticacao{

    async autenticar(req,res){
        try{
            
            let params          = await paramsSql.limpar(req.params);
            
            params.params.senha = md5(params.params.senha);
            
            let dadosUsuario    = await mdUsuario.checarCredencial(params);
            let dadosToken      = await token.gerar(dadosUsuario.data);
            
            if( dadosToken.token == undefined ){
                res.status(401).json({message:'Não é possível autenticar com os parâmetros enviados...',auth:false});
            }

            dadosToken.idUsuario = dadosUsuario.data[0].idUsuario;
            dadosToken.permissao = dadosUsuario.data[0].codPermissao;

            res.status(200).json(dadosToken);

        }catch(e){
            res.send({data:[],messagem:'Erro ao tentar autenticar',auth:false});
        }
    }

}

module.exports = new Autenticacao();