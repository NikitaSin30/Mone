const User = require('../modelsMongo/User');
const decoratorID = require('./decorator/decoratorID');

class ServiceCashDB {
    constructor(model) {
        this.DB = model;
    }

    async addIncome(incomeOperation,idUser) {
        try {
            const { income, balance } = await this.DB.findById(idUser);
            const newBallance = balance + incomeOperation.income;
            const newSpendingBalance = income + incomeOperation.income;
            const modifiedIncomeOperation = decoratorID(incomeOperation);

            await this.DB.updateOne({ _id: idUser }, { $set: { income: newSpendingBalance } });
            await this.DB.updateOne({ _id: idUser }, { $set: { balance: newBallance } });
            await this.DB.updateOne({ _id: idUser }, { $push: { incomeOperations: modifiedIncomeOperation } });
            await this.DB.updateOne({ _id: idUser }, { $push: { allOperations: modifiedIncomeOperation } });

            return modifiedIncomeOperation;
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
            const modifiedAccumulationOperation = decoratorID(accumulationOperation);


            await this.DB.updateOne({ _id: idUser }, { $set: { accumulation: newAccumulation } });
            await this.DB.updateOne({ _id: idUser }, { $set: { balance: newBallance } });
            await this.DB.updateOne({ _id: idUser }, { $push: { accumulationOperations: modifiedAccumulationOperation } });
            await this.DB.updateOne({ _id: idUser }, { $push: { allOperations: modifiedAccumulationOperation } });

            return modifiedAccumulationOperation;
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
            const modifiedSpendingOperation = decoratorID(spendingOperation);


            await this.DB.updateOne({ _id: idUser }, { $set: { spending: newSpendingBalance } });
            await this.DB.updateOne({ _id: idUser }, { $set: { balance: newBalance } });
            await this.DB.updateOne({ _id: idUser }, { $push: { spendingOperations: modifiedSpendingOperation } });
            await this.DB.updateOne({ _id: idUser }, { $push: { allOperations: modifiedSpendingOperation } });

            return modifiedSpendingOperation;
        }
        catch (error) {
            throw error;
        }
    }
}


module.exports = new ServiceCashDB(User);
