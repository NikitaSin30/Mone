import { UseFormRegister } from 'react-hook-form';


export interface IInput {
  register: UseFormRegister<any>;
  labelTitle: string;
  type: 'text' | 'number';
}
