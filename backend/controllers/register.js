const Users = require('../models/users');
const argon2 = require('argon2');
const { v4: uuid } = require('uuid')
module.exports.register = (req, res) => {

    argon2.hash(req.body.password).then((passwors => {

        const newUser = new Users({
            username: req.body.username,
            email: req.body.email,
            password: passwors,
            passwordUUID: uuid()
        })

        newUser.save()
            .then(result => {
                res.json(result);
            })
            .catch(err => {
                res.json(err);
            })

    }))
        .catch(err => {
            res.json(err);
        })

}

