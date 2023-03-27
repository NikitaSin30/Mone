import { IFormAccumulation } from 'features/add-accumulation/interfaces/interfaces';

export interface IAccumulationService {
    addAccumulation:(newAccumulation: IFormAccumulation, showModalError: () => void, switchShowModal: () => void) => Promise<any>
}
