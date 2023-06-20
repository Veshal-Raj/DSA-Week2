function selectionSort(arr){
    for(let i=0;i<arr.length-1;i++){
        let min=i
        let j
        for(j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min]){
                min=j
            }
        }
        if(min!=i){
            let temp=arr[i]
            arr[i]=arr[min]
            arr[min]=temp
        }
    }
    selectionSort2(arr2)
}
function selectionSort2(arr2){
    for(let i=0;i<arr2.length-1;i++){
        let min = i
        for(let j=i+1;j<arr2.length;j++){
            if(arr2[min]<arr2[j]){
                min=j
            }
        }
        if(min!=i){
            let temp=arr2[i]
            arr2[i]=arr2[min]
            arr2[min]=temp
        }
    }
}
const arr=[1,7,2,8,3,9]
const arr2=[4,5,1,2,7,8]
selectionSort(arr)
console.log(arr)
console.log(arr2)
