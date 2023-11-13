const {Router} = require('express');
const router = Router();

const {getProduccion,insertproduccion,updateProduccion,getProduccionid,updateCatalogo} = require('../Modelos/ProduccionModelo');
//Consultar produccion a nivel general
router.get("/", getProduccion);

//Insertar produccion en la tabla
router.post("/",insertproduccion);

//Actualizar produccion en la tabla
router.put("/", updateProduccion);

//Consultar produccion por ID
router.get("/:id", getProduccionid);

/*
//#region METODO PARA LLAMAR INFORME
//Se comenta temporalmente. No se está utilizando en la interfaz
router.get("/:IdPrimerInforme/:FecIni/:FecFin", function(req, res){
    var IdPrimerInforme = req.params.IdPrimerInforme;
    var FecIni = req.params.FecIni;
    var FecFin = req.params.FecFin;

        ProduccionModelo.getPrimInfoId(IdPrimerInforme, FecIni, FecFin, function(error,data){
            if(typeof data !== "undefined" && data.length > 0){
                res.status(200).json(data);
            }else{
                res.json(404,{msg: "Registro no existe"});
            }
        });
});
//#endregion
*/
module.exports=router;