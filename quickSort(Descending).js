function descendingQuickSort(arr){
    if(arr.length<2){
        return arr
    }
    let pivot=arr[arr.length-1]
    let left=[]
    let right=[]
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]>pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...descendingQuickSort(left),pivot,...descendingQuickSort(right)]
}
const arr=[2,6,4,1,3,5,8]
const descendingSort=descendingQuickSort(arr)
console.log(descendingSort)