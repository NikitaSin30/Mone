const jwt = require('jsonwebtoken');
const { secret } = require('./config');

const generateAccessToken = (id, email) => {
    const payload = {
        id,
        email,
    };

    return jwt.sign(payload,secret,{ expiresIn: '24h' });
};

module.exports = {
    generateAccessToken,
};
