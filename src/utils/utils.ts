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

export function flatten(arr: any[], key = 'key'): any[] {
  return [].concat(...arr.map((item) => (item[key] && Object.prototype.toString.call(item[key]) === '[object Array]') ? [].concat(item, ...flatten(item[key], key)) : item))
}

export function splitArray(str: string, split: string | null): any[] {
  if(!str) return []
  if (!split) return [str]
  return ([].concat(...(str.split(split).map(s => {
    if (s) {
      return [s, split]
    } else {
      return [split]
    }
  }) as any[])) as any[]).slice(0, -1)
}
