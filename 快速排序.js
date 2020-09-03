let a = [3, 1, 10, 7, 2, 6, 5, 8];

function quickSort (arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var pivotIndex = Math.floor(arr.length / 2);
  var pivot = arr.splice(pivotIndex, 1)[0];
  console.log(pivot)
  var left = [];
  var right = [];

  for (var i = 0;i < arr.length;i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), ...[pivot], ...quickSort(right)];
}
let ans = quickSort(a)
// console.log(ans)