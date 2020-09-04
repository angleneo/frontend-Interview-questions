/*
 将 192.168.10.1 输出为 291.861.01.1
*/
let ip = '192.168.10.1'

function sortIp(num) {
  let arr = num.split('.');
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].split('').reverse().join(''))
  }
  return newArr.join('.')
}

sortIp(ip)