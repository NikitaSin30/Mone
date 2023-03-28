const { Schema,model } = require('mongoose');


const User = new Schema({
    email       : {
        type     : String,
        unique   : true,
        required : true,
    },
    country : {
        type     : String,
        required : true,
    },
    nickname : {
        type     : String,
        unique   : true,
        required : true,
    },
    password : {
        type     : String,
        required : true,
    },
});

module.exports = model('User',User);
