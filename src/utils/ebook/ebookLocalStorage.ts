import { getLocalStorage, setLocalStorage, setLocalStorageObject, getEbookLocalStorageObject } from '@/utils/localStorage'
import { EbookLocalStorageType } from '@/utils/ebook/ebookType'

function setEbookLocalStorage (fillName: string, key: EbookLocalStorageType, value: any) {
  setLocalStorageObject(fillName, key, value)
}

function getEbookLocalStorage(fillName: string, key: EbookLocalStorageType) {
  return getEbookLocalStorageObject(fillName, key)
}
 export { setEbookLocalStorage, getEbookLocalStorage }
