//#region METODO LISTAR
const { response } = require("express");
const { connection, makeQuery } = require("../conexion/index.js");

var ProductoxMateriaprimaModelo = {};

const getProductoxMateriaprimas = (req, res = response) => {
  var sql =
    "SELECT F. `ID_PROD_X_MAT`, MP. `NOM_MATERIA_PRIMA`, P. `NOM_PRODUCTO` FROM `productoxmateriaprima` AS F INNER JOIN `materia_prima` AS MP ON F. `ID_MATERIA_PRIMA` = MP. `ID_MATERIA_PRIMA`" +
    " INNER JOIN `producto` AS P ON F. `ID_PRODUCTO` = P. `ID_PRODUCTO` ORDER BY `ID_PROD_X_MAT`";

    makeQuery(sql).then((result) => res.json(result)).catch((err) => res.status(500).json(err));
};

const insertProductoxMateriaprima = (req, res = response) => {

    var ProdXMPData = {
        ID_MATERIA_PRIMA: req.body.ID_MATERIA_PRIMA,
        ID_PRODUCTO: req.body.ID_PRODUCTO
    };

    var sql = " INSERT INTO productoxmateriaprima SET ?";

    makeQuery(sql, ProdXMPData).then(() => res.json("registro insertado con exito")).catch((err) => res.status(500).json(err));
  
};

const updateProductoxMateriaprima = (req, res = response) => {

    var ProdXMPData = {
        ID_PROD_X_MAT: req.body.ID_PROD_X_MAT,
        ID_MATERIA_PRIMA: req.body.ID_MATERIA_PRIMA,
        ID_PRODUCTO: req.body.ID_PRODUCTO
    };

    var sql =
      "UPDATE productoxmateriaprima SET ID_MATERIA_PRIMA = " +
      ProdXMPData.ID_MATERIA_PRIMA +
      ", ID_PRODUCTO = " +
      ProdXMPData.ID_PRODUCTO +
      " WHERE ID_PROD_X_MAT = " +
      ProdXMPData.ID_PROD_X_MAT +
      ";";

      makeQuery(sql).then(() => res.json("registro actualizado con exito")).catch((err) => res.status(500).json(err));
  
};
//#endregion
//#region METODO CONSULTA ID
const getProductoxMateriaprimasid = (req, res = response) => {

    var id = req.params.id;

    var sql =
      "SELECT " +
      " F. `ID_PROD_X_MAT`," +
      " MP. `NOM_MATERIA_PRIMA`,   " +
      " P. `NOM_PRODUCTO`  " +
      " FROM `productoxmateriaprima` AS F  " +
      " INNER JOIN `materia_prima` AS MP ON F. `ID_MATERIA_PRIMA` = MP. `ID_MATERIA_PRIMA`" +
      " INNER JOIN `producto` AS P ON F. `ID_PRODUCTO` = P. `ID_PRODUCTO` " +
      " WHERE F. `ID_PROD_X_MAT` = " +
      id +
      " ORDER BY `ID_PROD_X_MAT`;";

      makeQuery(sql).then((result) => res.json(result)).catch((err) => res.status(500).json(err));
  
};
//#endregion
module.exports = { getProductoxMateriaprimas, insertProductoxMateriaprima, updateProductoxMateriaprima, getProductoxMateriaprimasid }