const FONT_SIZE_LIST = [
  { fontSize: 14 },
  { fontSize: 16 },
  { fontSize: 18 },
  { fontSize: 20 },
  { fontSize: 22 },
  { fontSize: 24 },
  { fontSize: 26 }
]
const FONT_FAMILY_LIST = [
  {
    alias: '默认',
    fontFamily: '微软雅黑'
  },
  {
    alias: '黑体',
    fontFamily: '黑体'
  },
  {
    alias: '凌云行书',
    fontFamily: '凌云行书',
    url: 'font/FZSJ-LINGYXS.css'
  },
]
const THEME_LIST = [
  {
    alias: '默认',
    body: {
      backgroundColor: '#ccc',
      textColor: '#ccc'
    }
  },
  {
    alias: '护眼',
    body: {
      'background-color': '#cfc',
      'color': '#999'
    }
  },
]

export { FONT_SIZE_LIST, FONT_FAMILY_LIST, THEME_LIST }
