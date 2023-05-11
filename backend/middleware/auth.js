const jwt = require("jsonwebtoken");
const Users = require('../models/users');

module.exports = (req, res, next) => {

    // czy oba tokeny istnieją

    const refreshToken = req.cookies && req.cookies.refreshToken;
    const authHeader = req.headers['authorization'];
    const accesstoken = authHeader && authHeader.split(' ')[1];
    if (!accesstoken || !refreshToken) return res.sendStatus(401);

    //weryfikuje oba tokeny 

    jwt.verify(refreshToken, process.env.SECRET_REFRESH_TOKEN, (err, refreshPayload) => {
        if (err) return res.sendStatus(401)

        jwt.verify(accesstoken, process.env.SECRET_ACCESS_TOKEN, (err, accessPayload) => {
            if (err) return res.sendStatus(401)

            if (!(refreshPayload && accessPayload && refreshPayload.id === accessPayload.id && refreshPayload.passwordUUID === accessPayload.passwordUUID)) {
                return res.sendStatus(401)
            }

            //szuka użytkownika odpowiadającego tokenom

            Users.findOne({ _id: refreshPayload.id, passwordUUID: refreshPayload.passwordUUID })
                .then(result => {
                    if (!result) {
                        return res.sendStatus(401)
                    }
                    else {
                        req.user = result;
                        next();
                    }
                })
                .catch(err => {
                    console.log(err);
                    return res.sendStatus(401)

                })

        })

    })


}
