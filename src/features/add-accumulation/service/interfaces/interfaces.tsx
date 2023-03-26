
export interface IAccumulationService {
    addAccumulation:(newAccumulation: number, showModalError: () => void, switchShowModal: () => void) => Promise<any>
}