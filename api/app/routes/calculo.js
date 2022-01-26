const verificaToken = require('../middlewares/verificaToken');
const calculo       = require('../controllers/calculo');

module.exports = function(app){

    app.get('/calculo', verificaToken, calculo.listar);
    app.post('/calculo', verificaToken, calculo.salvar);
    app.put('/calculo', verificaToken, calculo.alterar);
    app.delete('/calculo/:id', verificaToken, calculo.deletar);

}