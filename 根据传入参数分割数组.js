/*
输入数组[1,2,3,4,5] 和第二个参数 2 
输出 [[1,2],[3,4],[5]]
*/
function chunk(arr,size){
  var size = size || 1;
  // 
  var result = [];
  
  // 我这里能想到的是遍历
  var l = arr.length; //数组的长度
  var s = Math.ceil(l/size)//  假如我们有长度为10的数组，size传入的是3，是要分成4个自数组的。
  for(var i =0;i<s;i++){
    result[i] = arr.slice(size*i,size*(i+1))
  }
  return result
}

console.log(chunk([1,2,3,4,5],2))