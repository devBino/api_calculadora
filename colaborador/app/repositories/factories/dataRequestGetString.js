class DataRequestGetString{

    makeParams(pObj){
        
        let strParams = '';

        if( typeof(pObj) == 'object' ){
            
            let params = Object.keys(pObj);

            params.forEach(function(key){
                strParams = `${strParams}${pObj[key]}/`;
            });
        }

        return strParams;

    }

}

module.exports = new DataRequestGetString();