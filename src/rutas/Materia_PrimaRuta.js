//#region METODO LISTAR
const { Router } = require('express');
const router = Router();

const { getMaterias_Primas,insertMateria_Prima,getMateria_Primasid, updateMateria_Prima } = require('../Modelos/Materia_PrimaModelo');

router.get("/", getMaterias_Primas)
//#endregion
//#region METODO INSERTAR 
router.post("/", insertMateria_Prima)

//#endregion
//#region METODO MODIFICAR
router.put("/", updateMateria_Prima)
//#endregion
//#region METODO CONSULTA ID

router.get("/:id", getMateria_Primasid);

//#endregion
module.exports = router;
