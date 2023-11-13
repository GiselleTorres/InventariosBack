//#region METODO LISTAR
const { response } = require("express");
const { connection, makeQuery } = require("../conexion/index.js");

var ProduccionModelo = {};

const getProduccion = (req, res = response) => {
  var sql =
    "SELECT " +
    " P. `ID_PRODUCCION`, " +
    " P. `CALIDAD`, " +
    " P. `FEC_PRODUCCION`," +
    " P. `CANTIDAD_PRODUCCION`," +
    " P. `DEFECTUOSOS`," +
    " CONCAT( A.`PNOM_PERSONAL`,' '," +
    " A. `SNOM_PERSONAL`,' '," +
    " A. `PAPELL_PERSONAL`,' '," +
    " A. `SAPELL_PERSONAL`)'PERSONAL'," +
    " B. `NOM_PRODUCTO`" +
    " FROM `produccion` AS P " +
    " INNER JOIN `personal` AS A ON P. `ID_PERSONAL` = A. `ID_PERSONAL`" +
    " INNER JOIN `producto` AS B ON P. `ID_PRODUCTO` = B. `ID_PRODUCTO`" +
    " ORDER BY `ID_PRODUCCION`";

  makeQuery(sql).then((result) => res.json(result)).catch((err) => res.status(500).json(err));
};

const insertproduccion = (req, res = response) => {
  var ProduccionData = {
    CALIDAD: req.body.CALIDAD,
    FEC_PRODUCCION: req.body.FEC_PRODUCCION,
    CANTIDAD_PRODUCCION: req.body.CANTIDAD_PRODUCCION,
    DEFECTUOSOS: req.body.DEFECTUOSOS,
    ID_PERSONAL: req.body.ID_PERSONAL,
    ID_PRODUCTO: req.body.ID_PRODUCTO,
  };

  var sql = " INSERT INTO produccion SET ?";

  makeQuery(sql, ProduccionData).then(() => res.json("registro insertado con exito")).catch((err) => res.status(500).json(err));
};

const updateProduccion = (req, res = response) => {

    var ProduccionData = {
        ID_PRODUCCION: req.body.ID_PRODUCCION,
        CALIDAD: req.body.CALIDAD,
        FEC_PRODUCCION: req.body.FEC_PRODUCCION,
        CANTIDAD_PRODUCCION: req.body.CANTIDAD_PRODUCCION,
        DEFECTUOSOS: req.body.DEFECTUOSOS,
        ID_PERSONAL: req.body.ID_PERSONAL,
        ID_PRODUCTO: req.body.ID_PRODUCTO
    };

    var sql =
      "UPDATE produccion SET CALIDAD = '" +
      ProduccionData.CALIDAD +
      "', FEC_PRODUCCION = '" +
      ProduccionData.FEC_PRODUCCION +
      "', CANTIDAD_PRODUCCION = " +
      ProduccionData.CANTIDAD_PRODUCCION +
      ", DEFECTUOSOS = " +
      ProduccionData.DEFECTUOSOS +
      ", ID_PERSONAL = " +
      ProduccionData.ID_PERSONAL +
      ", ID_PRODUCTO = " +
      ProduccionData.ID_PRODUCTO +
      " WHERE ID_PRODUCCION = " +
      ProduccionData.ID_PRODUCCION +
      ";";

      makeQuery(sql).then(() => res.json("registro actualizado con exito")).catch((err) => res.status(500).json(err));
  
};

const getProduccionid = (req, res = response) => {
    
    var id = req.params.id;
    
    var sql =
      "SELECT " +
      " P. `ID_PRODUCCION`, " +
      " P. `CALIDAD`, " +
      " P. `FEC_PRODUCCION`," +
      " P. `CANTIDAD_PRODUCCION`," +
      " P. `DEFECTUOSOS`," +
      " CONCAT( A.`PNOM_PERSONAL`,' '," +
      " A. `SNOM_PERSONAL`,' '," +
      " A. `PAPELL_PERSONAL`,' '," +
      " A. `SAPELL_PERSONAL`)'PERSONAL'," +
      " B. `NOM_PRODUCTO`" +
      " FROM `produccion` AS P " +
      " INNER JOIN `personal` AS A ON P. `ID_PERSONAL` = A. `ID_PERSONAL`" +
      " INNER JOIN `producto` AS B ON P. `ID_PRODUCTO` = B. `ID_PRODUCTO`" +
      " WHERE `ID_PRODUCCION` = " +
      id +
      " ORDER BY `ID_PRODUCCION`";
    (";");

    makeQuery(sql).then((result) => res.json(result)).catch((err) => res.status(500).json(err));
  
};

//#region METODO PARA LLAMAR INFORME
//Se comenta temporalmente. No se está utilizando en la interfaz
/*ProduccionModelo.getPrimInfoId = function (
  IdPrimerInforme,
  FecIni,
  FecFin,
  callback
) {
  if (connection) {
    var sql =
      "SELECT PD.ID_PRODUCCION, " +
      " PD.CALIDAD," +
      " DATE_FORMAT(PD.FEC_PRODUCCION, '%d/%m/%Y') FEC_PRODUCCION," +
      " PD.CANTIDAD_PRODUCCION," +
      " (PD.CANTIDAD_PRODUCCION - PD.DEFECTUOSOS) CANT_PROD_BUENA," +
      " CONCAT(PER.PNOM_PERSONAL, ' ', PER.SNOM_PERSONAL, ' ', PER.PAPELL_PERSONAL, ' ', PER.SAPELL_PERSONAL) NOM_PERSONAL," +
      " PRO.NOM_PRODUCTO NOM_PRODUCTO" +
      " FROM PRODUCCION PD" +
      " INNER JOIN PERSONAL PER" +
      " USING (ID_PERSONAL)" +
      " INNER JOIN PRODUCTO PRO" +
      " USING (ID_PRODUCTO)" +
      " WHERE PD.CALIDAD = " +
      connection.escape(IdPrimerInforme) +
      " AND PD.FEC_PRODUCCION BETWEEN " +
      connection.escape(FecIni) +
      " AND " +
      connection.escape(FecFin) +
      "ORDER BY ID_PRODUCCION;";

    connection.query(sql, function (error, rows) {
      if (error) {
        throw error;
      } else {
        callback(null, rows);
      }
    });
  }
};
*/
module.exports = { getProduccion, insertproduccion, updateProduccion, getProduccionid };
