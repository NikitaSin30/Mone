const Router = require('express');
const router = new Router();
const categoriesController = require('../controllers/categoriesController');

router.post('/addcategorie',categoriesController.addCategorie);
router.delete('/delcategorie',);

module.exports = router;
