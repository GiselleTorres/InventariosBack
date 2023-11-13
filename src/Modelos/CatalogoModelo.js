//#region METODO LISTAR
const { response } = require('express');
const { makeQuery } = require('../conexion/index.js');

const getCatalogos = (req, res = response) => {

    var sql = "SELECT * FROM CATALOGO";

    makeQuery(sql).then((result) => res.json(result)).catch((err) => res.status(500).json(error));

}

//#endregion
//#region METODO INSERTAR
const insertCatalogo = (req, res = response) => {

    var CatalogoData = {
        //ID_CATALOGO: req.body.ID_CATALOGO,
        CATALOGO: req.body.CATALOGO,
        TIPO_CATALOGO: req.body.TIPO_CATALOGO
    };

    var sql = " INSERT INTO catalogo SET ?";

    makeQuery(sql, CatalogoData).then(() => res.json("registro insertado con exito")).catch((err) => res.status(500).json(err));
};
//#endregion
//#region METODO MODIFICAR
const updateCatalogo = (req, res = response) => {
    var CatalogoData={
        ID_CATALOGO: req.body.ID_CATALOGO,
        CATALOGO: req.body.CATALOGO,
        TIPO_CATALOGO: req.body.TIPO_CATALOGO
    };

    var sql = "UPDATE catalogo SET CATALOGO = '" +
        CatalogoData.CATALOGO+
        "', TIPO_CATALOGO = " +
        CatalogoData.TIPO_CATALOGO +
        " WHERE ID_CATALOGO = " +
        CatalogoData.ID_CATALOGO+ ";";

    makeQuery(sql).then(() => res.json("registro actualizado con exito")).catch((err) => res.status(500).json(err));

}
//#endregion
//#region METODO CONSULTA FORANEA
const getCatalogosTC = (req, res = response) => {

    var tipcat = req.params.tipcat;

    var sql = "SELECT C.`ID_CATALOGO`," +
        " C.`CATALOGO`,  N.`CATALOGO` AS 'TIPO_CATALOGO' " +
        "   FROM `catalogo` AS C    INNER JOIN `catalogo` AS N ON C. " +
        "`TIPO_CATALOGO` = N. `ID_CATALOGO` " +
        "WHERE C.`TIPO_CATALOGO` = " +
        tipcat +
        " ORDER BY C. ID_CATALOGO ;";

    makeQuery(sql).then((result) => res.json(result)).catch((err) => res.status(500).json(err));
};
//#endregion
//#region METODO CONSULTAR ID DENTRO FORANEA
const getCatalogosID = (req, res = response) => {

    var tipcat = req.params.tipcat;
    var id = req.params.id;

    var sql = "SELECT C.`ID_CATALOGO`," +
        " C.`CATALOGO`,  N.`CATALOGO` AS 'TIPO_CATALOGO' " +
        " FROM `catalogo` AS C  INNER JOIN `catalogo` AS N ON C. " +
        " `TIPO_CATALOGO` = N. `ID_CATALOGO` " +
        " WHERE C.`TIPO_CATALOGO` = " + tipcat +
        " AND C.`ID_CATALOGO` = " + id + ";";

    makeQuery(sql).then((result) => res.json(result)).catch((err) => res.status(500).json(err));
};

;
module.exports = { getCatalogos, insertCatalogo, getCatalogosTC, getCatalogosID, updateCatalogo }
//#endregion
