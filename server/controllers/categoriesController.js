const serviceCategoriesDB = require('../serviceMongo/serviceCategoriesDB');

class CategoriesController {

    async addCategorie(req,res,next) {
        const { categorie, userID } = req.body;

        try {
            await serviceCategoriesDB.addCategorie(userID,categorie);

            res.json({ message: 'Категория добавлена' });
        }
        catch (error) {
            next(error);
        }
    }


    async deleteCategorie(req,res,next) {
        const { categorieID , userID } = req.body;

        try {
            await serviceCategoriesDB.deleteCategorie(userID,categorieID);

            res.json({ message: 'Категория удалена' });
        }
        catch (error) {
            next(error);
        }
    }
}

module.exports = new CategoriesController();
