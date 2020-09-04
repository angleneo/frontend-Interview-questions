/*
    输入两个数组输出非公共数字
    [1,2,3],[2,3,4] => [1,4]
*/
function diffArray (arr1, arr2) {
  let newArr = [];
  // 这是一个党异伐同的过程
  function diff (first, second) {
    for (let i = 0;i < first.length;i++) {
      if (second.indexOf(first[i]) == -1) {
        newArr.push(first[i])
      }
    }
  }
  diff(arr1, arr2)
  diff(arr2, arr1)
  console.log(newArr)
  return newArr;
}

diffArray([1, 2, 3], [2, 3, 4]);