const { builtinModules } = require('module');
const Linq = require('linq');
const vectorConfig = require("../domain/vector_configs.json");

module.exports = {
  
    findByName : function(vectorname) {
        return new Promise((resolve, reject) => {
        try {
            var result = Linq.from(vectorConfig.vector)
            .where(x => x.name === vectorname).single();
        } catch(err) {
            reject(err)
        }
        resolve(result)
     })
    }
}