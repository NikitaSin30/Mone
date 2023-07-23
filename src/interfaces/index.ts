import { EOperationType } from 'enum';
import { TAllOperations } from 'types';

// Данные приходящие с форм


export interface IFormAuth {
  email: string;
  country?: string;
  nickname?: string;
  password: string;
  _id: string,
}

export interface IFormAccumulation {
  accumulation: number;
}

export interface IFormCategorie {
  categorie: string;
}

export interface IFormIncome {
  income: number;
  sphere: string;
}

export interface IFormSpending {
  categorie: string;
  spending: number;
}

export interface ITaskForm {
    task: string
}

// Операция связанные с деньгами


export interface IAccumulationOperation extends IFormAccumulation {
  type:EOperationType.Accumulation;
}

export interface ISpendingOperation extends IFormSpending {
  type:EOperationType.Spending,
}

export interface IIncomeOperation extends IFormIncome{
  type:EOperationType.Income
}



// Категории

export interface ICategorie extends IFormCategorie {
  spending: number;
}

// Таски

export interface ITask extends ITaskForm {
  isDone: boolean;
}

// Ответ с сервера

export interface IBaseResponse {
  message: string;
  success:boolean;
}

export interface IDataResponse<T> extends IBaseResponse {
 data : T
}


export type TResponseOperation<T> = T & {
  id: string;
  date: string;
};

export interface IResponseAccumulationOperation extends IAccumulationOperation {
  id: string;
  date: string;
}

export interface IResponseIncomeOperation extends IIncomeOperation {
  id: string;
  date: string;
}

export interface IResponseSpendingOperation extends ISpendingOperation {
  id: string;
  date: string;
}

export interface IResponseCategorie extends ICategorie {
  id:string,
  date:string,
}

export interface IResponseTask extends ITask{
  id:string,
  date:string
}

export interface IDataUserFromDB {
 email : string,
 country : string,
 nickname : string,
 password : string,
 _id : string,
 balance : number,
 income : number,
 incomeOperations : IResponseIncomeOperation[],
 spending : number,
 spendingOperations : IResponseSpendingOperation[],
 accumulation : number,
 accumulationOperations : IResponseAccumulationOperation[],
 allOperations: TAllOperations[]
 categories : IResponseCategorie[],
 tasks : IResponseTask[],
}

export interface IDataFromDB {
  user: IDataUserFromDB,
  token : string,
}
