const { Schema,model } = require('mongoose');


const CashFlow = new Schema({
    balance : {
        type     : Number,
    },
    income : {
        type     : Number,
    },
    incomeOperations : {
        type     : Object,
    },
    spending : {
      type : Number,
    },
    spendingOperations:{
      type : Object
    },
    accumulation : {
        type     : Number,
    },
    accumulationOperations:{
        type :Object
    }
});

module.exports = model('CashFlow',CashFlow);
