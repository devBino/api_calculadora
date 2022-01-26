class DataRequestPost{

    makeParams(pObj){
        
        let objParams = new Object();

        if( typeof(pObj) == 'object' ){
            
            let params = Object.keys(pObj);

            params.forEach(function(key){
                
                if(key != 'token'){
                    objParams[key] = pObj[key];
                }

            });
        }

        return objParams;

    }


}

module.exports = new DataRequestPost();