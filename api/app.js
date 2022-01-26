const porta     = 8080;
let express     = require('express');
let consign     = require('consign');
let bodyParser  = require('body-parser');

let app = express();

app.use( bodyParser.urlencoded({extended:true}) );
app.use( bodyParser.json() );

app.set('view engine', 'ejs');
app.set('views','./app/views')

consign()
    .include('app/routes')
    .into(app);

app.listen(porta, ()=>{
    console.log('Servidor Rodando na porta ' + porta);
});