const PirateControllers = require('../controllers/pirate.controllers');
 
module.exports = app => {
    app.get('/api/pirates', PirateControllers.findAllPirates);
    app.get('/api/pirates/:id/find', PirateControllers.findPirate);
    app.put('/api/pirates/:id/update', PirateControllers.updatePirate);
    app.post('/api/pirates/create', PirateControllers.createPirate);
    app.delete('/api/pirates/:id/delete', PirateControllers.deletePirate);
    app.patch('/api/pirates/:id/add', PirateControllers.addTopping);
}

