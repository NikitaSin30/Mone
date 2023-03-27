import React from 'react'
import * as CASE from './constans/constans'
import { IFormAccumulation } from "features/add-accumulation/interfaces/interfaces"
import { accumulationService } from "features/add-accumulation/service/AccumulationService"
import { IFormCategorie } from "features/add-categories/interfaces/interfaces"
import { categoriesService } from "features/add-categories/service/categoriesService"
import { IFormIncome } from "features/add-income/interfaces/interfaces"
import { incomeService } from "features/add-income/service/incomeService"
import { IFormSpending } from "features/add-spending/interfaces/interfaces"
import { spendingService } from "features/add-spending/service/serviceSpending"
import { ITaskForm } from "features/addTasks/interfaces/interfaces"
import { todoService } from "features/addTasks/service/todoService"
import { IFormAuth } from "features/auth/interfaces/interfaces"
import { authService } from "features/auth/service/serviceAuth"



export const useService = (
    reset:()=>void,
    label:string,
    switchISModal?:() => void,
    switchIsModalErr?:() => void,
    setValueSelect? :React.Dispatch<React.SetStateAction<string>> ) => {

     return async <T>(formData:T) => {

        switch (label) {
          case CASE.LOGIN:
            try {
               await authService.login(formData as IFormAuth,switchISModal!)
            }
            catch (error) {
               new Error()
            }
            finally{
              reset()
            }
            break;

        case CASE.REGISTRATION:
            try {
               await authService.registration(formData as IFormAuth,switchISModal!)
            }
            catch (error) {
              new Error()
            }
            finally{
              reset()
            }
            break;

        case CASE.INCOME:
            try {
               await incomeService.addIncome(formData as IFormIncome,switchISModal!)
            }
            catch (error) {
              new Error()
            }
            finally{
              reset()
            }
            break;

        case CASE.ACCUMULATION:
            try {
               await accumulationService.addAccumulation(formData as IFormAccumulation,
                switchIsModalErr!,
                switchISModal!)
            }
            catch (error) {
              new Error()
            }
            finally{
              reset()
            }
            break;

         case CASE.SPENDING:
            try {
               await spendingService.addSpending(formData as IFormSpending,switchISModal!)
            }
            catch (error) {
              new Error()
            }
            finally{
              setValueSelect!('')
              reset()
            }
            break;

        case CASE.CATEGORIE:
            try {
             categoriesService.addCategorie(formData as IFormCategorie,switchIsModalErr!,switchISModal!)
            }
            catch (error) {
              new Error()
            }
            finally{
              reset()
            }
            break;

          case CASE.TASK:
            try {
             todoService.addTask(formData as ITaskForm,switchIsModalErr!)
            }
            catch (error) {
              new Error()
            }
            finally{
              reset()
            }
            break;
        }
    }
}
