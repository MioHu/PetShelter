const PetController = require('../controllers/pet.controller');

module.exports = app => {
    app.post('/api/pets', PetController.PetCreate);
    app.get('/api/pets', PetController.PetAll);
    app.get('/api/pets/:id', PetController.PetOne);
    app.put('/api/pets/:id', PetController.PetUpdate);
    app.delete('/api/pets/:id', PetController.PetDelete);
};