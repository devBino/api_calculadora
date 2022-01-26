const request   = require('request');
const axios     = require('axios');

class HttpRequest{

    requestGet(pUrl){

        return new Promise((resolve,reject)=>{
            try{

                if( this.isUrlApp(pUrl) ){
                    
                    request(pUrl.getUrl(), (err, res, body)=>{
                        if(!err){
                            let jsonResponse = JSON.parse(body);
                            resolve({success:true, json:jsonResponse});
                        }else{
                            resolve({success:false});
                        }
                    });

                }else{
                    resolve({success:false});
                }

            }catch(e){
                resolve({success:false});
            }
        })

    }

    requestPost(pUrl){
        return new Promise((resolve,reject)=>{
            try{

                if( this.isUrlApp(pUrl) ){
                    
                    axios.post(
                        pUrl.getUrl(),
                        pUrl.getParamsPost(),
                        {headers:pUrl.getHeaders()}
                    )
                    .then(res=>{
                        resolve({success:true, json:res.data});
                    })
                    .catch(err=>{
                        resolve({success:false});
                    })

                }else{
                    resolve({success:false});
                }

            }catch(e){                
                resolve({success:false});
            }
        })
    }

    isUrlApp(pObj){
        return Object.getPrototypeOf(pObj).constructor.name == 'UrlApp';
    }

}

module.exports = new HttpRequest();