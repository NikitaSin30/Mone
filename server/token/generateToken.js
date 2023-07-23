const jwt = require('jsonwebtoken');
const { secret }  = require('./config');

const generateAccessToken = (userID) => {

    return jwt.sign({ userID: userID },'secret',{ expiresIn: '24h' });
};


module.exports = {
    generateAccessToken,
};
