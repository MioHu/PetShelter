const {Pet} = require('../models/pet.model');

module.exports.PetCreate = (req, res) => {
    Pet.create(req.body)
    .then(createdPet => res.json(createdPet))
    .catch(err => res.status(400).json(err));
};

module.exports.PetAll = (req, res) => {
    Pet.find().sort({type:1})
    .then(petList => res.json(petList))
    .catch(err => res.json(err));
};

module.exports.PetOne = (req, res) => {
    Pet.findOne({_id: req.params.id})
    .then(pet => res.json(pet))
    .catch(err => res.json(err));
};

module.exports.PetUpdate = (req, res) => {
    Pet.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
    .then(updatedPet => res.json(updatedPet))
    .catch(err => res.status(400).json(err));
};

module.exports.PetDelete = (req, res) => {
    Pet.findOneAndDelete({_id: req.params.id})
    .then(deletedPet => res.json(deletedPet))
    .catch(err => res.json(err));
};