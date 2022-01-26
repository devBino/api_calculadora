const env = require('../../../env');

class UrlApp{

    constructor(){
        this.resetUrl();
        this.makeUrl();
    }

    resetUrl(){
        this._http = env.http;
        this._host = env.host;
        this._porta = env.portaApi;
        this._recurso = null;
        this._paramsGet = null;
        this._paramsPost = null;
        this._params_StringGetUrl = null;
        this._headers = null;
    }
    
    setHttp(pHttp){
        this._http = pHttp;
    }

    getHttp(){
        return this._http;
    }

    setHost(pHost){
        this._host = pHost;
    }

    getHost(){
        return this._host;
    }

    setPorta(pPorta){
        this._porta = pPorta;
    }

    getPorta(){
        return this._porta;
    }

    setRecurso(pRecurso){
        this._recurso = pRecurso;
    }

    getRecurso(){
        return this._recurso;
    }

    setParamsGet(pParams){
        this._paramsGet = pParams;
    }

    getParamsGetMetodo(){
        return this._paramsGet;
    }

    setParams_StringGetUrl(pParams){
        this._params_StringGetUrl = pParams;
    }

    getParams_StringUrlGetMetodo(){
        return this._params_StringGetUrl;
    }

    setParamsPost(pParams){
        this._paramsPost = pParams;
    }

    getParamsPost(){
        return this._paramsPost;
    }

    setHeaders(pHeaders){
        this._headers = pHeaders;
    }

    getHeaders(){
        return this._headers;
    }

    makeUrl(){
        
        this._url = `${this._http}://${this._host}:${this._porta}/${this._recurso}/`;

        if( this._params_StringGetUrl != undefined && this._params_StringGetUrl != null 
            && this._params_StringGetUrl != ''  ){

                this._url = `${this._url}${this._params_StringGetUrl}`;

        }

    }    

    getUrl(){
        return this._url;
    }


};

module.exports = new UrlApp();