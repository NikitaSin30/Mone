const ApiError = require('../apiError/ApiError');
const User = require('../modelsMongo/User');


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
            await this.checkCategorie(id,categorie);
            await User.updateOne({ _id: id }, { $push: { categories: categorie } });
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
