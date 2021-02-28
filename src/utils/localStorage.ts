function setLocalStorage(key: string, value: any): void {
  localStorage.setItem(key, JSON.stringify(value))
}

function getLocalStorage(key: string): any {
  const value: string | null = localStorage.getItem(key)
  if (!value) return null
  return JSON.parse(value)
 }

function removeLocalStorage(key: string): void {
  localStorage.removeItem(key)
}

function clearLocalStorage(): void {
  localStorage.clear()
}

 export { setLocalStorage, getLocalStorage, removeLocalStorage, clearLocalStorage }
