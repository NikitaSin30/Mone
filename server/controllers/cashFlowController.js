const ServiceCashDB = require('../serviceMongo/seviceCashDB');

class CashFlowController {

    async addIncome(req, res,next) {
        const { incomeOperation, idUser } = req.body;

        try {
            const modifiedIncomeOperation  = await ServiceCashDB.addIncome(incomeOperation,idUser);

            res.json({
                modifiedIncomeOperation ,
                message : 'Доход добавлен',
            });
        }
        catch (error) {
            next(error);
        }
    }

    async addSpending(req, res,next) {
        const { idUser, spendingOperation } = req.body;

        try {
            const modifiedSpendingOperation = await ServiceCashDB.addSpending(spendingOperation,idUser);

            res.json({
                modifiedSpendingOperation,
                message : 'Расход добавлен',
            });
        }
        catch (error) {
            next(error);
        }
    }
    async addAccumulation(req, res,next) {
        const { accumulationOperation,idUser } = req.body;

        try {
            const modifiedAccumulationOperation =  await ServiceCashDB.addAccumulation(accumulationOperation,idUser);

            res.json({
                modifiedAccumulationOperation,
                message : 'Накопление добавлено',
            });
        }
        catch (error) {
            next(error);
        }
    }
}

module.exports = new CashFlowController();
