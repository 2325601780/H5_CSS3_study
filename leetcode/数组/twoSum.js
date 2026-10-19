let nums = [2,7,11, 15], target = 9;

//双层循环：枚举所有两两组合，O(n²)
// var twoSum = function(arr, targ) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === targ) {
//         return [i, j];
//       }
//     }
//   }
// };

var twoSum = function(arr, targ) {
  // 对象 {}
  let obj = {}

  for (let i = 0; i < arr.length; i++) {
    let left = arr[i]
    let hope = targ - left
    if(obj[hope]!==undefined){
        return [obj[hope], i]
    }
    obj[left] = i
  }
};

console.log(twoSum(nums, target));