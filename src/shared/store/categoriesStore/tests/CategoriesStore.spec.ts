import { CategoriesStore } from "../CategoriesStore"
import { ICategoriesStore } from "../interfaces"
import { ICategorie } from "../interfaces"



describe('CategoriesStore',() => {

  const categorieMock : ICategorie= {
  categorie: 'Медицина',
  id: 'Медицина' ,
  spending: 0,
}
 const categorieMock2 : ICategorie= {
  categorie: 'Спорт',
  id: 'Спорт' ,
  spending: 0,
}

    let categoriesStore : CategoriesStore | null;

    beforeEach(() => {
        categoriesStore = new CategoriesStore();
    });

    afterEach(() => {
        categoriesStore = null;
        jest.clearAllMocks();
    });


   describe('addCategorie', () => {
    it('should add new Catagorie in the end ',() => {

        categoriesStore?.addCatigorie(categorieMock)
        expect(categoriesStore?.categories).toContainEqual(categorieMock);
        categoriesStore?.addCatigorie(categorieMock2)
        expect(categoriesStore?.categories[1]).toEqual(categorieMock2)
        expect(categoriesStore?.categories).toHaveLength(2)

    })
   })

   describe('deleteCategorie',() => {
    it('should delete categorie from store',() => {
        categoriesStore?.addCatigorie(categorieMock)
        categoriesStore?.addCatigorie(categorieMock2)
        expect(categoriesStore?.categories).toHaveLength(2)

        categoriesStore?.deleteCategorie('Медицина')

        expect(categoriesStore?.categories).not.toContainEqual(categorieMock)
        expect(categoriesStore?.categories).toHaveLength(1)
    })
   })

   describe('getCategorie',() => {
    it('should return categorie',() => {
        categoriesStore?.addCatigorie(categorieMock)
        categoriesStore?.addCatigorie(categorieMock2)

        expect(categoriesStore?.getCategorie('Медицина')).toEqual(categorieMock)
    })
    it('should not mutate  the array categories',() => {
        categoriesStore?.addCatigorie(categorieMock)
        categoriesStore?.addCatigorie(categorieMock2)

        expect(categoriesStore?.categories).toHaveLength(2)
        categoriesStore?.getCategorie('Медицина')

        expect(categoriesStore?.categories).toHaveLength(2)
    })
    it('should trow Error if categories do not has the object with ID',()=>{
        categoriesStore?.addCatigorie(categorieMock)
        categoriesStore?.addCatigorie(categorieMock2)

       expect(() => categoriesStore?.getCategorie('Кафе')).toThrowError()

    })
   })

   describe('setCategoriesFromDB',() => {
    it('should set an array conteining objects from Database',() => {
    categoriesStore?.setCategoriesFromDB([categorieMock,categorieMock2])
    expect(categoriesStore?.categories).toHaveLength(2)
    expect(categoriesStore?.categories).toContainEqual(categorieMock)
    })
   })
})
