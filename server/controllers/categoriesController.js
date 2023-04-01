const User = require('../modelsMongo/User')

class CategoriesController {
     async addCategorie(req,res) {
        const {categories, id} = req.body
        try {
          await User.updateOne({_id: id}, {$push: {categories : categories}})
          res.status(200).json({message : 'Категория добавлена'})
        } catch (error) {
          res.status(400).json({message : 'Что-то пошло не так'})
        }
      }

     async deleteCategorie(req,res) {
      const {categories , id } = req.body
      try {
        await User.deleteOne({ _id: id }, { $push: { categories: categories } });

      }
      catch (error) {

      }
     }
}

module.exports = new CategoriesController()
