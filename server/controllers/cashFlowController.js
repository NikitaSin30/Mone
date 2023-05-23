const ServiceCashDB = require('../serviceMongo/seviceCashDB');

class CashFlowController {

    async addIncome(req, res,next) {
        const { incomeOperation, idUser } = req.body;

        try {
            await ServiceCashDB.addIncome(incomeOperation,idUser);

            res.json({ message: 'Доход добавлен' });
        }
        catch (error) {
            next(error);
        }
    }

    async addSpending(req, res,next) {
        const { idUser, spendingOperation } = req.body;

        try {
            await ServiceCashDB.addSpending(spendingOperation,idUser);

            res.json({ message: 'Расход добавлен' });
        }
        catch (error) {
            next(error);
        }
    }
    async addAccumulation(req, res,next) {
        const { accumulationOperation,idUser } = req.body;

        try {
            await ServiceCashDB.addAccumulation(accumulationOperation,idUser);
            res.json({ message: 'Накопление добавлено' });
        }
        catch (error) {
            next(error);
        }
    }
}

module.exports = new CashFlowController();
