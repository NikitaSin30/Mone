const User = require('../modelsMongo/User');

class CashFlowController {

  async addIncome(req, res) {
        const { incomeOperation, id } = req.body;

    try {
        const { income, balance } = await User.findById(id)
        const newBallance = balance + incomeOperation.income;
        const newIncome = income  + incomeOperation.income;

        await User.updateOne({ _id: id }, { $set: { income: newIncome } });
        await User.updateOne({ _id: id }, { $set: { balance: newBallance } });
        await User.updateOne({ _id: id }, { $push: { incomeOperations : incomeOperation } });

        res.json({ message: 'Доход добавлен' });

    } catch (error) {
        res.status(400).json({ message: 'Произошла ошибка' });
    }
  }

  async addSpending(req, res) {
    const { id, spendingOperation } = req.body;

    try {
        const { spending, balance } = await User.findById(id);
        const newBallance = balance - spendingOperation.spending;
        const newSpending = spending + spendingOperation.spending;

        await User.updateOne({ _id: id }, { $set: { spending: newSpending } });
        await User.updateOne({ _id: id }, { $set: { balance: newBallance } });
        await User.updateOne({ _id: id }, { $push: { spendingOperations: spendingOperation } });

        res.json({ message: 'Расход добавлен' });

    } catch (error) {
        res.status(400).json({ message: 'Произошла ошибка' });
    }
  }
  async addAccumulation(req, res) {
    const {accumulationOperation,id} = req.body
    try {
        const {accumulation,balance} = await User.findById(id)
        const newBallance = balance - accumulationOperation.accumulation
        const newAccumulation = accumulation + accumulationOperation.accumulation;

        await User.updateOne({ _id: id }, { $set: { accumulation: newAccumulation } });
        await User.updateOne({ _id: id }, { $set: { balance: newBallance } });
        await User.updateOne({_id: id }, {$push:{accumulationOperations: accumulationOperation}})

        res.json({message : 'Накопление добавлено'})

    } catch (error) {
        res.status(400).json({message:'Произошла ошибка'})
    }
  }
}

module.exports = new CashFlowController()



