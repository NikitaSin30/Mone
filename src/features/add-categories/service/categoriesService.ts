import { categoriesStore } from 'shared/store/categoriesStore/CategoriesStore';
import { ICategorie } from 'shared/store/categoriesStore/interfaces/interfaces';



class CategoriesService {

    addCategorie(categorie: string, showModalError: () => void, switchShowModal:() => void) {
        const categorieValidated = this.validateCategorie(categorie);
        const hasCategorie = this.checkStoreHasCategorie(categorieValidated);

        if (hasCategorie) return showModalError();
        const newCategorie = this.createCategorie(categorieValidated);

        categoriesStore.addCatigorie(newCategorie);
        switchShowModal();
    }
    private checkStoreHasCategorie(validatedCategorie: string): boolean {
        return categoriesStore.categories.some(({ categorie }) => categorie === validatedCategorie);
    }

    private validateCategorie(categorie: string): string {
        const categorieValidated = categorie.trim().toLowerCase();
        const newCategorie = categorieValidated[0].toUpperCase() + categorieValidated.slice(1);

        return newCategorie;
    }

    private createCategorie(uniqueCategorie: string): ICategorie {
        const newCategorie = {
            categorie  : uniqueCategorie,
            spentMoney : 0,
            id         : uniqueCategorie,
        };

        return newCategorie;
    }
}


export const categoriesService = new CategoriesService();
