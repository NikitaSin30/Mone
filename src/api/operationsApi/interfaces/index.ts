export interface IOperationApi{
    deleteOperation:(idOperation:string,idUser:string)=>Promise<void>
}
