import { UseFormRegister } from 'react-hook-form';



export interface ISelect {
  isActiveSelect: boolean;
  getValueSelect: (categorie: string) => void;
  toggleActiveSelect: () => void;
  selected: string;
  titleRegister: string;
  register: UseFormRegister<any>;
  caseType: string;
}
