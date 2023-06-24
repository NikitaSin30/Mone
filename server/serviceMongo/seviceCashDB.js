const User = require('../modelsMongo/User');


class ServiceCashDB {
    constructor(model) {
        this.DB = model;
    }

    async addIncome(incomeOperation,userID) {
        try {
            const { income, balance } = await this.DB.findById(userID);
            const newBallance = balance + incomeOperation.income;
            const newIncomeBalance = income + incomeOperation.income;

            await this.DB.updateOne(
                { _id: userID },
                {
                    $set : {
                        income  : newIncomeBalance,
                        balance : newBallance,
                    },
                    $push : {
                        incomeOperations : incomeOperation,
                        allOperations    : incomeOperation,
                    },
                }
            );
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

            await this.DB.updateOne(
                { _id: userID },
                {
                    $set : {
                        accumulation : newAccumulationBalance,
                        balance      : newBalance,
                    },
                    $push : {
                        accumulationOperations : accumulationOperation,
                        allOperations          : accumulationOperation,
                    },
                }
            );

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


            await this.DB.updateOne(
                { _id: userID },
                {
                    $set : {
                        spending : newSpendingBalance,
                        balance  : newBalance,
                    },
                    $push : {
                        spendingOperations : spendingOperation,
                        allOperations      : spendingOperation,
                    },
                }
            );

        }
        catch (error) {
            throw error;
        }
    }
}


module.exports = new ServiceCashDB(User);
