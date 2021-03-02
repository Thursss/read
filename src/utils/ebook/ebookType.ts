export interface EbookStore {
  fillName: string,
  isShowMenu: boolean | null,
  menuMoreShowNumber: number | null,
  ebook: any | null,
  rendition: any | null,
  readingProgress: number,
  defaultFontSizeListIndex: number,
}

export type EbookLocalStorageType = 'fontListIndex' | 'fontFamily' | 'theme'
