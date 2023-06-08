import { makeAutoObservable } from 'mobx';
import { TAllOperations } from './types';
import { IOperationStore } from './interfaces';



class OperationsStore implements IOperationStore {
    public allOperations : TAllOperations[];

    constructor() {
        makeAutoObservable(this);
    }

    public addOperation(operation : TAllOperations) {
        this.allOperations.push(operation);
    }

    public setAllOperationsFromDB(allOperations : TAllOperations[]) {
        this.allOperations = allOperations;
    }
}

export const operationsStore = new OperationsStore();
