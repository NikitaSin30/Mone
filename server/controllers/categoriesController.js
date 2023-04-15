const User = require('../modelsMongo/User');
const serviceCategoriesDB = require('../serviceMongo/serviceCategoriesDB');

class CategoriesController {

    async addCategorie(req,res,next) {
        const { categorie, id } = req.body;

        try {

            await serviceCategoriesDB.checkHasCategorie(id,categorie);

            await serviceCategoriesDB.updateCategories(id,categorie);
           
            res.json({ message: 'Категория добавлена' });

        }
        catch (error) {
            next(error);
        }
    }


    async deleteCategorie(req,res,next) {
        const { categories , id } = req.body;

        try {
            await User.deleteOne({ _id: id }, { $push: { categories: categories } });

            res.json({ message: 'Категория удалена' });
        }
        catch (error) {
            next(error);
        }
    }
}

module.exports = new CategoriesController();
