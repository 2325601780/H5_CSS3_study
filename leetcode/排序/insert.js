const arr = [1, 4, 7, 2, 5, 3]

function insertSort(arr){
    for(let i =1;i<arr.length;i++){
        let cur = arr[i]
        let j = i-1
        for(;j>=0;j--){
            if(arr[j]>cur){
                arr[j+1]=arr[j]
            }else{
                break
            }
        }
        arr[j+1]=cur
    }
    return arr
}

console.log(insertSort(arr));
