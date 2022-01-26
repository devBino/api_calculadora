const env = require('../../../env');
const urlAppBuilder = require('../builder/urlAppBuilder');

class UrlFactory{

    getInstance(){
        
        var url = urlAppBuilder
            .setHttp(env.http)
            .setHost(env.host)
            .setPorta(env.portaApi);

        return url;
    }

}

module.exports = new UrlFactory();