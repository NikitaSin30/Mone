const serviceCategoriesDB = require('../serviceMongo/serviceCategoriesDB');

class CategoriesController {

    async addCategorie(req,res,next) {
        const { categorie, id } = req.body;

        try {
            const modifiedCategorie = await serviceCategoriesDB.addCategorie(id,categorie);

            res.json({
                modifiedCategorie,
                message : 'Категория добавлена', 
            });
        }
        catch (error) {
            next(error);
        }
    }


    async deleteCategorie(req,res,next) {
        const { idCategorie , id } = req.body;

        try {
            await serviceCategoriesDB.deleteCategorie(id,idCategorie);

            res.json({ message: 'Категория удалена' });
        }
        catch (error) {
            next(error);
        }
    }
}

module.exports = new CategoriesController();
