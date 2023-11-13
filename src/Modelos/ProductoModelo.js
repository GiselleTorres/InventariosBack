const { response } = require("express");
const { connection, makeQuery } = require("../conexion/index.js");

var ProductoModelo = {};

const getProductos = (req, res = response) => {
    var sql =
        "SELECT	" +
        " P. `ID_PRODUCTO`, " +
        " P. `NOM_PRODUCTO`," +
        " C. `CATALOGO` AS 'CATEGORIA_PRODUCTO',   " +
        " B. `CATALOGO` AS 'CLASE_PRODUCTO'  " +
        " FROM `producto` AS P " +
        " INNER JOIN `catalogo` AS C ON P. `CATEGORIA_PRODUCTO` =  C. `ID_CATALOGO`" +
        " INNER JOIN `catalogo` AS B ON P. `CLASE_PRODUCTO` =  B. `ID_CATALOGO` " +
        "ORDER BY `ID_PRODUCTO`";

    makeQuery(sql).then((result) => res.json(result)).catch((err) => res.status(500).json(err));
};

const insertProductos = (req, res = response) => {
    var ProductoData = {
        ID_PRODUCTO: null,
        NOM_PRODUCTO: req.body.NOM_PRODUCTO,
        CATEGORIA_PRODUCTO: req.body.CATEGORIA_PRODUCTO,
        CLASE_PRODUCTO: req.body.CLASE_PRODUCTO,
    };

    var sql = " INSERT INTO producto SET ?";

    makeQuery(sql, ProductoData).then(() => res.json("registro insertado con exito")).catch((err) => res.status(500).json(err));
};

const updateProducto = (req, res = response) => {
    var ProductoData = {
        ID_PRODUCTO: req.body.ID_PRODUCTO,
        NOM_PRODUCTO: req.body.NOM_PRODUCTO,
        CATEGORIA_PRODUCTO: req.body.CATEGORIA_PRODUCTO,
        CLASE_PRODUCTO: req.body.CLASE_PRODUCTO,
    };

    var sql =
        "UPDATE producto SET NOM_PRODUCTO = '" +
        ProductoData.NOM_PRODUCTO +
        "', CATEGORIA_PRODUCTO = " +
        ProductoData.CATEGORIA_PRODUCTO +
        ", CLASE_PRODUCTO = " +
        ProductoData.CLASE_PRODUCTO +
        " WHERE ID_PRODUCTO = " +
        ProductoData.ID_PRODUCTO +
        ";";

    makeQuery(sql).then(() => res.json("registro actualizado con exito")).catch((err) => res.status(500).json(err));
};


const getProductosid = (req, res = response) => {

    var id = req.params.id;

    var sql =
        "SELECT	" +
        " P. `ID_PRODUCTO`, " +
        " P. `NOM_PRODUCTO`," +
        " C. `CATALOGO` AS 'CATEGORIA_PRODUCTO',   " +
        " B. `CATALOGO` AS 'CLASE_PRODUCTO'  " +
        " FROM `producto` AS P " +
        " INNER JOIN `catalogo` AS C ON P. `CATEGORIA_PRODUCTO` =  C. `ID_CATALOGO`" +
        " INNER JOIN `catalogo` AS B ON P. `CLASE_PRODUCTO` =  B. `ID_CATALOGO` " +
        " WHERE `ID_PRODUCTO` = " +
        id +
        " ORDER BY `ID_PRODUCTO`";
    (";");

    makeQuery(sql).then((result) => res.json(result)).catch((err) => res.status(500).json(err));
};

module.exports = { getProductos, insertProductos, updateProducto, getProductosid };