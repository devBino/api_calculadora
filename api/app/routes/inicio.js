
module.exports = function(app){
    
    app.get('/', (req,res)=>{
        res.render('inicio')
    });

    app.get('/inicio', (req,res)=>{
        res.render('inicio')
    });

}