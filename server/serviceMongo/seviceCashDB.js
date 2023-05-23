const User = require('../modelsMongo/User');


class ServiceCashDB {
    constructor(model) {
        this.DB = model;
    }

    async addIncome(incomeOperation,idUser) {
        try {
            const { income, balance } = await User.findById(idUser);
            const newBallance = balance + incomeOperation.income;
            const newSpendingBalance = income + incomeOperation.income;

            await User.updateOne({ _id: idUser }, { $set: { income: newSpendingBalance } });
            await User.updateOne({ _id: idUser }, { $set: { balance: newBallance } });
            await User.updateOne({ _id: idUser }, { $push: { incomeOperations: incomeOperation } });

        }
        catch (error) {
            throw error;
        }
    }

    async addAccumulation(accumulationOperation,idUser) {
        try {
            const { accumulation,balance } = await User.findById(idUser);
            const newBallance = balance - accumulationOperation.accumulation;
            const newAccumulation = accumulation + accumulationOperation.accumulation;

            await this.DB.updateOne({ _id: idUser }, { $set: { accumulation: newAccumulation } });
            await this.DB.updateOne({ _id: idUser }, { $set: { balance: newBallance } });
            await this.DB.updateOne({ _id: idUser }, { $push: { accumulationOperations: accumulationOperation } });

        }
        catch (error) {
            throw error;
        }
    }

    async addSpending(spendingOperation,idUser) {
        try {
            const { spending, balance } = await User.findById(idUser);
            const newBalance = balance - spendingOperation.spending;
            const newSpendingBalance = spending + spendingOperation.spending;

            await User.updateOne({ _id: idUser }, { $set: { spending: newSpendingBalance } });
            await User.updateOne({ _id: idUser }, { $set: { balance: newBalance } });
            await User.updateOne({ _id: idUser }, { $push: { spendingOperations: spendingOperation } });

        }
        catch (error) {
            throw error;
        }
    }
}


module.exports = new ServiceCashDB(User);
