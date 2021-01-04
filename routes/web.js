const path = require('path');

exports.routes = function(app, rootdir) {
 
    app.get('/', function(req, res) {
        const options = {
            root: path.join(rootdir, 'website'),

            headers: {
              'Content-Type': 'text/html'
              
            }
          }
          res.sendFile('index.html', options);
          
    });
};