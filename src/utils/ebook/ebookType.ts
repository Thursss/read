export interface EbookStore {
  fillName: string,
  isShowMenu: boolean | null,
  menuMoreShowNumber: number | null,
  ebook: any | null,
  rendition: any | null,
  readingProgress: number,
  defaultFontSizeListIndex: number,
  defaultFontFamilyListIndex: number,
  defaultThemeListIndex: number,
}

export type EbookLocalStorageType = 'fontListIndex' | 'fontFamilyIndex' | 'theme'
