//#region METODON LISTAR
const {Router} = require('express');
const router = Router();

const {getProductos,insertProductos,updateProducto,getProductosid} = require('../Modelos/ProductoModelo');
//Consultar Productos a nivel general
router.get("/",getProductos);

//Insertar productos en la tabla
router.post("/",insertProductos);

//Actualizar productos en la tabla
router.put("/", updateProducto);

//Consultar productos por ID
router.get("/:id", getProductosid);

module.exports=router;