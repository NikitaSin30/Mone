const { Schema,model } = require('mongoose');


const User = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
  },
  income: {
    type: Number,
  },
  incomeOperations: {
    type: Array,
  },
  spending: {
    type: Number,
  },
  spendingOperations: {
    type: Array,
  },
  accumulation: {
    type: Number,
  },
  accumulationOperations: {
    type: Array,
  },
  categories: {
    type: Array,
  },
  tasks: {
    type: Array,
  },
});

module.exports = model('User',User);
