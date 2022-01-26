const dataRequestGetString  = require('./dataRequestGetString');
const dataRequestPost        = require('./dataRequestPost');
const env = require('../../../env');

class DataRequestFactory{


    getInstance(pTipo){

        if( pTipo == env.tipoRequest.post  ){
            return dataRequestPost;
        }else if( pTipo == env.tipoRequest.getUseParamsUrl ){
            return dataRequestGetString;
        }

    }

}

module.exports = new DataRequestFactory();