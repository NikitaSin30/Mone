import { makeAutoObservable } from 'mobx';
import { TAllOperations } from './types';


class OperationsStore {
    allOperations : TAllOperations[];

    constructor() {
        makeAutoObservable(this);
    }

    addOperation(operation : TAllOperations) {
        this.allOperations.push(operation);
    }

    setAllOperationsFromDB(allOperations : TAllOperations[]) {
        this.allOperations = allOperations;
    }
}

export const operationsStore = new OperationsStore();
