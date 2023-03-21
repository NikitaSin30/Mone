import { categoriesStore } from 'shared/store/categoriesStore/CategoriesStore';
import { ICategorie } from 'shared/store/categoriesStore/interfaces/interfaces';



class ServiceCategories {

    midlewareAddCategorie(categorie: string, showModalError: () => void, switchShowModal:() => void) {
        const validated = this.validateCategorie(categorie);
        const isHasCategorie = this.checkStoreHasCategorie(validated);

        if (isHasCategorie) return showModalError();
        const newCategorie = this.createCategorie(validated);

        categoriesStore.addCatigorie(newCategorie);
        switchShowModal();
    }
    private checkStoreHasCategorie(validatedCategorie: string): boolean {
        const isHasCategorie = categoriesStore.categories.some(({ categorie }) => categorie === validatedCategorie);

        return isHasCategorie;
    }
    
    private validateCategorie(categorie: string): string {
        const validatedCategorie = categorie.trim().toLowerCase();
        const newCategorie = validatedCategorie[0].toUpperCase() + validatedCategorie.slice(1);

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


export const serviceCategories = new ServiceCategories();
