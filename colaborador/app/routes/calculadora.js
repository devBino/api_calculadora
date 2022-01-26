const session = require('express-session');
const calculadora = require('../controllers/calculadora');

module.exports = function(app){

    app.get('/calculadora', (req,res)=>{
        res.render('calculadora',{
            token:req.flash("token")[0],
            idUsuario:req.flash("idUsuario")[0]
        });
    });

    app.post('/calculadora', calculadora.salvarParametrosCalculo);

}