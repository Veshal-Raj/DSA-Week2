function mergeSort(arr){
    if(arr.length<2){
        return arr
    }
    const mid= Math.floor(arr.length/2)
    const leftArr=arr.slice(0,mid)
    const rightArr=arr.slice(mid)
    return merge(mergeSort(leftArr),mergeSort(rightArr))
}
function merge(leftArr,rightArr){
    const sortedArray=[]
    while(leftArr.length&&rightArr.length){
        if(leftArr[0]<=rightArr[0]){
            sortedArray.push(leftArr.shift())
        }else{
            sortedArray.push(rightArr.shift())
        }
    }
    return [...sortedArray,...leftArr,...rightArr]
}
const arr=[8,1,0,2,87,5]
console.log(mergeSort(arr))