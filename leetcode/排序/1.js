//const arr = [1, 4, 7, 2, 5, 3]

// arr.sort((a,b)=>{
//     return a - b
// })


//const arr2 = arr.slice(0)
//const arr2 = [].concat(arr)
//const arr2 = [...arr]

//console.log(arr2);


const arr = [1, 'a', {age: 18}];
// let x = arr[0]
// let y = arr[1]
// let z = arr[2]

//const [x,y,z] = arr
//const [x,y] = arr
const [x,...y] = arr;       //rest

[arr[1],arr[0]] = [arr[0],arr[1]]

console.log(arr);
