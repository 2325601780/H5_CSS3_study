const arr = [1, 4, 7, 2, 5, 3]

function selectSort(arr){
    for(let i=0;i<arr.length;i++){
        let minIndex = i
        for(let j=i+1;j<arr.length;j++){
            if(arr[minIndex]>arr[j]){
                minIndex = j
            }
        }
        [arr[minIndex],arr[i]]=[arr[i],arr[minIndex]]
    }
    return arr
}

console.log(selectSort(arr));
