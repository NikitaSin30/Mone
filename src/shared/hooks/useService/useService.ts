import React from 'react';
import * as CASE from './constans';
import { IFormCategorie } from 'features/add-categories/interfaces';
import { IFormSpending } from 'features/add-spending/interfaces';
import { spendingService } from 'features/add-spending/service/serviceSpending';
import { ioContainer } from 'api/IoC/ioc';



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
                    ioContainer.categoriesService.addCategorie(formData as IFormCategorie,switchIsModalErr!,switchISModal!);
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
