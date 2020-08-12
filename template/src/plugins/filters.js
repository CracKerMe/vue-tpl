/**
 * Created by 孙平 on 2020/08/06.
 * QQ: 1160948478
 * 使用方法：
 * 1、最标准的vue的过滤器的使用方法。
 * 2、示例：item.timestamp | f_moment
 * 描述 end
 */
function padLeft10 (str) {
  return String(str).padStart(2, '0')
}
export default {
  install: function (Vue, options) {
    /**
   * 将时间戳(秒或者 毫秒都可以)格式化
   * @param {number} format format方式
   * 可选数字 0 1 2 3 4
   * 0 => 08-06
   * 1 => 2020-08-06
   * 2 => 2020-08-06 00:46
   * 3 => 2020-08-06 00:46:37
   * 4 => 2020年08月06日 00:46:37
   * @param {*} divided 分隔符号
   * @returns @String
   */
    Vue.filter('f_moment', function (timestamp, format = 0, divided = '-') {
      const tempDate = new Date()
      let result = ''
      if (String(timestamp).length === 10) {
        timestamp = timestamp * 1000
      }
      tempDate.setTime(timestamp)
      var year = tempDate.getFullYear()
      var month = padLeft10(tempDate.getMonth() + 1)
      var day = padLeft10(tempDate.getDate())
      var hour = padLeft10(tempDate.getHours())
      var minute = padLeft10(tempDate.getMinutes())
      var second = padLeft10(tempDate.getSeconds())
      switch (format) {
        case 0:
          result = month + divided + day
          break
        case 1:
          result = year + divided + month + divided + day
          break
        case 2:
          result = year + divided + month + divided + day + ' ' + hour + ':' + minute
          break
        case 3:
          result = year + divided + month + divided + day + ' ' + hour + ':' + minute + ':' + second
          break
        case 4:
          if (divided !== '-') {
            result = year + divided + month + divided + day + ' ' + hour + ':' + minute + ':' + second
          } else {
            result = year + '年' + month + '月' + day + '日 ' + hour + ':' + minute + ':' + second
          }
          break
      }
      return result
    })

    Vue.filter('f_sec2len', function (sec) {
      let result = ''
      if (sec > 0) {
        const min = Math.floor(sec / 60) % 60
        const second = Math.floor(sec) % 60
        const hour = (sec / 3600 >= 1) ? Math.floor(sec / 3600) : ''
        if (hour) {
          result = padLeft10(hour) + ':'
        }
        result += padLeft10(min) + ':' + padLeft10(second)
      }
      return result
    })
  }
}
