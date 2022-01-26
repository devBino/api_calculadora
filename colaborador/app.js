const porta     = 3000;
let express     = require('express');
let consign     = require('consign');
let bodyParser  = require('body-parser');
let cookieParser    = require('cookie-parser');
let sessions        = require('express-session');
let flash           = require('connect-flash');

let app = express();

app.use(sessions({
    secret:"6115c92dd8b1fa27dcbab963a14e8eac2803a8c3",
    saveUninitialized:true,
    cookie:{maxAge:(3600*24)},
    resave:false
}));

app.use(flash());

app.use( bodyParser.urlencoded({extended:true}) );
app.use( bodyParser.json() );

app.set('view engine','ejs');
app.set('views','./app/views');

app.use(express.static('./app/public'))

consign()
    .include('app/routes')
    .into(app);

app.listen(porta, ()=>{
    console.log('Servidor Rodando na porta ' + porta);
});