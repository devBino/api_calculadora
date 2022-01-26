
function enviaRequestAsync(url=null, type=null, data=null){
    return new Promise((resolve,reject)=>{
        try{
            if( url !== null && type !== null && data !== null ){
                $.ajax({
                    url:url,
                    type:type,
                    data:data,
                    success:function(result){
                        resolve({response:result});
                    },
                    error(e){
                        resolve({response:undefined});
                    }
                })
            }else{
                resolve({response:undefined});
            }
        }catch(e){
            resolve({response:undefined});
        }
    })
}