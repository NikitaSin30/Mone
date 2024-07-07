import { createContext } from 'react'

export interface AppData {
  isAuth: boolean
  setIsAuth: (isAuth: boolean) => void
}
export const AppContext = createContext<AppData | undefined>(undefined)
