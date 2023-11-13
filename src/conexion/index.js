const mysql = require('mysql');
let connection;

async function connectDatabase()
{
    connection = mysql.createConnection({
        host:"mondo.mysql.database.azure.com", 
        user:"Mondo", 
        password:"Mindo2023*", 
        database:"mondoc", 
        port:3306,
        // ssl: { ca: fs.readFileSync("{ca-cert filename}") },
      })
    connection.connect();
}
const makeQuery = (query, data) => {
    return new Promise((resolve, reject) => {
      connection.query(query, data, (error, results) => {
        if (error) return reject(error);
  
        resolve(results);
      });
    });
  };

module.exports = {connectDatabase,connection,makeQuery};

//