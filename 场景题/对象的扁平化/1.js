const arr = [1,2,[3,[4]]]
//arr.flat(Infinity)
function flatten(arr){
    const res = []
    function dfs(item){
        if(Array.isArray(item)){
            dfs(item)
        }else{
            res.push(item)
        }
    }
    dfs(arr)
    return res
}