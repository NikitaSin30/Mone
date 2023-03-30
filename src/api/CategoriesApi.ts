import { ref, child, push, update, remove } from 'firebase/database';
import { db } from 'shared/firebase/firebase';



class CategoriesApi {
  
  async addCategorie(categorie: string,userId:string) {

    try {
      const newCategorieKey = push(child(ref(db), 'categorie')).key;
      const categorieItem = {
         categorie: categorie,
         id: categorie,
         spentMoney: 0,
         key: newCategorieKey
        }

      const updates: any = {};
      updates['users/' + userId + '/categories/' + newCategorieKey] = categorieItem;

      await update(ref(db), updates);

      return categorieItem
    } catch (error) {
      throw new Error('Что-то пошло не так');
    }
  }

  async deleteCategorie(key:string,userId: string,) {

    try {
      const updates: any = {};
      updates['users/' + userId + '/categories/' + key ] = null;
      await update(ref(db), updates);
    } catch (error) {
      throw new Error('Что-то пошло не так');
    }
  }
}

export const categorieApi = new CategoriesApi();
