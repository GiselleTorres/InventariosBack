//#region METODO LISTAR
const {Router} = require('express');
const router = Router();

const {getProductoxMateriaprimas,insertProductoxMateriaprima,updateProductoxMateriaprima,getProductoxMateriaprimasid} = require('../Modelos/ProductoxMateriaprimaModelo');

//Consulta produccion por materia prima en general
router.get("/",getProductoxMateriaprimas)

//Insertar un nuevo registro
router.post("/",insertProductoxMateriaprima)

//Actualizar registros en la tabla
router.put("/", updateProductoxMateriaprima);

//Consultar produccion por materia prima  por ID
router.get("/:id", getProductoxMateriaprimasid);

module.exports=router;