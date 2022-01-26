const Model = require('./model');

class Usuario extends Model{

    constructor(){
        super();
        this.setSqlQuery();
        this.campos = ['idUsuario','nomeUsuario','descSenha','codPermissao'];
    }

    setSqlQuery(){
        this._sqlQuery = 'select * from tb_usuarios';
    }

    async checarCredencial(req){
        try{

            let sql = `select * from tb_usuarios where nomeUsuario="${req.params.usuario}" and descSenha="${req.params.senha}" `;
            let dadosUsuario    = await this._Db.executeQuery(sql);
            
            return dadosUsuario;
        }catch(e){
            return {data:undefined,message:'Credenciais inválidas',success:false};
        }        
    }
    

}

module.exports = new Usuario();