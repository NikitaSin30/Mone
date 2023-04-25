const User = require('../modelsMongo/User');
const serviceCategoriesDB = require('../serviceMongo/serviceCategoriesDB');

class CategoriesController {

    async addCategorie(req,res,next) {
        const { categorie, id } = req.body;

        try {
            await serviceCategoriesDB.addCategories(id,categorie);

            res.json({ message: 'Категория добавлена' });

        }
        catch (error) {
            next(error);
        }
    }


    async deleteCategorie(req,res,next) {
        const { idCategorie , id } = req.body;

        try {
            await User.updateOne({ _id: id }, { $pull: { 'categories.0': '' } });

            res.json({ message: 'Категория удалена' });
        }
        catch (error) {
            next(error);
        }
    }
}

module.exports = new CategoriesController();
