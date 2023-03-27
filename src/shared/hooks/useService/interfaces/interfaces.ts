export interface IUseService {
    reset:()=>void,
    label:string,
    switchISModal?:() => void,
    switchIsModalErr?:() => void,
    setValueSelect? :React.Dispatch<React.SetStateAction<string>>
}
