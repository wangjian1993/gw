/**
 * check value type
 * @usage is('String', obj)
 * @param  {String}  type
 * @param  {*}  val
 * @return {Boolean}
 */
export function is(type, val) {
    return Object.prototype.toString.call(val) === `[object ${type}]`
}

/**
 * 判断浏览器类型（无版本）
 */
export function checkBrower() {
    let userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    let isOpera = userAgent.indexOf("Opera") > -1;
    if (isOpera) {
        return "Opera";
    } //判断是否Opera浏览器
    if (userAgent.indexOf("Firefox") > -1) {
        return "FF";
    } //判断是否Firefox浏览器
    if (userAgent.indexOf("Chrome") > -1) {
        return "Chrome";
    }
    if (userAgent.indexOf("Safari") > -1) {
        return "Safari";
    } //判断是否Safari浏览器
    if (userAgent.indexOf("Edge") > -1) {
      return "Edge";
    } //
    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
        return "IE";
    } //判断是否IE浏览器
    return "IE";
}
