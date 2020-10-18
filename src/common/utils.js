export function debounce(func, delay=50) {
  //创建定时器
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
    // console.log(timer);
  }
}
//正则表达式:字符串匹配利器(难，规则复杂繁多)
export function formatDate(date, fmt) {
  //获取年份
  //使用正则查询传入的y有几个
  //y+ =>表示1个y或者多个y
  //y* =>0个或者多个y
  //y？=>0个或者1个y
  //2019
  //yy-19
  //yyyy-2019
  //y-9
  //yyy-019
  //yyyy-MM-dd
  //substr(4 - RegExp.$1.length)) =4-传递的y个数 例如传递yyyy最后截取的是0个
  //fmt=fmt.replace('yyyy',(2019).substr(0))
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  //2.获取月、日、时、分、秒
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's': date.getSeconds()
  }
  //补0操作
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt;
}
//防止出现04:04:04变成4:4:4
function padLeftZero(str) {
  //当传入的是04
  //0004截取2=>04
  return ('00' + str).substr(str.length);
}
