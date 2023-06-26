const ServiceCashDB = require('../serviceMongo/seviceCashDB');

class CashFlowController {

    async addIncome(req, res,next) {
        const { incomeOperation, userID } = req.body;

        try {
            await ServiceCashDB.addIncome(incomeOperation,userID);

            res.json({ message: 'Доход добавлен' });
        }
        catch (error) {
            next(error);
        }
    }

    async addSpending(req, res,next) {
        const { userID, spendingOperation } = req.body;

        try {
            await ServiceCashDB.addSpending(spendingOperation,userID);

            res.json({ message: 'Расход добавлен' });
        }
        catch (error) {
            next(error);
        }
    }
    async addAccumulation(req, res,next) {
        const { accumulationOperation,userID } = req.body;

        try {
            await ServiceCashDB.addAccumulation(accumulationOperation,userID);
            res.json({ message: 'Накопление добавлено' });
        }
        catch (error) {
            next(error);
        }
    }
}

module.exports = new CashFlowController();
