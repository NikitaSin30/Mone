const { v4: uuidv4 } = require('uuid');


module.exports = (obj) => {

    const id = uuidv4();

    return {
        ...obj,
        id,
    };
};
