//#region METODO LISTAR
const express = require('express');
const router = express.Router();

const  {getContactos, getContactosid, insertContacto, updateContacto}= require('../Modelos/ContactoModelo');

router.get("/",getContactos)
//#endregion
//#region METODO INSERTAR 
router.post("/" ,insertContacto) 
   

//#endregion
//#region METODO MODIFICAR
router.put("/", updateContacto)

//#endregion
//#region METODO CONSULTA ID
router.get("/:id", getContactosid)


//#endregion
module.exports=router;
