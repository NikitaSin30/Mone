import { IAccumulationOperation, IIncomeOperation, ISpendingOperation } from 'shared/store/cashFlowStore/interfaces/interfaces';
import { IFormSpending } from 'features/add-spending/interfaces/interfaces';
import { ref, child, push, update } from 'firebase/database';
import { db } from 'shared/firebase/firebase';
import { accumulationStore } from 'shared/store/cashFlowStore/AccumulationStore';
import { balanceStore } from 'shared/store/cashFlowStore/BalanceStore';
import { incomeStore } from 'shared/store/cashFlowStore/IncomeStore';
import { spendingStore } from 'shared/store/cashFlowStore/SpendingStore';
import { ICashFlowApi } from './interfaces/interfaces';
import { json } from 'stream/consumers';
import { METHODS } from 'http';

// type UpdateFunction = (data: Partial<Record<string, any>>, onComplete?: (error: Error | null) => void) => Promise<void>;



class CashFlowApi {
  async addIncome(incomeOperation: IIncomeOperation, id: string) {
    try {
      const response = await fetch('http://localhost:3002/cash/addincome', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ incomeOperation, id }),
      });
      if(!response.ok){
        throw new Error("");
      }

      const result = response.json();

      return result;
    } catch (error) {
      throw new Error('Что-то пошло не так');
    }
  }

  async addAccumulation(id: string, accumulationOperation: IAccumulationOperation) {
    console.log(accumulationOperation);

    try {
     const response = await fetch('http://localhost:3002/cash/addaccumulation', {
       method: 'POST',
       headers: {
         'Content-type': 'application/json',
       },
       body: JSON.stringify({ accumulationOperation, id }),
     });
     if(!response.ok){
        throw new Error('');
     }
     const result = response.json()
     return result
    } catch (error) {
      throw new Error('Что-то пошло не так');
    }
  }

  async addSpending(id: string, spendingOperation: ISpendingOperation) {

    try {
      const response = await fetch('http://localhost:3002/cash/addspending', {
        method: 'POST',
        headers:{
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({ spendingOperation, id }),
      });

       if (!response.ok) {
               throw new Error('Что-то пошло не так');
       }
       const result = response.json()
       return result

    } catch (error) {
      throw new Error('Что-то пошло не так');
    }
  }
}


export const cashFlowApi = new CashFlowApi();
