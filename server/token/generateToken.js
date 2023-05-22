const jwt = require('jsonwebtoken');
const { secret }  = require('./config');

const generateAccessToken = (id) => {

    return jwt.sign({ id: id },'secret',{ expiresIn: '24h' });
};


module.exports = {
    generateAccessToken,
};
