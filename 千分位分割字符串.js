/* 
输入任意字符串 123123123
输出 123,123,123
*/
let str = "123123123"

function splitStr(num) {
  var num = (num || 0).toString(),
    result = "";
  while (num.length > 3) {
    result = "," + num.slice(-3) + result;
    num = num.slice(0, num.length - 3);
  }
  if (num) {
    result = num + result;
  }
  return result;
}


console.log(splitStr(str))