//#region METODO LISTAR
const {Router} = require('express');
const router = Router();

const{getPersonals ,insertPersonal, updatePersonal, getPersonalsID}= require('../Modelos/PersonalModelo');
router.get("/", getPersonals)

//#region METODO INSERTAR
router.post("/",insertPersonal)

//#region METODO MODIFICAR
router.put("/:id",updatePersonal);

//#endregion
//#METODO CONSULTA ID
router.get("/:id", getPersonalsID);

//#endregion
module.exports=router;