
export const structureCashUser = {
    cash : {
        balance : 0,
        income  : {
            allIncome : 0,
            operation : {},
        },
        accumulation : {
            allAccumulation : 0,
            operation       : {},
        },
        spending : {
            allSpending : 0,
            operation   : {},
        },
    },
};

// interface IStructureCash {
//     balance : number,
//     income : number,
//     incomeOperations : IIncomeOperation,
//     accumulation : number,
//     accumulationOperations : IFormAccumulation[],
//     spending : number,
//     spendingOperations : ISpendingOperation[],
//     operations : any[],
// }

// export const structureCash: IStructureCash = {
//     balance                : 0,
//     income                 : 0,
//     incomeOperations       : [],
//     accumulation           : 0,
//     accumulationOperations : [],
//     spending               : 0,
//     spendingOperations     : [],
//     operations             : [],
// };

// interface ISctructureUserDB {
//     id:string,
//     info : IFormAuth,
//     cash : IStructureCash
// }

// function fabrictStructureDB(user: IFormAuth, id: string) : ISctructureUserDB {
//     const sctructureUserDB:ISctructureUserDB = {
//         id   : id,
//         info : { ...user },
//         cash : { ...structureCashUser },
//     };

//     return sctructureUserDB;
// }
