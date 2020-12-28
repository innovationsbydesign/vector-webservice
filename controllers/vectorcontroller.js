const vectors = require("../domain/vector.model")
const Linq = require('linq');


module.exports = {


getvectors : async function(req, res) 
 {

   try {
      let result;
      try {
         result = await vectors.findByName(req.query.name);
      } catch (e) {
         throw e;
         
      }
      res.status(200).send(result);
   } catch (err) {
      console.log(err);
      res.status(400).send("Bad Request");
   }
},

getserialnumber : async function (req, res)  {
   let result;
  try {
   try {
      result = await vectors.getSerialNumber(req.query.name);
   } catch (e) {
      throw e;
      
   }
   res.status(200).send(result);
} catch (err) {
   console.error(err);
   res.status(400).send("Bad Request");
}
},

play : async function (req, res)  {
   let result;
   try {
   
   try {
      console.log("serial number: " + req.body.serialnumber)
      result = await vectors.playAnimation(req.body.serialnumber, req.body.animation)
   }  catch (e) {
      throw e;
      
   }
   res.status(200).send(result);
} catch (err) {
   console.log(err);
   res.status(400).send("Bad Request");
}
},
say : async function (req, res)  {
   let phrase = req.body.phrase;
   let name = req.body.name;
   let result;
   var error = null;
   
//    [
//       {
//           "alias": "bobby",
//           "serialnumber": "006037af",
//           "certlocation": "Vector-P9H1-006037af.cert",
//           "ipaddress": "192.168.1.5",
//           "name": "Vector-P9H1",
//           "deviceguid": "cVFCZLc3R/aDVIP5tk9q8Q=="
//       }
//   ]
 
   try {
      let response = await vectors.findByName(name).catch(e => error = e);
      let dict = Linq.from(response).first();
     result = await vectors.speak(dict.serialnumber, dict.ipaddress, dict.certlocation, phrase).catch(z => error = z);
     
   }catch(err) {
      error = err;
   }

     
   if (error === null) 
   res.status(200).send(result);
   else
   {
      console.log(error);
      res.status(400).send(error);
   }
  }
}

   

