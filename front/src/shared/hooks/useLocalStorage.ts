export const useLocalStorage = () => {
  const setItemLocalStorage = (key: string, data: string) => {
    window.localStorage.setItem(key, data)
  }

  const getItemLocalStorage = (key: string) => {
    window.localStorage.getItem(key)
  }

  const removeItemLocalStorage = (key: string) => {
    window.localStorage.removeItem(key)
  }

  return {
    setItemLocalStorage,
    getItemLocalStorage,
    removeItemLocalStorage,
  }
}
