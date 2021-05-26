const Pirate = require('../models/pirate.models');

module.exports.findAllPirates = (req, res) => {
    Pirate.find()
        .then(allPirates => res.json({ pirates: allPirates }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.findPirate=(req, res) => {
    Pirate.findOne({ _id: req.params.id })
        .then(pirate => res.json({ pirate: pirate }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createPirate = (req, res) => {
    Pirate.create(req.body)
        .then(newPirate => res.json({ pirate: newPirate }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updatePirate = (req, res) => {
    Pirate.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedPirate => res.json({ pirate: updatedPirate }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.deletePirate = (req, res) => {
    Pirate.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
module.exports.addTopping = (req, res) => {
    Pirate.update(
        { _id: req.params.id },
        { $push: { toppings: req.body.toppings } }
    )
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }))
        
}


