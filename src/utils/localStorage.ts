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

function setLocalStorageObject(key: string, objectKey: string, value: any) {
  let ebookInfo = getLocalStorage(key)
  if (!ebookInfo) ebookInfo = {}
  ebookInfo[objectKey] = value
  setLocalStorage(key, ebookInfo)
}

function getEbookLocalStorageObject(key: string, objectKey: string) {
  const ebookInfo = getLocalStorage(key)
  if (!ebookInfo) return null
  return ebookInfo[objectKey]
}

export { setLocalStorage, getLocalStorage, setLocalStorageObject, getEbookLocalStorageObject, removeLocalStorage, clearLocalStorage }
