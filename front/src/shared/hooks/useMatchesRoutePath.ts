import { useLocation } from 'react-router-dom'

export const useMatchesRoutePath = (path: string): boolean => {
  const location = useLocation()
  return location.pathname === path
}
