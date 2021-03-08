export function debounce(fn: Function, interval = 300) {
  let timer: any = null

  return function (...arg) {
    if (timer != null) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arg)
    }, interval)
  }
}

export function throttle(fn: Function, interval = 300) {
  let timer: any = null
  return function (...arg) {
    if (timer == null) {
      timer = setTimeout(() => {
        timer = null
        fn.apply(this, arg)
      }, interval)
    }
  }
}

export function flatten(arr: any[], key = 'key') {
  return [].concat(...arr.map((item) => (item[key] && Object.prototype.toString.call(item[key]) === '[object Array]') ? [].concat(item, ...flatten(item[key], key)) : item))
}
