const arr = [1, 4, 7, 2, 5, 3]

// function bubbleSort(arr){
//     for(let i = 0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]>arr[j]){
//                 [arr[j],arr[i]] = [arr[i],arr[j]]
//             }
//         }
//     }
//     return arr
// }

function bubbleSort(arr){
    let swapped = false
    for(let i =0;i<arr.length;i++){
        swapped = false
        for(let j =0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
                swapped = true
            }
        }
        if(!swapped){
            break
        }
    }
    return arr
}

console.log(bubbleSort(arr));
