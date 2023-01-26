import app from './app'
import './db/database'

app.listen(3000);
console.log('server listen on port',3000)

//Settings
//app.set('port', process.env.PORT || 3000);
//app.set('json spaces',2);

//middlewares
//app.use(express.urlencoded({extended:false})); //entiende datos que envian 
//app.use(express.json());
//app.use(morgan('dev')); //imprime en consola los eventos

//routes
//app.use(require('./routes/index'));
//app.use('/login',require('./routes/login'));
//app.use('/api/producto',require('./routes/producto'));
//app.use('/api',require('./routes/VentayCompra'));
//app.use('/api/marca',require('./routes/marca'));
//app.use('/api/linea',require('./routes/linea'));

// iniciando server
//app.listen(app.get('port'),()=>{
  //console.log(`Escuchando en puerto ${app.get('port')}`);
  //V1Swagger(app,app.get('port'))
//});