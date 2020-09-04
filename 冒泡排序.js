/*冒泡排序*/
let arr = [1, 3, 4, 5, 2, 10, 8]

for (let i = 0;i < arr.length;i++) {
  let temp = 0;
  for (let j = i + 1;j < arr.length;j++) {
    if (arr[i] > arr[j]) {
      temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
  }
}

console.log(arr)