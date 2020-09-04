let obj = {
  name: 'a',
  age: 18,
  family: {
    fa: 'li',
    ma: 'liu'
  }
}

function deepClone(obj) {
  if (typeof obj === null) return null
  if (obj instanceof RegExp ) {
    return new RegExp(obj)
  }
  if (typeof obj !== 'object') return obj
  let newObj = new obj.constructor;
  for(i in obj) {
    if(obj.hasOwnProperty(i)) {
      newObj[i] = deepClone(obj[i])
    }
  }
  return newObj
}
