const Users = require('../models/users');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');


module.exports.login = (req, res) => {


    Users.findOne({ email: req.body.email })
        .then((result) => {
            if (result) {
                argon2.verify(result.password, req.body.password)
                    .then((isEqual) => {
                        if (isEqual) {

                            const accessToken = jwt.sign({ id: result._id, passwordUUID: result.passwordUUID }, process.env.SECRET_ACCESS_TOKEN, { expiresIn: '5m' });
                            const refreshToken = jwt.sign({ id: result._id, passwordUUID: result.passwordUUID }, process.env.SECRET_REFRESH_TOKEN, { expiresIn: '14d' });

                            res.cookie("refreshToken", refreshToken, {
                                path: "/",
                                httpOnly: true
                            })
                            
                            res.json({"user": result, "accessToken": accessToken});
                        }
                        else {
                            res.sendStatus(401);
                        }
                    })
                    .catch(err => {
                        res.sendStatus(401);
                    })
            }
            else {
                res.sendStatus(401);
            }

        })
        .catch(err => {
            res.sendStatus(401);
        })

}

