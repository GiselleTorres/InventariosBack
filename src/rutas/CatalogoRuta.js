//#region METODO LISTAR
const {Router} = require('express');
const router = Router();

const {getCatalogos,getCatalogosID,getCatalogosTC,insertCatalogo,updateCatalogo} = require('../Modelos/CatalogoModelo');
router.get("/",getCatalogos)

//region METODO INSERTAR
router.post("/",insertCatalogo)
//METODO MODIFICAR
router.put("/", updateCatalogo);
//METODO CONSULTAR ID
router.get("/:tipcat/:id", getCatalogosID);
//
router.get("/:tipcat", getCatalogosTC);

module.exports=router;
