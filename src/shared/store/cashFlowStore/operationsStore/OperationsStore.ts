import { makeAutoObservable } from 'mobx';
import { TAllOperations } from 'types';
import { IOperationStore } from '../interfaces';




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
    public deleteOperation(id : string) {
        this.allOperations = this.allOperations.filter(operation => operation.id !== id);
    }

    public getOperation(id:string) {
        const operation = this.allOperations.find(operation => operation.id === id);

        if (!operation) throw new Error('приносим извенения. Произошла');

        return operation;
    }
}

export const operationsStore = new OperationsStore();
