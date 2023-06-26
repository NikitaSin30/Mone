const ApiError = require('../apiError/ApiError');
const User = require('../modelsMongo/User');


class serviceCategoriesDB {

    async checkCategorie(userID,categorie) {

        try {
            const user = await User.findOne({ _id: userID });
            const hasCategorie = user.categories.find(item => item.categorie === categorie.categorie);

            if (hasCategorie) {
                throw ApiError.createBadRequestError('Категория не уникальна');
            }
        }
        catch (error) {
            throw error;
        }
    }

    async addCategorie(userID, categorie) {
        try {
            await this.checkCategorie(userID,categorie);
            await User.updateOne({ _id: userID }, { $push: { categories: categorie } });
        }
        catch (error) {
            throw error;
        }
    }

    async deleteCategorie(userID, categorieID) {
        try {
            await User.updateOne({ _id: userID }, { $pull: { categories: { id: categorieID } } });
        }
        catch (error) {
            throw error;
        }
    }
}
module.exports = new serviceCategoriesDB();
