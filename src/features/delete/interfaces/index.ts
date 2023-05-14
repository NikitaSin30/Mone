export interface IDelete {
    deleteMethod:(id:string) => Promise<void>
    id:string
}
