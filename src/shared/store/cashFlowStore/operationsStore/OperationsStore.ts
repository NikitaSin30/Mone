import { makeAutoObservable } from 'mobx';
import { TAllOperations } from './types';
import { IOperationsStore } from './interfaces';

class OperationsStore implements IOperationsStore {
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
    deleteOperation({ id }:TAllOperations) {
        this.allOperations = this.allOperations.filter(operation => operation.id !== id);
    }
}

export const operationsStore = new OperationsStore();
