export interface EbookStore {
  fillName: string,
  isShowMenu: boolean | null,
  menuMoreShowNumber: number | null,
  ebook: any | null,
  rendition: any | null,
  readingProgress: number,
  readingTime: number,
  fontSizeListIndex: number,
  fontFamilyListIndex: number,
  themeListIndex: number,
  progressAbled: boolean | null,
  chapter: number
}

export type EbookLocalStorageType = 'fontSizeListIndex' | 'fontFamilyListIndex' | 'themeListIndex' | 'readingProgress' | 'readingTime'
