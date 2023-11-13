require('dotenv').config()
var mysql = require('mysql');
var connection;

function connectDatabase()
{
    if(!connection)
    {
        connection = mysql.createConnection({
          host: process.env.DB_HOST,
          user: process.env.DB_USERNAME,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
          port: 3306,
       });

        connection.connect(function(err)
        {
            if(!err)
            {
                console.log('base de datos conectada' +process.env.DB_NAME);
            }
            else
            {
                console.log('Error en la conexion con la base de datos');
            }
        });
    }
    return connection;
}
module.exports = connectDatabase();