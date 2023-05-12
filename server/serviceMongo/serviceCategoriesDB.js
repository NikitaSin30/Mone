const ApiError = require('../apiError/ApiError');
const User = require('../modelsMongo/User');
const decoratorID = require('./decorator/decoratorID');

class serviceCategoriesDB {

    async checkCategorie(id,categorie) {

        try {
            const user = await User.findOne({ _id: id });
            const hasCategorie = user.categories.find(item => item.categorie === categorie.categorie);

            if (hasCategorie) {
                throw ApiError.createBadRequestError('Категория не уникальна');
            }
        }
        catch (error) {
            throw error;
        }
    }

    async addCategorie(id, categorie) {
        try {
            const categorieWithID = decoratorID(categorie);

            await this.checkCategorie(id,categorie);
            await User.updateOne({ _id: id }, { $push: { categories: categorieWithID } });

            return categorieWithID;
        }
        catch (error) {
            throw error;
        }
    }

    async deleteCategorie(id, idCategorie) {
        try {
            await User.updateOne({ _id: id }, { $pull: { categories: { id: idCategorie } } });
        }
        catch (error) {
            throw error;
        }
    }
}
module.exports = new serviceCategoriesDB();
