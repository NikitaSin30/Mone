const ServiceCashDB = require('../serviceMongo/seviceCashDB');

class CashFlowController {

    async addIncome(req, res,next) {
        const { incomeOperation, id } = req.body;

        try {
            await ServiceCashDB.addIncome(incomeOperation,id);

            res.json({ message: 'Доход добавлен' });
        }
        catch (error) {
            next(error);
        }
    }

    async addSpending(req, res,next) {
        const { id, spendingOperation } = req.body;

        try {
            await ServiceCashDB.addSpending(spendingOperation,id);
            res.status(400).json({ message: 'пиздец' });

            res.json({ message: 'Расход добавлен' });
        }
        catch (error) {
            next(error);
        }
    }
    async addAccumulation(req, res,next) {
        const { accumulationOperation,id } = req.body;

        try {
            await ServiceCashDB.addAccumulation(accumulationOperation,id);
            res.json({ message: 'Накопление добавлено' });
        }
        catch (error) {
            next(error);
        }
    }
}

module.exports = new CashFlowController();
