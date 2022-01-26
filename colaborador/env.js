let env = {
    debug:false,
    http:'http',
    https:'https',
    host:'localhost',
    porta:'3000',
    portaApi:'8080',
    tipoRequest:{
        post:'post',
        getUseParamsUrl:'getUseParamsUrl',
        getUseParamsFormData:'getUseParamsFormData',
        put:'put',
        delete:'delete'
    }
};

module.exports = env;