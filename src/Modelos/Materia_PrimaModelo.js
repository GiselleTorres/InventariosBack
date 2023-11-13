//#region METODO LISTAR
const {response, request } = require('express');
const { makeQuery } = require('../conexion/index.js');

var Materia_PrimaModelo = {};
const getMaterias_Primas = (req, res = response) => {

var sql = "Select * FROM  MATERIA_PRIMA";

makeQuery(sql).then((result) => res.json(result)).catch((err) => res.status(500).json(error));

}

//#endregion
//#region METODO INSERTAR
const insertMateria_Prima = (req, res = response) => {
    
    var Materia_PrimaData = {
        //ID_MATERIA_PRIMA: null,
        NOM_MATERIA_PRIMA: req.body.NOM_MATERIA_PRIMA,
        CANTIDAD: req.body.CANTIDAD,
        TIPO_MP: req.body.TIPO_MP,
        PRESENTACION_MP: req.body.PRESENTACION_MP
};

var sql = " INSERT INTO materia_prima SET ?";

makeQuery(sql, Materia_PrimaData).then(() => res.json("registro insertado con exito")).catch((err) => res.status(500).json(err));
};
//#endregion
//#region METODO MODIFICAR
const updateMateria_Prima = (req=request, res = response) => {
    var Materia_PrimaData= {
        ID_MATERIA_PRIMA: req.body.ID_MATERIA_PRIMA,
        NOM_MATERIA_PRIMA: req.body.NOM_MATERIA_PRIMA,
        CANTIDAD: req.body.CANTIDAD,
        TIPO_MP: req.body.TIPO_MP,
        PRESENTACION_MP: req.body.PRESENTACION_MP
};

var sql = "UPDATE materia_prima SET NOM_MATERIA_PRIMA = '"+
        (Materia_PrimaData.NOM_MATERIA_PRIMA)
        +"', CANTIDAD = "+
        (Materia_PrimaData.CANTIDAD)
        +", TIPO_MP = "+
        (Materia_PrimaData.TIPO_MP)
        +", PRESENTACION_MP = "+
        (Materia_PrimaData.PRESENTACION_MP)
        +" WHERE ID_MATERIA_PRIMA = "+
        (Materia_PrimaData.ID_MATERIA_PRIMA)+";";

    makeQuery(sql).then(() => res.json("registro insertado con exito")).catch((err) => res.status(500).json(err));
};
//#region METODO CONSULTA FORANEA
const getMateria_Primasid = (req, res = response) => {

  var id = req.params.id;

  var sql = "SELECT " +
    " MP. `ID_MATERIA_PRIMA`, " +
    " MP. `NOM_MATERIA_PRIMA`, " +
    " MP. `CANTIDAD`, " +
    " B. `CATALOGO` AS 'TIPO_MP'," +
    " C. `CATALOGO` AS 'PRESENTACION_MP' " +
    " FROM `materia_prima` AS MP " +
    " INNER JOIN `catalogo` AS B ON MP. `TIPO_MP` = B. `ID_CATALOGO`" +
    " INNER JOIN `catalogo` AS C ON MP. `PRESENTACION_MP` = C. `ID_CATALOGO`" +
    " WHERE `ID_MATERIA_PRIMA` = " + id +
    " ORDER BY `ID_MATERIA_PRIMA`";  

    makeQuery(sql).then((result) => res.json(result)).catch((err) => res.status(500).json(err));
};
;  
 
module.exports = {getMaterias_Primas,getMateria_Primasid, insertMateria_Prima, updateMateria_Prima}
//#endregion

 
