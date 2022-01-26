const env                   = require('../../env');
const urlFactory            = require('../repositories/factories/urlFactory');
const dataRequestFactory    = require('../repositories/factories/dataRequestFactory');
const httpRequest           = require('../repositories/httpRequest/httpRequest');
const dataBancoBuilder      = require('../repositories/builder/dataBancoBuilder');

const recurso       = "calculo";

class Calculadora{

    async salvarParametrosCalculo(req,res){

        let prepareDataRequest = dataRequestFactory.getInstance(env.tipoRequest.post);
        let params = prepareDataRequest.makeParams(req.body);
        
        params['dataCalculo'] = new dataBancoBuilder().setValores().builder();
        
        let urlApp = urlFactory.getInstance()
            .setRecurso(recurso)
            .setParamsPost(params)
            .setHeaders({
                'Content-Type':'application/json',
                'x-access-token':req.body.token
            })
            .builder();

        let response = await httpRequest.requestPost(urlApp);

        urlApp.resetUrl();

        res.send({data:response});
    }

}

module.exports = new Calculadora();