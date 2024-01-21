import { createContext } from 'react'

export interface AppData {
  isAuth: boolean
}
export const AppContext = createContext<AppData | undefined>(undefined)
