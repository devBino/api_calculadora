const inicio = require('../controllers/inicio');

module.exports = function(app){

    app.get('/', (req,res)=>{
        res.redirect('/inicio');
    });

    app.get('/inicio', (req,res)=>{
        res.render('inicio');
    });

    app.post('/acessar', inicio.login);

    app.get('/sair', inicio.sair);

}