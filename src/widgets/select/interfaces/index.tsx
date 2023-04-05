import { ICategorie } from 'shared/store/categoriesStore/interfaces';
import { UseFormRegister } from 'react-hook-form';



export interface ISelect {
  isActiveSelect: boolean;
  getValueSelect: (categorie: string) => void;
  categories: Array<ICategorie>;
  toggleActiveSelect: () => void;
  selected: string;
  titleRegister: string;
  register: UseFormRegister<any>;
}