const Model = require('./model');

class Calculo extends Model{
    
    constructor(){
        super();
        this.setSqlQuery();
        this.setSqlInsert();
        this.setSqlDelete();
        this.campos = ['idCalculo','nomeCalculo','dataCalculo','tipo'];
    }

    async setSqlQuery(){
        
        this.addSql('select ');
        this.addSql('c.idCalculo,');
        this.addSql('c.nomeCalculo,');
        this.addSql('c.dataCalculo,');
        this.addSql('c.tipo,');
        this.addSql('c.valor1,');
        this.addSql('c.valor2,');
        this.addSql('u.idUsuario,');
        this.addSql('u.nomeUsuario');
        this.addSql('from tb_calculos as c');
        this.addSql('inner join tb_usuarios as u');
        this.addSql('on c.idUsuario = u.idUsuario;');

    }

    setSqlInsert(){
        this._sqlInsert = 'insert into tb_calculos set ?';
    }

    setSqlDelete(){
        this._sqlDelete = 'delete from tb_calculos where idCalculo=<id>';
    }

    async prepareUpdate(params){
        this._sqlUpdate = `update tb_calculos set <set> where <where>`;
        var arrSet = [];

        Object.keys(params).forEach(function(item){
            if( item != "id" ){
                if( typeof(params[item]) == "number" ){
                    var strSet = `${item}=${params[item]}`;
                }else{
                    var strSet = `${item}="${params[item]}"`;
                }

                arrSet.push(strSet);
            }
        })

        var strWhere = `idCalculo=${params.id}`;
        var strArrSet = arrSet.toLocaleString();
        
        this._sqlUpdate = this._sqlUpdate.replace("<set>",strArrSet);
        this._sqlUpdate = this._sqlUpdate.replace("<where>",strWhere);

        return await this.alterar();
    }


}

module.exports = new Calculo();