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

            await User.updateOne({ _id: id }, { $set: { income: newSpendingBalance } });
            await User.updateOne({ _id: id }, { $set: { balance: newBallance } });
            await User.updateOne({ _id: id }, { $push: { incomeOperations: incomeOperation } });

        }
        catch (error) {
            throw new Error(error);
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

        }
        catch (error) {
            throw new Error(error);
        }
    }

    async addSpending(spendingOperation,id) {
        try {
            const { spending, balance } = await User.findById(id);
            const newBalance = balance - spendingOperation.spending;
            const newSpendingBalance = spending + spendingOperation.spending;

            await User.updateOne({ _id: id }, { $set: { spending: newSpendingBalance } });
            await User.updateOne({ _id: id }, { $set: { balance: newBalance } });
            await User.updateOne({ _id: id }, { $push: { spendingOperations: spendingOperation } });

        }
        catch (error) {
            throw new Error(error);
        }
    }
}


module.exports = new ServiceCashDB(User);
