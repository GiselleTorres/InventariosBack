//#region METODO LISTAR
const { response, request } = require('express');
const { connection, makeQuery } = require('../conexion/index.js');

var PersonalModelo = {};

const getPersonals = (req, res = response) => {

    var sql = " SELECT p.`ID_PERSONAL`, CONCAT(p.`PNOM_PERSONAL`, ' '" +
        " , p.`SNOM_PERSONAL`, ' ', p.`PAPELL_PERSONAL`, ' ', p.`SAPELL_PERSONAL`)" +
        " AS 'PERSONA', c.`CATALOGO` AS 'TIPO_DOC', p.`NUM_DOC`, d.`CATALOGO` AS 'CARGO_PERSONA' " +
        "FROM `personal` AS p INNER JOIN `catalogo`AS c ON p.`TIPO_DOC`= c.`ID_CATALOGO` " +
        "INNER JOIN `catalogo`AS d ON p.`CARGO_PERSONA`= d.`ID_CATALOGO` ORDER BY `ID_PERSONAL`";

    makeQuery(sql).then((result) => res.json(result)).catch((err) => res.status(500).json(err));
}


//#endregion
//#region METODO INSERTAR
const insertPersonal = (req, res = response) => {

    var PersonalData = {

        TIPO_DOC: req.body.TIPO_DOC,
        PNOM_PERSONAL: req.body.PNOM_PERSONAL,
        SNOM_PERSONAL: req.body.SNOM_PERSONAL,
        PAPELL_PERSONAL: req.body.PAPELL_PERSONAL,
        SAPELL_PERSONAL: req.body.SAPELL_PERSONAL,
        NUM_DOC: req.body.NUM_DOC,
        CARGO_PERSONA: req.body.CARGO_PERSONA
    };

    var sql = " INSERT INTO personal SET ?";

    makeQuery(sql, PersonalData).then(() => res.json("registro insertado con exito")).catch((err) => res.status(500).json(err));

};

//#endregion
// //#region METODO MODIFICAR
const updatePersonal = (req = request, res = response) => {
    let query = ""
    var PersonalData = {
        //ID_PERSONAL: req.body.ID_PERSONAL,
        TIPO_DOC: req.body.TIPO_DOC,
        PNOM_PERSONAL: req.body.PNOM_PERSONAL,
        SNOM_PERSONAL: req.body.SNOM_PERSONAL,
        PAPELL_PERSONAL: req.body.PAPELL_PERSONAL,
        SAPELL_PERSONAL: req.body.SAPELL_PERSONAL,
        NUM_DOC: req.body.NUM_DOC,
        CARGO_PERSONA: req.body.CARGO_PERSONA
    };
    Object.keys(PersonalData).forEach((brand) => {
        if (PersonalData[brand]) {
            query += `${brand} = '${PersonalData[brand]}', `;
        }
    });


    query = query.slice(0, -2) + query.slice(-1);

    const { id } = req.params
    var sql = `UPDATE personal SET ${query.trim()} WHERE ID_PERSONAL =${id} ;`

    makeQuery(sql, PersonalData).then(() => res.json("registro modificado con exito")).catch((err) => res.status(500).json(err));
}

//#endregion
//#region METODO CONSULTA ID
const getPersonalsID = (req, res = response) => {

    const { id } = req.params
    var sql = `SELECT * FROM PERSONAL where ID_PERSONAL =${id} ;`


    makeQuery(sql).then((result) => res.json(result)).catch((err) => res.status(500).json(err));
};

module.exports = { getPersonals, insertPersonal, getPersonalsID, updatePersonal }
//#endregion