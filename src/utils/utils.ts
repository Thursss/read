/**
 * 防抖函数
 * @param fn 函数
 * @param interval 间隔时间
 * @param callNow 是否立即执行一次
 */
export function debounce(fn: Function, interval = 300, callNow = false) {
  let timer: any = null
  return function (...arg) {
    callNow && !timer && fn.call(this, ...arg)
    if (timer != null) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.call(this, ...arg)
    }, interval)
  }
}

/**
 * 节流函数
 * @param fn 函数
 * @param interval 间隔时间
 */
export function throttle(fn: Function, interval = 300) {
  let timer: any = null
  return function (...arg) {
    if (timer == null) {
      timer = setTimeout(() => {
        timer = null
        fn.call(this, ...arg)
      }, interval)
    }
  }
}

/**
 * 多维数组扁平化（值为对象），不能包含循环引用
 * @param arr 多维数组
 * @param key 需要展开的key
 */
export function flatten(arr: any[], key = 'key'): any[] {
  return [].concat(...arr.map((item) => (item[key] && Object.prototype.toString.call(item[key]) === '[object Array]') ? [].concat(item, ...flatten(item[key], key)) : item))
}

/**
 * 把字符串用关键字分割为数组
 * @param str 需要分割的字符串
 * @param split 关键字
 */
export function splitArray(str: string, split: string | null): any[] {
  if (!str) return []
  if (!split) return [str]
  return ([].concat(...(str.split(split).map(s => {
    if (s) {
      return [s, split]
    } else {
      return [split]
    }
  }) as any[])) as any[]).slice(0, -1)
}

/**
 * 阻尼函数
 */


export function getEquipmentType(): string {
  let equipmentType: string
  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    equipmentType = 'phone'
  } else {
    equipmentType = 'pc'
  }

  return equipmentType ?? ''
}
