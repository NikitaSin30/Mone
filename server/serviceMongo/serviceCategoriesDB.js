const ApiError = require('../apiError/ApiError');
const User = require('../modelsMongo/User');


class serviceCategoriesDB {

    async checkHasCategorie(id,categorie) {

        try {
            const user = await User.findOne({ _id: id });
            const hasCategorie = user.categories.find(item => item.categorie === categorie.categorie);

            if (hasCategorie) {
                throw ApiError.throwBadRequestError('Категория не уникальна');
            }
        }
        catch (error) {
            throw error;
        }
    }

    async addCategories(id, categorie) {
        try {
            await this.checkHasCategorie(id,categorie);
            await User.updateOne({ _id: id }, { $push: { categories: categorie } });
        }
        catch (error) {
            throw error;
        }
    }
}
module.exports = new serviceCategoriesDB();
