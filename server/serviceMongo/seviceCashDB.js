const User = require('../modelsMongo/User');


class ServiceCashDB {
    constructor(model) {
        this.DB = model;
    }

    async addIncome(incomeOperation,id) {
        try {
            const { income, balance } = await User.findById(id);
            const newBallance = balance + incomeOperation.income;
            const newSpendingBalance = income + incomeOperation.income;

            await this.DB.updateOne({ _id: id }, { $set: { income: newSpendingBalance } });
            await this.DB.updateOne({ _id: id }, { $set: { balance: newBallance } });
            await this.DB.updateOne({ _id: id }, { $push: { incomeOperations: incomeOperation } });
            await this.DB.updateOne({ _id: id }, { $push: { allOperations: incomeOperation } });
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

            await this.DB.updateOne({ _id: id }, { $set: { accumulation: newAccumulation } });
            await this.DB.updateOne({ _id: id }, { $set: { balance: newBallance } });
            await this.DB.updateOne({ _id: id }, { $push: { accumulationOperations: accumulationOperation } });
            await this.DB.updateOne({ _id: id }, { $push: { allOperations: accumulationOperation } });

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

            await this.DB.updateOne({ _id: id }, { $set: { spending: newSpendingBalance } });
            await this.DB.updateOne({ _id: id }, { $set: { balance: newBalance } });
            await this.DB.updateOne({ _id: id }, { $push: { spendingOperations: spendingOperation } });
            await this.DB.updateOne({ _id: id }, { $push: { allOperations: spendingOperation } });

        }
        catch (error) {
            throw error;
        }
    }
}


module.exports = new ServiceCashDB(User);
