const dataBanco = require("./dataBanco");

class DataBancoBuilder{

    constructor(){
        this._instance = new dataBanco();
    }

    setValores(){
        this._instance.setValores();
        return this;
    }

    builder(){
        this._instance.setStringData();
        return this._instance.getStringData();
    }

}

module.exports = DataBancoBuilder;