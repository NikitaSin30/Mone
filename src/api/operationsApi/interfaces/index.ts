export interface IOperationApi{
    deleteOperation:(idOperation:string,idUser:string,typeOperation:string,sum:number)=>Promise<void>
}
