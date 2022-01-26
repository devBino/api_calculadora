class DataBanco{
    
    constructor(){
        this._data = new Date();
        this._stringData = null;
        this._ano = null;
        this._mes = null;
        this._dia = null;
        this._hora = null;
        this._minuto = null;
        this._segundo = null;
    }

    validaNumerosMenoresDez(pNum){
        let intPNum = parseInt(pNum);
        return (intPNum < 10) ? `0${intPNum}` : intPNum;
    }

    setAno(){
        this._ano = this._data.getFullYear();
    }

    setMes(){
        let intMes = parseInt(this._data.getMonth()) + 1;
        this._mes = this.validaNumerosMenoresDez( intMes );
    }

    setDia(){
        this._dia =  this.validaNumerosMenoresDez( this._data.getDate() );
    }

    setHora(){
        this._hora = this.validaNumerosMenoresDez( this._data.getHours() );
    }

    setMinuto(){
        this._minuto = this.validaNumerosMenoresDez( this._data.getMinutes() );
    }

    setSegundo(){
        this._segundo = this.validaNumerosMenoresDez( this._data.getSeconds() );
    }

    setValores(){
        this.setAno();
        this.setMes();
        this.setDia();
        this.setHora();
        this.setMinuto();
        this.setSegundo();
    }


    setStringData(){
        this._stringData = `${this._ano}-${this._mes}-${this._dia} ${this._hora}:${this._minuto}:${this._segundo}`;
    }

    getStringData(){
        return this._stringData;
    }

}

module.exports = DataBanco;