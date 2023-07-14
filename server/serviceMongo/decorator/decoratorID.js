const { v4: uuidv4 } = require('uuid');


module.exports = (obj) => {
    const id = uuidv4();
    obj.id = id
    obj.date = new Date().toLocaleDateString()
    return obj
};
