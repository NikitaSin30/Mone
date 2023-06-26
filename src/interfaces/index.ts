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

export interface IOperation{
    date:string
}

export interface IAccumulationOperation extends IFormAccumulation,IOperation {
  type:EOperationType.Accumulation;
}

export interface ISpendingOperation extends IFormSpending,IOperation {
  type:EOperationType.Spending,
}

export interface IIncomeOperation extends IFormIncome,IOperation{
  type:EOperationType.Income
}

// Категории

export interface ICategorie extends IFormCategorie {
  id: string;
  spending: number;
}

// Таски

export interface ITask extends ITaskForm {
  id: string;
  isDone: boolean;
}

// Данные клиенты с бэка

export interface IDataUserFromDB {
 email : string,
 country : string,
 nickname : string,
 password : string,
 _id : string,
 balance : number,
 income : number,
 incomeOperations : IIncomeOperation[],
 spending : number,
 spendingOperations : ISpendingOperation[],
 accumulation : number,
 accumulationOperations : IAccumulationOperation[],
 allOperations: TAllOperations[]
 categories : ICategorie[],
 tasks : ITask[],
}

export interface IDataFromDB {
  user: IDataUserFromDB,
  token : string,
}
