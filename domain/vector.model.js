const data = require("../services/mysql.service")
const {PythonShell} = require('python-shell')


module.exports = {
    findByName : async function(name) { 
        return  await data.findByAlias(name)
        //return JSON.stringify(result)
    },
    getSerialNumber : async function (name) {
        return  await data.getSerialNumberByAlias(name);
       
        
    },
    playAnimation: async function(serialnumber, animation) {
       
        var serial = "-s ".concat(serialnumber)
        var anime = "-i ".concat(animation)
        let options = { 
           
            pythonOptions: ['-u'], 
              scriptPath: process.cwd() + '/scripts',  
            args: [serial, anime] 
        }; 
        return new Promise((resolve, reject) => {
       
        PythonShell.run('20_playanimation.py', options, function (err, result){ 
            if (err) 
              reject(err)
            // result is an array consisting of messages collected  
            //during execution of script. 
            
            if(result) {
                console.log('result: ', result.toString()); 
                resolve( result.toString()); 
            }
      }); 
    }).catch(e => {throw e})
},
speak: async function(serialnumber,ip, cert, phrase) {
 
  var serial =  "-s ".concat(serialnumber)   
  var name = "-a ".concat(phrase)
  var cert = "-c ".concat(cert)
  var ip = "-i ".concat(ip)
    let options = { 
       
        pythonOptions: ['-u'], 
          scriptPath: process.cwd() + '/scripts',  
        args: [serial, name, cert, ip] 
    }; 
    return new Promise((resolve, reject) => {
   
    PythonShell.run('01_speak.py', options, function (err, result){ 
        if (err) 
          reject(err)
        // result is an array consisting of messages collected  
        //during execution of script. 
        
        if(result) {
            console.log('result: ', result.toString()); 
            resolve( result.toString()); 
        }
  }); 
}).catch(e => {throw e})
}
}