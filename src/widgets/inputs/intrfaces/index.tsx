import { UseFormRegister } from 'react-hook-form';


export interface IInput {
  register: UseFormRegister<any>;
  titleRegister: string;
  caseType : string
  errMessage : string | undefined
  titleLabel?: string,
  textPlaceholder?:string
}
