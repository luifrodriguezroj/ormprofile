const User = require('../models').User;

module.exports = {
    create(req, res) {
        return User.create({
            name: req.body.name,
            lastname: req.body.lastname,
            cc: req.body.cc,
            location: req.body.location,
            cellphone: req.body.cellphone
        })
        .then(user => res.status(201).send(user))
        .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return User.findAll()
        .then(users => res.status(200).send(users))
        .catch(error => res.status(400).send(error));
    },
    find(req, res) {
        return User.findByPk(req.params.id)()
        .then(user => res.status(200).send(user))
        .catch(error => res.status(400).send(error));
    },
    update(req, res) {
        return User.update({
            name: req.body.name,
            lastname: req.body.lastname,
            cc: req.body.cc,
            location: req.body.location,
            cellphone: req.body.cellphone
        },{
            where: {
                id: req.params.id
            }
        })
        .then(user => res.status(200).send(user))
        .catch(error => res.status(400).send(error));
    },
    delete(req, res) {
        return User.destroy({
            where: {
                id: req.params.id
            }
        })()
        .then(user => res.status(200).send(user))
        .catch(error => res.status(400).send(error));
    },
};