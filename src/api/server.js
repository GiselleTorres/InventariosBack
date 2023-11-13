// Packages
const express = require("express");
const cors = require("cors");

// Routes
const catalogo = require('../rutas/CatalogoRuta');//ruta
const contacto = require('../rutas/ContactoRuta');
const Materia_Prima = require('../rutas/Materia_PrimaRuta');
const Personal = require('../rutas/PersonalRuta');
const Produccion = require('../rutas/ProduccionRuta');
const Producto = require('../rutas/ProductoRuta');
const ProductoXMateriaPrima = require('../rutas/ProductoxMateriaprimaRuta');

// DB
const {connectDatabase,connection}=require("../conexion")

class Server {
  app = express();
  port;

  routeCatalogo = "/api/catalogo";
  routecontacto = "/api/contacto";
  routeMateria_Prima = "/api/materia-prima";
  routePersonal = "/api/personal";
  routeProduccion = "/api/produccion";
  routeProducto = "/api/producto";
  routeProductoXMateriaPrima = "/api/producto-materia-prima";

  constructor() {
    this.port = process.env.PORT || 3000;

    // db
    this.connectDB();

    // Middlewares
    this.middlewares();

    // Routes
    this.routes();
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Parse responses
    this.app.use(express.json());

    // Directorio publico
    this.app.use(express.static("src/public"));
  }

  routes() {
    this.app.use(this.routeCatalogo, catalogo);
    this.app.use(this.routecontacto, contacto);
    this.app.use(this.routeMateria_Prima, Materia_Prima);
    this.app.use(this.routePersonal, Personal);
    this.app.use(this.routeProduccion, Produccion);
    this.app.use(this.routeProducto, Producto);
    this.app.use(this.routeProductoXMateriaPrima, ProductoXMateriaPrima);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`API ready 🥳, PORT = ${this.port}`);
    });
  }

  connectDB() {
    connectDatabase()
      .then(() => console.log("Success"))
      .catch((error) => console.log(error));
  }
}

module.exports = Server;