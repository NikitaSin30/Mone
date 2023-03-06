
import { IFormAccumulation } from 'features/add-accumulation/interfaces/interfaces';
import { IFormCategorie } from 'features/add-income/interfaces/interfaces';
import { IFormSpending } from 'features/add-spending/interfaces/interfaces';
import { UseFormRegister } from 'react-hook-form';

type IRegister = IFormAccumulation | IFormCategorie | IFormSpending


export interface IInput {
  register: UseFormRegister<any>;
  labelTitle: string;
  type:'text' | 'number'
}
