import { categoriesStore } from 'shared/store/categoriesStore/CategoriesStore';
import { ICategoriesService } from './interfaces/interfaces';
import { categorieApi } from 'api/categoriesApi';
import { userStore } from 'shared/store/userStore/UserStore';
import {ICategorie} from 'shared/store/categoriesStore/interfaces/interfaces'
import { mapperModificationString } from 'shared/mappers/mapperModificationString';



class CategoriesService implements ICategoriesService {

  async addCategorie(categorie: string, showModalError: () => void, switchShowModal: () => void) {
    const categorieValidated = mapperModificationString(categorie);
    const hasCategorie = this.checkStoreHasCategorie(categorieValidated);
    if (hasCategorie) return showModalError();

    try {
      const res: ICategorie = await categorieApi.addCategorie(categorieValidated, userStore.userId);
      categoriesStore.addCatigorie(res);
    } catch (error) {
      return new Error();
    } finally {
      switchShowModal();
    }
  }

  async deleteCategorie(id: string) {
    try {
    const categorie: ICategorie = categoriesStore.getCategorie(id);
      await categorieApi.deleteCategorie(categorie.key!, userStore.userId);
      categoriesStore.removeCategorie(id);
    } catch (error) {
      return new Error();
    }
  }

 async addSpendingInCategorie (id:string, spending:number) {
     const categorie:ICategorie = categoriesStore.getCategorie(id)
     const updatedCategorie:ICategorie = {...categorie, spentMoney: categorie.spentMoney + spending}
     try {
        await categorieApi.addSpendingInCategorie(updatedCategorie,userStore.userId)
        categoriesStore.updateCategories(updatedCategorie)
     } catch (error) {
      new Error('Ошибка')
     }

 }
  checkStoreHasCategorie(validatedCategorie: string) {
    return categoriesStore.categories.some(({ categorie }) => categorie === validatedCategorie);
  }
}


export const categoriesService = new CategoriesService();
