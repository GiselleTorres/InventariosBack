var express = require('express');//guarda express que nosotros intalamos

var bodyParser = require('body-parser'), port = 3000;//rmanejo de cuerpo de la "pagina" y puerto

var http = require('http');//protocolo de intercambio de archivos

var path = require('path');//direccion

//var conectado = require('./src/conexion/index');
var catalogo = require('./src/rutas/CatalogoRuta');//ruta
var contacto = require('./src/rutas/ContactoRuta');
var Materia_Prima = require('./src/rutas/Materia_PrimaRuta');
var Personal = require('./src/rutas/PersonalRuta');
var Produccion = require('./src/rutas/ProduccionRuta');
var Producto = require('./src/rutas/ProductoRuta');
var ProductoXMateriaPrima = require('./src/rutas/ProductoxMateriaprimaRuta');
var app = express();//recibe un constructor

// todos los entornos

app.set('port', process.env.PORT || port);//metodo para recibir puerto y proceso

app.use(bodyParser.json({type: 'application/json', limit: '10mb'}));//recibe un cuerpo y un objeto json

app.use(bodyParser.urlencoded({extended: false}));//recibe url codificada

app.use(express.static(path.join(__dirname, 'public')));//recibe direccion

//================================================================

app.use(function (req, res, next)

{

// Stio web al que desea permitir que se conecte

res.setHeader('Access-Control-Allow-Origin', 'https://inventarios-front.vercel.app');

// A que métodos que desea dar permisos

res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

// A que encabezados se les va a dar permiso

res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//Establezca en verdadero si necesita que el sitio web incluya cookies en las solicitudes enviadas

//a la API (por ejemplo, en caso de que use sesiones)

res.setHeader('Access-Control-Allow-Credentials', true);

// Pase a la siguiente capa de middleware

next();

});

//============================================================

app.use('/Catalogo', catalogo());//ruta para el servicio
app.use('/contacto', contacto());
app.use('/Materia_Prima', Materia_Prima());
app.use('/Personal', Personal());
app.use('/Produccion', Produccion());
app.use('/Producto', Producto());
app.use('/ProductoXMateriaPrima', ProductoXMateriaPrima());
http.createServer(app).listen(app.get('port'), function ( )

{

console.log('Servidor Express escuchando por el puerto ' + app.get('port'));

});

module.exports = app;