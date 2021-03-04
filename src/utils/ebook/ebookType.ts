export interface EbookStore {
  fillName: string,
  isShowMenu: boolean | null,
  menuMoreShowNumber: number | null,
  ebook: any | null,
  rendition: any | null,
  readingProgress: number,
  readingTime: number,
  defaultFontSizeListIndex: number,
  defaultFontFamilyListIndex: number,
  defaultThemeListIndex: number,
  progressAbled: boolean | null,
  chapter: number
}

export type EbookLocalStorageType = 'fontSizeIndex' | 'fontFamilyIndex' | 'theme' | 'readingProgress' | 'readingTime'
