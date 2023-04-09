const User = require('../modelsMongo/User')

class CategoriesController {

     async addCategorie(req,res) {
        const {categorie, id} = req.body
        try {

           const user = await User.findOne({_id:id})
           const hasCategorie = user.categories.find(item => item.categorie === categorie.categorie)
           if(hasCategorie) {
           return res.status(400).json({message: 'Категория не уникальна'})
           }

          await User.updateOne({_id: id}, {$push: {categories : categorie}})
          res.json({message : 'Категория добавлена'})
          
        } catch (error) {
          res.status(400).json({message : 'Что-то пошло не так'})
        }
      }


     async deleteCategorie(req,res) {
        const {categories , id } = req.body
      try {
        await User.deleteOne({ _id: id }, { $push: { categories: categories } });

        res.json({message: 'Категория удалена'})
      }
      catch (error) {
        res.status(400).json({message : 'Что-то пошло не так'})
      }
     }
}

module.exports = new CategoriesController()
