/*
 讲多维数组展开成一维数组
 [1,[2,[3,4]],5] => [1,2,3,4,5]
*/
let arr = [1, 2, [3, 4], 5, [6, [7, 8]], 9, [10, [11, [12, 13, [14]]]]]
let newArr = []
let count = 0
function arrayFlat (arr) {
  for (let i = 0;i < arr.length;i++) {
    if (Array.isArray(arr[i])) {
      count++
      arrayFlat(arr[i])
    } else {
      newArr.push(arr[i])
    }
  }
  return newArr
}
console.log(arrayFlat(arr))
