const { Schema,model } = require('mongoose');


const User = new Schema({
    firstName : {
        type     : String,
        required : true,
    },
    phoneNumber : { type: String },
    email       : {
        type     : String,
        unique   : true,
        required : true,
    },
    country : {
        type     : String,
        required : true,
    },
    nickName : {
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
