import { ICategorie } from "shared/store/categoriesStore/interfaces/interfaces";



export class CategoriesApi {

   async addCategorie(categorie : ICategorie, id: string){

      try {
        const response = await fetch('http://localhost:3002/categories/addcategorie',{
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({categorie,id})
        })
         if(!response.ok){
            throw new Error('')
         }

        const result = await response.json()

        return result
      } catch (error) {
        throw new Error()
      }
    }

    deleteCategorie() {

    }

}

export const  categoriesApi = new CategoriesApi()
