function sumAll (arr) {
  if (arr[0] === arr[1]) {
    return arr[0]
  }
  let num = 0
  if (arr[0] < arr[1]) {
    for (let i = arr[0];i <= arr[1] ;i++) {
      num = num + i
    }
    console.log(num)
  } else {
    for (let i = arr[1];i <= arr[0];i++) {
      num = num + i
    }
    console.log(2, num)
  }
  return num
}

sumAll([1, 4]);