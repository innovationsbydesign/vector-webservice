const mysql = require('mysql');
require('dotenv').config();

module.exports = {
  
  
  findByAlias : function(vectorAlias) {

    var con = mysql.createConnection({
      host: process.env.HOST,
      user: process.env.USERNAME,
      password: process.env.PASSWORD,
      database:  process.env.DATABASE
   
    });   
    return new Promise((resolve, reject) => {
      con.connect(function(err) {
        if (err) reject(err)
          con.query("SELECT * FROM devices where alias=?" ,vectorAlias, function (err, result, fields) {
          {
            
            if (err) reject(error)
            console.log(result);
            resolve(result);
          }
        });
      
      });
    })
  },

  getSerialNumberByAlias : async function(vectorAlias) {
    var con = mysql.createConnection({
      host: process.env.HOST,
      user: process.env.USERNAME,
      password: process.env.PASSWORD,
      database:  process.env.DATABASE
   
    }); 
    try {
      return new Promise((resolve, reject) => {
        con.connect(function (err) {
          if (err)
            reject(err);
          con.query("SELECT serialnumber FROM devices where alias=?", vectorAlias, function (err_1, result, fields) {
            {

              if (err_1)
                reject(error);
              console.log(result);
              resolve(result);
            }
          });

        });
      });
    } catch (e) {
      return console.log(e);
    }
  }
}
