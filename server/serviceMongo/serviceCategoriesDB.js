const ApiError = require('../apiError/ApiError');
const User = require('../modelsMongo/User');


class serviceCategoriesDB {

    async checkCategorie(idUser,categorie) {

        try {
            const user = await User.findOne({ _id: idUser });
            const hasCategorie = user.categories.find(item => item.categorie === categorie.categorie);

            if (hasCategorie) {
                throw ApiError.createBadRequestError('Категория не уникальна');
            }
        }
        catch (error) {
            throw error;
        }
    }

    async addCategorie(idUser, categorie) {
        try {
            await this.checkCategorie(idUser,categorie);
            await User.updateOne({ _id: idUser }, { $push: { categories: categorie } });
        }
        catch (error) {
            throw error;
        }
    }

    async deleteCategorie(idUser, idCategorie) {
        try {
            await User.updateOne({ _id: idUser }, { $pull: { categories: { id: idCategorie } } });
        }
        catch (error) {
            throw error;
        }
    }
}
module.exports = new serviceCategoriesDB();
