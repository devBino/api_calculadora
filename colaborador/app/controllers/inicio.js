const env           = require('../../env');
const urlFactory    = require('../repositories/factories/urlFactory');
const dataRequestFactory    = require('../repositories/factories/dataRequestFactory');
const httpRequest           = require('../repositories/httpRequest/httpRequest');

const recurso       = "autenticacao";

class Inicio{

    async login(req, res){
        
        let prepareDataRequest = dataRequestFactory.getInstance(env.tipoRequest.getUseParamsUrl);

        let urlApp = urlFactory.getInstance()
            .setRecurso(recurso)
            .setParams_StringGetUrl(prepareDataRequest.makeParams(req.body))
            .builder();

        let response = await httpRequest.requestGet(urlApp);

        urlApp.resetUrl();
        
        if(response.json.auth){
            
            req.flash("token",response.json.token);
            req.flash("idUsuario",response.json.idUsuario);
            res.redirect('/calculadora');

        }else{

            res.redirect('/inicio');

        }

    }

    async sair(req, res){
        res.redirect('/');
    }

}

module.exports = new Inicio();