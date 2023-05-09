const User = require('../modelsMongo/User');
const decoratorID = require('./decorator/decoratorID');

class ServiceCashDB {
    constructor(model) {
        this.DB = model;
    }

    async addIncome(incomeOperation,id) {
        try {
            const { income, balance } = await User.findById(id);
            const newBallance = balance + incomeOperation.income;
            const newSpendingBalance = income + incomeOperation.income;
            const modifiedIncomeOperation = decoratorID(incomeOperation);

            await this.DB.updateOne({ _id: id }, { $set: { income: newSpendingBalance } });
            await this.DB.updateOne({ _id: id }, { $set: { balance: newBallance } });
            await this.DB.updateOne({ _id: id }, { $push: { incomeOperations: modifiedIncomeOperation } });
            await this.DB.updateOne({ _id: id }, { $push: { allOperations: modifiedIncomeOperation } });

            return modifiedIncomeOperation;
        }
        catch (error) {
            throw error;
        }
    }

    async addAccumulation(accumulationOperation,id) {
        try {
            const { accumulation,balance } = await User.findById(id);
            const newBallance = balance - accumulationOperation.accumulation;
            const newAccumulation = accumulation + accumulationOperation.accumulation;
            const modifiedAccumulationOperation = decoratorID(accumulationOperation);


            await this.DB.updateOne({ _id: id }, { $set: { accumulation: newAccumulation } });
            await this.DB.updateOne({ _id: id }, { $set: { balance: newBallance } });
            await this.DB.updateOne({ _id: id }, { $push: { accumulationOperations: modifiedAccumulationOperation } });
            await this.DB.updateOne({ _id: id }, { $push: { allOperations: modifiedAccumulationOperation } });

            return modifiedAccumulationOperation;
        }
        catch (error) {
            throw error;
        }
    }

    async addSpending(spendingOperation,id) {
        try {
            const { spending, balance } = await User.findById(id);
            const newBalance = balance - spendingOperation.spending;
            const newSpendingBalance = spending + spendingOperation.spending;
            const modifiedSpendingOperation = decoratorID(spendingOperation);


            await this.DB.updateOne({ _id: id }, { $set: { spending: newSpendingBalance } });
            await this.DB.updateOne({ _id: id }, { $set: { balance: newBalance } });
            await this.DB.updateOne({ _id: id }, { $push: { spendingOperations: modifiedSpendingOperation } });
            await this.DB.updateOne({ _id: id }, { $push: { allOperations: modifiedSpendingOperation } });

            return modifiedSpendingOperation;
        }
        catch (error) {
            throw error;
        }
    }
}


module.exports = new ServiceCashDB(User);
