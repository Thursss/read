function debounce(fn: Function, interval = 300) {
  let timer: any = null

  return function (...arg) {
    if (timer != null) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arg)
    }, interval)
  }
}

function throttle(fn: Function, interval = 300) {
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

export { debounce, throttle }
