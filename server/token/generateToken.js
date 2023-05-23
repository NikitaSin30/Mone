const jwt = require('jsonwebtoken');
const { secret }  = require('./config');

const generateAccessToken = (idUser) => {

    return jwt.sign({ idUser: idUser },'secret',{ expiresIn: '24h' });
};


module.exports = {
    generateAccessToken,
};
