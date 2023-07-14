const User = require('../modelsMongo/User');
const decoratorIDandDate = require('./decorator/decoratorID');

class ServiceCashDB {
    constructor(model) {
        this.DB = model;
    }

    async addIncome(incomeOperation,userID) {
        try {
            const { income, balance } = await User.findById(userID);
            const newBallance = balance + incomeOperation.income;
            const newIncomeBalance = income + incomeOperation.income;
            const modifiedIncomeOperation = decoratorIDandDate(incomeOperation);

            await this.DB.updateOne(
                { _id: userID },
                {
                    $set : {
                        income  : newIncomeBalance,
                        balance : newBallance,
                    },
                    $push : {
                        incomeOperations : modifiedIncomeOperation,
                        allOperations    : modifiedIncomeOperation,
                    },
                }
            );

            return modifiedIncomeOperation;
        }
        catch (error) {
            throw error;
        }
    }

    async addAccumulation(accumulationOperation,userID) {
        try {
            const { accumulation,balance } = await User.findById(userID);
            const newBalance = balance - accumulationOperation.accumulation;
            const newAccumulationBalance = accumulation + accumulationOperation.accumulation;
            const modifiedAccumulationOperation = decoratorIDandDate(accumulationOperation);

            await this.DB.updateOne(
                { _id: userID },
                {
                    $set : {
                        accumulation : newAccumulationBalance,
                        balance      : newBalance,
                    },
                    $push : {
                        accumulationOperations : modifiedAccumulationOperation,
                        allOperations          : modifiedAccumulationOperation,
                    },
                }
            );

            return modifiedAccumulationOperation;
        }
        catch (error) {
            throw error;
        }
    }

    async addSpending(spendingOperation,userID) {
        try {
            const { spending, balance } = await User.findById(userID);
            const newBalance = balance - spendingOperation.spending;
            const newSpendingBalance = spending + spendingOperation.spending;
            const modifiedSpendingOperation = decoratorIDandDate(spendingOperation);


            await this.DB.updateOne(
                { _id: userID },
                {
                    $set : {
                        spending : newSpendingBalance,
                        balance  : newBalance,
                    },
                    $push : {
                        spendingOperations : modifiedSpendingOperation,
                        allOperations      : modifiedSpendingOperation,
                    },
                }
            );

            return modifiedSpendingOperation;
        }
        catch (error) {
            throw error;
        }
    }
}


module.exports = new ServiceCashDB(User);
