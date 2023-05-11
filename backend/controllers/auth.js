const Users = require('../models/users');
const jwt = require("jsonwebtoken");
module.exports.verify = (req, res) => {
    res.json(req.user);
}

module.exports.example = (req, res) => {
    res.json("Example");
}


module.exports.logout = (req, res) => {

    res.cookie("refreshToken", "", {
        path: "/",
        httpOnly: true,
        maxAge: 0
    })

    res.sendStatus(200);
}

// odświerza accessToken

module.exports.refresh = (req, res) => {
    const refreshToken = req.cookies && req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(401);
    
    // weryfikuje refreshToken

    jwt.verify(refreshToken, process.env.SECRET_REFRESH_TOKEN, (err, refreshPayload) => {
        if (err) return res.sendStatus(401)

        //szuka użytkownika z refreshTokenu

        Users.findOne({ _id: refreshPayload.id, passwordUUID: refreshPayload.passwordUUID })
            .then(result => {
                if (!result) {
                    return res.sendStatus(401)
                }
                else {
                    const accessToken = jwt.sign({ id: result._id, passwordUUID: result.passwordUUID }, process.env.SECRET_ACCESS_TOKEN, { expiresIn: '5m' });
                    res.json({ "accessToken": accessToken });
                }
            })
            .catch(err => {
                return res.sendStatus(401)
            })
    })
}