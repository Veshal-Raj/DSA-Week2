function quickSort(arr){
    if(arr.length<2){
        return arr
    }
    let pivot=arr[arr.length-1]
    let left=[]
    let right=[]
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
    descendingQuickSort(arr)
}
function descendingQuickSort(arr){
    if(arr.length<2){
        return arr
    }
    let pivot=arr[arr.length-1]
    let right=[]
    let left=[]
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]>pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...descendingQuickSort(left),pivot,...descendingQuickSort(right)]
}
const  arr = [2,4,5,1,3]
const sortedArray=quickSort(arr)
const descending=descendingQuickSort(arr)
console.log(sortedArray)
console.log(descending)