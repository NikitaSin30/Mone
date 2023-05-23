const serviceCategoriesDB = require('../serviceMongo/serviceCategoriesDB');

class CategoriesController {

    async addCategorie(req,res,next) {
        const { categorie, idUser } = req.body;

        try {
            await serviceCategoriesDB.addCategorie(idUser,categorie);

            res.json({ message: 'Категория добавлена' });
        }
        catch (error) {
            next(error);
        }
    }


    async deleteCategorie(req,res,next) {
        const { idCategorie , idUser } = req.body;

        try {
            await serviceCategoriesDB.deleteCategorie(idUser,idCategorie);

            res.json({ message: 'Категория удалена' });
        }
        catch (error) {
            next(error);
        }
    }
}

module.exports = new CategoriesController();
