import React from 'react';
import * as CASE from './constans';
import { IFormAccumulation } from 'features/add-accumulation/interfaces';
import { accumulationService } from 'features/add-accumulation/service/AccumulationService';
import { IFormCategorie } from 'features/add-categories/interfaces';
import { categoriesService } from 'features/add-categories/service/categoriesService';
import { IFormIncome } from 'features/add-income/interfaces';
import { incomeService } from 'features/add-income/service/incomeService';
import { IFormSpending } from 'features/add-spending/interfaces';
import { spendingService } from 'features/add-spending/service/serviceSpending';
import { ITaskForm } from 'features/addTasks/interfaces';
import { todoService } from 'features/addTasks/service/todoService';
import { IFormAuth } from 'features/auth/interfaces';
import { authService } from 'features/auth/service/serviceAuth';
import { Navigate } from 'react-router';





export const useService = (
    reset:()=>void,
    caseLabel:string,
    switchISModal?:() => void,
    switchIsModalErr?:() => void,
    // eslint-disable-next-line max-params
    setValueSelect? :React.Dispatch<React.SetStateAction<string>> ) => {


    return async <T>(formData:T) => {
        try {
            switch (caseLabel) {
                case CASE.CASE_USESERVICE_SPENDING:
                    await spendingService.addSpending(formData as IFormSpending,switchISModal!);
                    break;
                case CASE.CASE_USESERVICE_CATEGORIE:
                    categoriesService.addCategorie(formData as IFormCategorie,switchIsModalErr!,switchISModal!);
                    break;
            }
        }
        catch (error) {
            console.log('Ошибка');
        }
        finally {
            reset();
            if (setValueSelect) {
                setValueSelect('');
            }

        }

    };


};
