const urlApp = require('./urlApp');

class UrlAppBuilder{

    constructor(){
        this._url = urlApp;
    }

    setHttp(pHttp){
        this._url.setHttp(pHttp);
        return this;
    }

    setHost(pHost){
        this._url.setHost(pHost);
        return this;
    }

    setPorta(pPorta){
        this._url.setPorta(pPorta);
        return this;
    }

    setRecurso(pRecurso){
        this._url.setRecurso(pRecurso);
        return this;
    }

    setParamsGet(pParams){
        this._url.setParamsGet(pParams);
        return this;
    }

    setParams_StringGetUrl(pParams){
        this._url.setParams_StringGetUrl(pParams);
        return this;
    }

    setParamsPost(pParams){
        this._url.setParamsPost(pParams);
        return this;
    }

    setHeaders(pHeaders){
        this._url.setHeaders(pHeaders);
        return this;
    }

    builder(){
        this._url.makeUrl();
        return this._url;
    }

}

module.exports = new UrlAppBuilder();