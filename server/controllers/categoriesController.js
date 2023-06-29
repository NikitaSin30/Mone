const serviceCategoriesDB = require('../serviceMongo/serviceCategoriesDB');

class CategoriesController {

    async addCategorie(req,res,next) {
        const { categorie, userID } = req.body;

        try {
            const modifiedCategorie = await serviceCategoriesDB.addCategorie(userID,categorie);

            res.json({
                data    : modifiedCategorie,
                message : 'Категория добавлена',
                success : true,
            });
        }
        catch (error) {
            next(error);
        }
    }


    async deleteCategorie(req,res,next) {
        const { categorieID , userID } = req.body;

        try {
            await serviceCategoriesDB.deleteCategorie(userID,categorieID);

            res.json({
                message : 'Категория удалена',
                success : true,
            });
        }
        catch (error) {
            next(error);
        }
    }
}

module.exports = new CategoriesController();
