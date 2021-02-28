import { getLocalStorage, setLocalStorage } from '@/utils/localStorage'

function setEbookLocalStorage (fillName: string, key: string, value: any) {
  let ebookInfo = getLocalStorage(fillName)
  if (!ebookInfo) ebookInfo = {}
  ebookInfo[key] = value
  setLocalStorage(fillName ,ebookInfo)
}

function getEbookLocalStorage(fillName: string, key: string): any {
  const ebookInfo = getLocalStorage(fillName)
  if (!ebookInfo) return null
  return ebookInfo[key]
}
 export { setEbookLocalStorage, getEbookLocalStorage }
