//#region METODO LISTAR
const { response, request } = require('express');
const { makeQuery } = require('../conexion/index.js');

const getContactos = (req, res = response) => {

    var sql = "SELECT * FROM CONTACTO";

    makeQuery(sql).then((result) => res.json(result)).catch((err) => res.status(500).json(error));

}

//#endregion
//#region METODO INSERTAR
const insertContacto = (req, res = response) => {

    var contactoData = {
        //ID_CONTACTO: null,
        ID_PERSONAL: req.body.ID_PERSONAL,
        DIRDATO_CONTACTO: req.body.DIRDATO_CONTACTO,
        TIPO_CONTACTO: req.body.TIPO_CONTACTO

    };

    var sql = " INSERT INTO contacto SET ?";

    makeQuery(sql, contactoData).then(() => res.json("registro insertado con exito")).catch((err) => res.status(500).json(err));
};

//#endregion
//#region METODO MODIFICAR
const updateContacto = (req=request, res = response) => {
    var ContactoData={
        ID_CONTACTO: req.body.ID_CONTACTO,
        ID_PERSONAL: req.body.ID_PERSONAL,
        DIRDATO_CONTACTO: req.body.DIRDATO_CONTACTO,
        TIPO_CONTACTO: req.body.TIPO_CONTACTO
    };

   var sql = "UPDATE contacto SET ID_PERSONAL = "+
        (ContactoData.ID_PERSONAL)
        +", DIRDATO_CONTACTO = "+
        (ContactoData.DIRDATO_CONTACTO)
        +", TIPO_CONTACTO = "+
        (ContactoData.TIPO_CONTACTO)
        +" WHERE ID_CONTACTO = "+
        (ContactoData.ID_CONTACTO)+";";

    makeQuery(sql).then(() => res.json("registro insertado con exito")).catch((err) => res.status(500).json(err));
};
//#region METODO CONSULTA FORANEA
const getContactosid = (req=request, res = response) => {
const {id}= req.params
    var sql = `SELECT * FROM CONTACTO where ID_CONTACTO =${id} ;`

    makeQuery(sql).then((result) => res.json(result)).catch((err) => res.status(500).json(error));

};
//#endregion
//#region METODO CONSULTAR ID DENTRO FORANEA
// const getCatalogosID = (req, res = response) => {

//     var tipcat = req.params.tipcat;
//     var id = req.params.id;

//     var sql = "SELECT C.`ID_CATALOGO`," +
//         " C.`CATALOGO`,  N.`CATALOGO` AS 'TIPO_CATALOGO' " +
//         " FROM `catalogo` AS C   INNER JOIN `catalogo` AS N ON C. " +
//         " `TIPO_CATALOGO` = N. `ID_CATALOGO` " +
//         " WHERE C.`TIPO_CATALOGO` = " + tipcat +
//         " AND C.`ID_CATALOGO` = " + id + ";";

//     makeQuery(sql).then((result) => res.json(result)).catch((err) => res.status(500).json(err));
// };

;
module.exports = { getContactos, getContactosid, insertContacto,updateContacto}
//#endregion
 
