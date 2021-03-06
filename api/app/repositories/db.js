const Connection = require("./connection");
const env        = require("../../env");

class Db extends Connection{
    
    constructor(){
        super();
    }

    executeQuery(sql,banco=null,params={}){

        if( env.debug ){
            console.log('-----------------------');
            console.log(sql);
            console.log('-----------------------');
        }

        return new Promise((resolve,reject)=>{
            try{
                this._con = this.getConnection(banco);
                
                this._con.query(sql,params,(error,result)=>{
                    if(error){
                        reject({data:undefined,message:'Erro, consulta no banco de dados interrompida...',success:false});
                    }else{
                        resolve({data:result,message:'Consulta executada com sucesso',success:true});
                    }
                })
            }catch(e){
                
                if( env.debug ){
                    console.error(e);
                }

                reject({data:undefined,message:'Erro ao tentar executar Query...',success:false});
            }
        })

    }
}

module.exports = new Db();