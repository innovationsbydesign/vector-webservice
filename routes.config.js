const Controller = require('./controllers/vectorcontroller');


exports.routesConfig = function (app) {
    app.post('/api/playanimation', [
        Controller.play
    ]);
    app.get('/vectors', [
        Controller.getvectors
    ]);
   
    app.get('/serialnumber', [
        Controller.getserialnumber]);
    
    app.post('/api/say', [
        Controller.say
    ]);
    
    
};