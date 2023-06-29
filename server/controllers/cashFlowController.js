const ServiceCashDB = require('../serviceMongo/seviceCashDB');

class CashFlowController {

    async addIncome(req, res,next) {
        const { incomeOperation, userID } = req.body;

        try {
            const modifiedIncomeOperation  = await ServiceCashDB.addIncome(incomeOperation,userID);

            res.json({
                data    : modifiedIncomeOperation ,
                message : 'Доход добавлен',
                success : true,
            });
        }
        catch (error) {
            next(error);
        }
    }

    async addSpending(req, res,next) {
        const { userID, spendingOperation } = req.body;

        try {
            const modifiedSpendingOperation = await ServiceCashDB.addSpending(spendingOperation,userID);

            res.json({
                data    : modifiedSpendingOperation,
                message : 'Расход добавлен',
                success : true,
            });
        }
        catch (error) {
            next(error);
        }
    }
    async addAccumulation(req, res,next) {
        const { accumulationOperation,userID } = req.body;

        try {
            const modifiedAccumulationOperation =  await ServiceCashDB.addAccumulation(accumulationOperation,userID);

            res.json({
                data    : modifiedAccumulationOperation,
                message : 'Накопление добавлено',
                success : true,
            });
        }
        catch (error) {
            next(error);
        }
    }
}

module.exports = new CashFlowController();
