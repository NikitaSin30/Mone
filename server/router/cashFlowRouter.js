const Router = require('express')
const router = new Router()
const cashController = require('../controllers/cashFlowController')


router.post('/addincome', cashController.addIncome)
router.post('/addspending', cashController.addSpending);
router.post('/addaccumulation', cashController.addAccumulation);

module.exports = router
