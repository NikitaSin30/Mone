export interface IOperationApi{
    deleteOperation:(idOperation:string,idUser:string,typeOperation:string)=>Promise<void>
}
